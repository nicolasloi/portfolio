<script>
  import Hero from "@/components/home/Hero.vue";
  import About from "@/components/home/About.vue";
  import HomeProjects from "@/components/home/HomeProjects.vue";

  export default {
    components: {
      Hero,
      About,
      HomeProjects
    },
  };
</script>

<template>
  <div>
    <Hero />
    <About />
    <HomeProjects />
  </div>
</template>

<style scoped>
</style>