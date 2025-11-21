<template>
  <div>
    <HeaderWrapper />
    <SectionWrapper>
      <Hero />
    </SectionWrapper>
    <SectionWrapper>
      <About />
    </SectionWrapper>
    <SectionWrapper>
      <Portfolio />
    </SectionWrapper>
    <SectionWrapper>
      <Contact />
    </SectionWrapper>
    <SectionWrapper>
      <Footer />
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

import HeaderWrapper from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import SectionWrapper from './components/SectionWrapper.vue'

// SEO / Meta
useHead({
  title: 'The Artistic Sandwich | Fineline & Black & Grey Tattoos',
  meta: [
    { name: 'description', content: 'Precision, creativity, and passion in every custom tattoo. Explore the portfolio of The Artistic Sandwich, a master of fineline and black & grey tattoos in Jeffreys Bay.' },
    { name: 'keywords', content: 'tattoo, fineline tattoos, black & grey tattoos, custom tattoos, Jeffreys Bay, South Africa' },
    { property: 'og:title', content: 'The Artistic Sandwich | Fineline & Black & Grey Tattoos' },
    { property: 'og:description', content: 'Precision, creativity, and passion in every custom tattoo.' },
    { property: 'og:image', content: '/images/hero.jpg' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'The Artistic Sandwich | Fineline & Black & Grey Tattoos' },
    { name: 'twitter:description', content: 'Precision, creativity, and passion in every custom tattoo.' },
    { name: 'twitter:image', content: '/images/hero.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://avadatattoo.com' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TattooParlor",
        "name": "The Artistic Sandwich",
        "image": "/images/hero.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4 Da Gama Road",
          "addressLocality": "Jeffreys Bay",
          "postalCode": "6330",
          "addressCountry": "South Africa"
        },
        "url": "https://avadatattoo.com",
        "sameAs": [
          "https://www.instagram.com/theartisticsandwich_tattoo/",
          "https://www.instagram.com/avada.tattoo.artistry/"
        ]
      })
    }
  ]
})
</script>

