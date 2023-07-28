<script>

</script>

<template>
  <section class="page-project">
    <div class="title">
      <router-link class="btn" to="./projects">GO BACK</router-link>
      <h2>Movie Manager</h2>
    </div>
    <p>For this project I had 1 month (3 days/week). It was my first time using Laravel. So I decided to create my own movie manager.</p>
    <p class="txt">The home page with hot movies and the most popular series. Data from TMDB api. </p>
    <img src="../../assets/home_movieList.png" alt="screen movieManager">
    <p class="txt">The dashboard page allows you to view all the films you've seen once you've logged in.
      You can sort them by rating or by name. You can also do a search (done with meilisearch).</p>
    <img src="../../assets/screen_movieManager.png" alt="screen movieManager">
    <p class="txt">On this page we add a film. By adding the title, a cover image, a description, and a rating.
      It's almost the same for the edit page</p>
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
  margin-top: 0.5rem;
  margin-right: 1.50rem;
}

.txt {
  margin-top: 3rem;
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