<template>
  <header class="site-header">
    <div class="site-header-inner">
      <!-- Logo -->
      <h1 class="logo-gradient text-xl sm:text-2xl">The Artistic Sandwich</h1>

      <!-- Hamburger for mobile -->
      <button
        @click="isOpen = !isOpen"
        class="sm:hidden text-purple-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!isOpen"
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg
          v-else
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Navigation -->
      <nav>
        <ul
          :class="{
            'flex flex-col sm:flex-row sm:space-x-6 mt-4 sm:mt-0': true,
            'hidden sm:flex': !isOpen,
            'block': isOpen
          }"
        >
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#gallery" class="nav-link">Gallery</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
/* Nothing extra here: uses your global Tailwind styles */
</style>
