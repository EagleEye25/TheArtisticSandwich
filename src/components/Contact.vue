<template>
  <section id="contact" class="section-card">
    <!-- Flowing decorative blobs -->
    <div class="blob-pink"></div>
    <div class="blob-purple"></div>

    <h2 class="section-title">Contact</h2>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Shop Details -->
      <div class="space-y-4 bg-white/80 p-6 rounded-2xl shadow-md backdrop-blur-md">
        <h3 class="font-semibold text-pink-700">Avada Tattoo Artistary</h3>
        <p class="text-xl text-gray-700">
          <span class="font-semibold">Address:</span><br>
          Jeffreys Bay Surf Village<br>
          4 Da Gama Road<br>
          Jeffreys Bay, South Africa 6330
        </p>
        <p>
          <span class="text-xl font-semibold">Website:</span> 
          <a href="https://avadatattoo.com" target="_blank" class="text-indigo-600 hover:underline">
            www.avadatattoo.com
          </a>
        </p>
        
        <!-- Google Maps Button -->
        <a href="https://www.google.com/maps/@-34.0568372,24.9221741,17z" 
           target="_blank" 
           class="btn-primary btn-md mt-2">
          View on Google Maps
        </a>
      </div>

      <!-- Instagram / Socials -->
      <div class="space-y-4 bg-white/80 p-6 rounded-2xl shadow-md backdrop-blur-md">
        <h3 class="font-semibold text-purple-700">Follow on Instagram</h3>
        <p class="text-xl text-gray-700">Check out the latest tattoos and designs:</p>

        <!-- Responsive button container -->
        <div class="flex flex-col gap-4 pt-2 min-w-0 sm:flex-row sm:flex-wrap sm:gap-4">
          <!-- Artistic Sandwich Instagram -->
          <a href="https://www.instagram.com/theartisticsandwich_tattoo/" 
             target="_blank" 
             class="btn-primary btn-md text-center w-full sm:w-auto box-border">
            @theartisticsandwich_tattoo
          </a>

          <!-- Avada Instagram -->
          <a href="https://www.instagram.com/avada.tattoo.artistry/" 
             target="_blank" 
             class="btn-secondary btn-md text-center w-full sm:w-auto box-border">
            @avada.tattoo.artistry
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// No reactive logic needed
</script>
