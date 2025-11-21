<template>
  <section id="about" class="section-card relative">
    <!-- Decorative blobs -->
    <div class="blob-pink"></div>
    <div class="blob-purple"></div>

    <!-- Section title -->
    <h2 class="section-title">About The Artistic Sandwich</h2>

    <!-- Artist description -->
    <p class="text-center text-gray-700 max-w-2xl mx-auto mb-8">
      She is a master of <span class="font-semibold">fineline tattoos</span> and <span class="font-semibold">black & grey designs</span>, celebrated for her <span class="font-semibold">precision, creativity, and meticulous attention to detail</span>. Each tattoo is thoughtfully crafted to tell a unique story and capture the essence of her clients’ vision.
    </p>

    <!-- Specialties grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div
        v-for="(specialty, index) in specialties"
        :key="index"
        class="specialty-card"
      >
        <h3 class="text-lg font-semibold text-purple-700 mb-2">{{ specialty.title }}</h3>
        <p class="text-gray-700 text-sm">{{ specialty.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  interface Specialty {
    title: string
    description: string
  }

  const specialties = ref<Specialty[]>([
    {
      title: 'Fineline Tattoos',
      description: 'Delicate, precise line work for intricate designs.'
    },
    {
      title: 'Black & Grey',
      description: 'Shaded, timeless designs emphasizing contrast and depth.'
    },
    {
      title: 'Custom Designs',
      description: 'Personalized tattoos tailored to each client’s vision.'
    }
  ])
</script>
