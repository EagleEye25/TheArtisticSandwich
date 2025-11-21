import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollReveal(threshold = 0.1) {
  const isVisible = ref(false)
  const el = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0] // safer extraction
        if (!entry) return

        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(el.value)
  })

  onBeforeUnmount(() => {
    if (observer && el.value) observer.unobserve(el.value)
  })

  return { el, isVisible }
}
