<script>
import projects1 from "@/components/projects/projects1.vue";
import projects2 from "@/components/projects/projects2.vue";
import projects3 from "@/components/projects/projects3.vue";

export default {
  components: {
    projects1,
    projects2,
    projects3
  },
};
</script>

<template>
  <section class="projects" id="projects">
    <h2><span>MY</span> PROJECTS</h2>
    <div class="all-projects">
      <projects1 />
      <projects2 />
      <projects3 />
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
  gap: 2.5rem;
  margin-top: 4rem;
  min-height: 400px;
}

@media screen and (max-width: 1400px) {
  .all-projects {
    display: flex;
    flex-direction: column;
  }
}

</style>