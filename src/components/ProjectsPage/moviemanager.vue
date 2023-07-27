<script>

</script>

<template>
  <section class="page-project">
    <div class="title">
      <router-link class="btn" to="/projects">GO BACK</router-link>
      <h2>Movie Manager</h2>
    </div>
    <p>This project is a movie manager that allows users to store the movies they have watched and rate them on a
      scale of 1 to 5 stars, as well as leave a comment.
      Users can log in, log out, and register to access their movie list.</p>
  </section>
</template>

<style scoped>
.title {
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 12px 26px;
  background: var(--primary-color);
  color: var(--bg-color);
  font-size: var(--p-font);
  font-weight: bold;
  border-radius: 0.7rem;
  transition: all ease 0.5s;
  margin-top: 2rem;
  align-self: center;
}

.btn:hover {
  transform: scale(1.1) translateX(-5px);
}

p {
  margin-top: 2rem;
  font-size: var(--p-font);
}

h2 {
  margin-top: 1.5rem;
  font-size: var(--h1-font);
  font-weight: 400;
  color: var(--primary-color);
}
</style>