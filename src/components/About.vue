<template>
  <section id="about" class="section-card relative">
    <!-- Decorative blobs -->
    <div class="blob-pink"></div>
    <div class="blob-purple"></div>

    <!-- Section title -->
    <h2 class="section-title">Meet The Artist Behind The Ink</h2>

    <!-- Artist description -->
    <p class="text-center text-gray-700 max-w-2xl mx-auto mb-8">
      With a passion for <span class="font-semibold">fineline black & grey tattooing</span>, she transforms ideas into timeless pieces of art. Her work is defined by <span class="font-semibold">precision, creativity, and meticulous attention to detail</span>, ensuring each tattoo is a reflection of her client’s story. Beyond technique, she brings a thoughtful, collaborative approach to every design, making each session a memorable experience.
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
