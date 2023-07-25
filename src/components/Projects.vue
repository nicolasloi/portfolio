<script>

import projects1 from "@/components/projects/projects1.vue";

export default {
  components: {
    projects1
  },
};
</script>

<template>
  <section class="projects" id="projects">
    <h2><span>MY</span> PROJECTS</h2>
    <projects1 />
  </section>
</template>

<style scoped>
h2 {
  margin-top: 3rem;
  font-size: var(--h1-font);
  font-weight: 500;
}

h2 span {
  color: var(--primary-color);
}

</style>