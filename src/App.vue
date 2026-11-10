<template>
  <!-- Header ja footer on mõlemal lehel, vahele tuleb aktiivne leht -->
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: { HeaderComponent, FooterComponent }
}
</script>

<!-- Ühine stiilifail kogu rakendusele -->
<style src="./assets/style.css"></style>