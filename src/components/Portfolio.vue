<template>
  <section id="gallery" class="section-card relative">
    <!-- Decorative blobs -->
    <div class="blob-pink"></div>
    <div class="blob-purple"></div>

    <!-- Section title -->
    <h2 class="section-title">Portfolio Preview</h2>

    <!-- Gallery grid container (first 6 images) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      <div 
        v-for="(image, index) in previewImages" 
        :key="index" 
        class="gallery-item cursor-pointer"
        @click="openLightbox(image)"
      >
        <img :src="image" alt="tattoo" class="gallery-img">
      </div>
    </div>

    <!-- Lightbox overlay -->
    <transition name="lightbox-fade">
      <div
        v-if="lightboxImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 overflow-auto"
        @click.self="closeLightbox"
      >
        <div class="relative max-w-4xl w-full mx-4 my-10" ref="lightboxContainer" @click.stop>
          <!-- Close button -->
          <button
            @click="closeLightbox"
            class="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white shadow-lg transition-all hover:scale-110 hover:opacity-90"
          >
            <span class="text-3xl font-handwriting leading-none select-none">X</span>
          </button>
          <!-- Lightbox image -->
          <img 
            :src="lightboxImage" 
            alt="tattoo" 
            class="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
          >
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

// Automatically import all images from portfolio folder
const allImageModules = import.meta.glob('/src/assets/images/portfolio/*.{jpg,jpeg,png}', { eager: true })
const allImages = Object.values(allImageModules).map((m: any) => m.default || {})

// Only show first 6 images on homepage
const previewImages = ref(allImages.slice(0, 6))

// Lightbox state
const lightboxImage = ref<string | null>(null)
const lightboxContainer = ref<HTMLElement | null>(null)

// Open lightbox
const openLightbox = (image: string) => {
  lightboxImage.value = image

  // Lock background scroll
  document.body.style.overflow = 'hidden'

  // Scroll container into view smoothly
  nextTick(() => {
    lightboxContainer.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
}

// Close lightbox
const closeLightbox = () => {
  lightboxImage.value = null

  // Restore scroll
  document.body.style.overflow = ''
}
</script>

<style scoped>
/* Smooth fade & scale transition for lightbox */
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
</style>
