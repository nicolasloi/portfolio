<script>
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<template>
  <div>
    <HeaderBar/>
    <div class="container">
      <router-view></router-view>
    </div>
    <FooterBar/>
  </div>
</template>

<style scoped>
</style>
