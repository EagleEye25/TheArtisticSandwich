<template>
  <div
    ref="el"
    :class="[
    'transition-all duration-700 ease-out opacity-0 translate-y-8',
    isVisible ? 'opacity-100 translate-y-0 delay-[250ms]' : ''
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'

const { el, isVisible } = useScrollReveal()
</script>
