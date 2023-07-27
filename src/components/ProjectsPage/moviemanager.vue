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
    <img src="../../assets/home_movieList.png" alt="screen movieManager">
    <img src="../../assets/screen_movieManager.png" alt="screen movieManager">
    <img src="../../assets/create_movieList.png" alt="screen movieManager">

    <h3>Tools</h3>
    <div class="tools">
      <h6>Laravel</h6>
      <h6>Tailwind</h6>
      <h6>DaisyUI</h6>
      <h6>Meilisearch</h6>
      <h6>TMDB API</h6>
    </div>

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

img {
  max-width: 100%;
  width: auto;
  margin-top: 2rem;
  margin-right: 1.50rem;
}

h3 {
  font-size: 2rem;
  font-weight: 400;
  margin-top: 2rem;
}

.tools {
  margin-top: 1rem;
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.tools h6 {
  border-radius: 0.625rem;
  border: 1px solid #1097FF;

  font-size: 0.725rem;
  font-weight: 400;
  padding: 5px;
}

</style>