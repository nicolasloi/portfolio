<script setup>
  import HeaderBar from "@/components/HeaderBar.vue";
  import { ref, computed } from 'vue'
  import Home from "@/components/Home.vue";
  import Projects from "@/components/Projects.vue";
  import NotFound from "@/components/NotFound.vue";

  const routes = {
    '/': Home,
    '/projects': Projects
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
</script>

<template>
  <HeaderBar />
  <div class="container">
    <component :is="currentView" />
  </div>
</template>

<style scoped>
  .container {
    margin-top: 80px;
  }
</style>
