<template>
  <section class="section-card relative flex flex-col items-center justify-center text-center">
    <!-- Decorative blobs -->
    <div class="blob-pink"></div>
    <div class="blob-purple"></div>

    <!-- Hero text -->
    <h2 class="section-title mb-4">
      Fineline Black & Grey Tattoo Artist
    </h2>

    <p class="hero-subtitle font-bold mb-8">
      Precision, creativity, and passion in every custom tattoo. Each design is thoughtfully crafted to capture the essence of your vision.
    </p>

    <!-- Featured image -->
    <img 
      src="/images/hero.jpg" 
      alt="Tattoo Illustration" 
      class="hero-img"
    >

    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 pt-6">
      <a href="#contact" class="btn-primary btn-md">Book a Session</a>
      <a href="#gallery" class="btn-secondary btn-md">View Portfolio</a>
    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive logic needed
</script>

<style>
</style>

