<script>
import HeaderBar from "@/components/HeaderBar.vue";

export default {
  name: 'App',
  components: {
    HeaderBar
  }
}
</script>

<template>
  <div>
    <HeaderBar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 80px;
}
</style>
