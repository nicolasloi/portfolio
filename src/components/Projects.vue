<script>
import movieManager from "@/components/projects/movieManager.vue";
import umbrella from "@/components/projects/umbrella.vue";
import jobtrekSuivis from "@/components/projects/jobtrekSuivis.vue";
import savoria from "@/components/projects/savoria.vue";

export default {
  components: {
    movieManager,
    umbrella,
    jobtrekSuivis,
    savoria
  },
};
</script>

<template>
  <section class="projects" id="projects">
    <h2><span>MY</span> PROJECTS</h2>
    <div class="all-projects">
      <movieManager />
      <umbrella />
      <jobtrekSuivis />
      <savoria />
    </div>
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

.all-projects{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 2.5rem;
  margin-top: 4rem;
  min-height: 400px;
}

@media screen and (max-width: 1400px) {
  .all-projects {
    display: flex;
    flex-direction: column;
    min-height: 400px;
  }
}

</style>