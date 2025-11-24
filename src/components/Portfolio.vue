<template>
  <section id="gallery" class="section-card relative">
    <!-- Decorative blobs -->
    <div class="blob-pink"></div>
    <div class="blob-purple"></div>

    <!-- Section title -->
    <h2 class="section-title">Portfolio Preview</h2>

    <!-- Gallery grid (first 6 images) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      <div 
        v-for="(image, index) in previewImages" 
        :key="index" 
        class="gallery-item cursor-pointer"
        @click="openLightbox(image)"
      >
        <img :src="image" alt="tattoo" class="gallery-img" draggable="false">
      </div>
    </div>

    <!-- Lightbox -->
    <transition name="lightbox-fade">
      <div
        v-if="lightboxImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 overflow-auto"
        @click.self="closeLightbox"
      >
        <div class="relative max-w-4xl w-full mx-4 my-10" ref="lightboxContainer" @click.stop>
          <!-- Close button -->
          <button
            @click.stop="closeLightbox"
            class="absolute top-3 right-3 w-10 h-10 flex items-center justify-center 
                  rounded-full bg-white/20 text-white shadow-lg transition-all 
                  hover:scale-110 hover:opacity-90 pointer-events-auto"
            style="z-index: 50;"
          >
            <span class="text-3xl font-handwriting leading-none select-none">X</span>
          </button>

          <!-- Zoomable + pannable image -->
          <img 
            ref="imageEl"
            :src="lightboxImage" 
            alt="tattoo"
            draggable="false"
            class="w-full max-h-[90vh] object-contain rounded-lg shadow-lg select-none pannable-image"
            :style="{
              transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
              cursor: scale > 1 ? (isPanning ? 'grabbing' : 'grab') : 'auto',
              zIndex: 10
            }"
            @wheel.prevent="onWheel"
            @dblclick="resetZoom"
            @pointerdown.prevent="onPointerDown"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
          />
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, nextTick, onBeforeUnmount } from 'vue'

// Import portfolio images automatically
const allImageModules = import.meta.glob('/src/assets/images/portfolio/*.{jpg,jpeg,png}', { eager: true })
const allImages = Object.values(allImageModules).map((m: any) => m.default || {})

// Only show first 6 images
const previewImages = ref(allImages.slice(0, 6))

// Lightbox state
const lightboxImage = ref<string | null>(null)
const lightboxContainer = ref<HTMLElement | null>(null)
const imageEl = ref<HTMLImageElement | null>(null)

// Zoom + pan state
const scale = ref(1)
const translate = ref({ x: 0, y: 0 })
const isPanning = ref(false)

let startPointer = { x: 0, y: 0 }
let panStart = { x: 0, y: 0 }
let activePointerId: number | null = null

// Open lightbox
const openLightbox = (image: string) => {
  lightboxImage.value = image
  document.body.style.overflow = 'hidden'

  scale.value = 1
  translate.value = { x: 0, y: 0 }

  nextTick(() => {
    lightboxContainer.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
}

// Close lightbox
const closeLightbox = () => {
  // Release pointer capture BEFORE removing the image
  if (activePointerId !== null && imageEl.value?.releasePointerCapture) {
    try { imageEl.value.releasePointerCapture(activePointerId) } catch {}
  }

  activePointerId = null
  isPanning.value = false

  lightboxImage.value = null
  document.body.style.overflow = ''

  scale.value = 1
  translate.value = { x: 0, y: 0 }
}

// Mouse wheel zoom
const onWheel = (e: WheelEvent) => {
  const delta = e.deltaY > 0 ? -0.12 : 0.12
  const newScale = Math.min(5, Math.max(1, scale.value + delta))

  if (imageEl.value) {
    const rect = imageEl.value.getBoundingClientRect()
    const cx = e.clientX - rect.left
    const cy = e.clientY - rect.top
    const scaleFactor = newScale / scale.value

    translate.value.x -= (cx - rect.width / 2) * (scaleFactor - 1)
    translate.value.y -= (cy - rect.height / 2) * (scaleFactor - 1)
  }

  scale.value = newScale
}

// Pointer down for panning
const onPointerDown = (e: PointerEvent) => {
  if (scale.value === 1) return

  e.preventDefault()

  const target = imageEl.value
  if (target && target.setPointerCapture) {
    try {
      target.setPointerCapture(e.pointerId)
      activePointerId = e.pointerId
    } catch {}
  }

  isPanning.value = true
  startPointer = { x: e.clientX, y: e.clientY }
  panStart = { x: translate.value.x, y: translate.value.y }

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointercancel', onPointerUp)
}

const onPointerMove = (e: PointerEvent) => {
  if (!isPanning.value) return
  if (activePointerId !== null && e.pointerId !== activePointerId) return

  e.preventDefault()

  const dx = e.clientX - startPointer.x
  const dy = e.clientY - startPointer.y
  translate.value.x = panStart.x + dx
  translate.value.y = panStart.y + dy
}

const onPointerUp = (e: PointerEvent) => {
  if (activePointerId !== null && e.pointerId !== activePointerId) return

  isPanning.value = false

  if (activePointerId !== null && imageEl.value?.releasePointerCapture) {
    try { imageEl.value.releasePointerCapture(activePointerId) } catch {}
  }

  activePointerId = null

  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointercancel', onPointerUp)
}

// Double-click resets zoom
const resetZoom = () => {
  scale.value = 1
  translate.value = { x: 0, y: 0 }
}

// Touch pinch zoom
let touchStartDist = 0
let initialScale = 1

const getDistance = (touches: TouchList) => {
  if (touches.length < 2) return 0
  const [a, b] = touches
  if (!a || !b) return 0
  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY)
}

const onTouchStart = (e: TouchEvent) => {
  if (e.touches.length === 2) {
    touchStartDist = getDistance(e.touches)
    initialScale = scale.value
  }

  if (e.touches.length === 1 && scale.value > 1) {
    e.preventDefault()
  }
}

const onTouchMove = (e: TouchEvent) => {
  if (e.touches.length === 2) {
    const newDist = getDistance(e.touches)
    const zoomFactor = newDist / (touchStartDist || 1)
    scale.value = Math.min(5, Math.max(1, initialScale * zoomFactor))
  }
}

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointercancel', onPointerUp)
})
</script>

<style scoped>
/* Lightbox fade */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.lightbox-fade-enter-to,
.lightbox-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Prevent browser image dragging/selecting and ensure touch actions behave */
.pannable-image {
  -webkit-user-drag: none;
  user-select: none;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
