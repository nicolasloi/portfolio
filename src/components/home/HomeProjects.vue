<script>
export default {};
</script>

<template>
  <section class="projects" id="projects">
    <h2><span>MY</span> PROJECTS</h2>
    <div class="projects-content">
      <div class="row">
        <h3>Movie Manager</h3>
        <p>This project is a movie manager that allows users to store the movies they have watched and rate them
          on a scale of 1 to 5 stars, as well as leave a comment.
          Users can log in, log out, and register to access their movie list.</p>
        <div class="tools">
          <h6>Laravel</h6>
          <h6>Tailwind</h6>
          <h6>DaisyUI</h6>
          <h6>Meilisearch</h6>
          <h6>TMDB API</h6>
        </div>
      </div>

      <div class="row">
        <h3>Umbrella</h3>
        <p>Umbrella is a web application that allows users to plan their activities based on weather forecasts.</p>
        <div class="tools">
          <h6>PHP</h6>
          <h6>Tailwind</h6>
          <h6>DaisyUI</h6>
          <h6>postgreSQL</h6>
          <h6>OpenWeatherMap</h6>
        </div>
      </div>

      <div class="row">
        <h3>Jobtrek Suivis</h3>
        <p>The main objective of JobtrekSuivis is to allow companies and trainers to track and evaluate the skills of
          apprentices throughout their apprenticeship program.
          The application provides an efficient way to collect, store, and analyze data on the skills acquired by apprentices,
          facilitating the tracking of their progress and evaluation of their performance.</p>
        <div class="tools">
          <h6>C#</h6>
          <h6>ReactJS</h6>
          <h6>.Net Core</h6>
          <h6>PostgreSQL</h6>
          <h6>MaterialUI</h6>
        </div>
      </div>
    </div>
    <router-link class="btn" to="/portfolio/projects">VIEW MORE</router-link>
  </section>
</template>

<style scoped>
  .projects{
    position: relative;
    display: flex;
    justify-items: center;
    flex-direction: column;
  }

  .projects::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    animation: showRight 2s ease forwards;
    animation-delay: 1.9s;
  }

  h2 {
    font-size: var(--h1-font);
    font-weight: 500;
  }

  h2 span {
    color: var(--primary-color);
  }

  .projects-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px , auto));
    gap: 2.5rem;
    margin-top: 4rem;
    min-height: 400px;
  }

  .row {
    display: flex;
    flex-direction: column;
    background: var(--other-color);
    box-shadow: -1px 15px 26px -4px rgb(161 151 151 / 15%);
    border-radius: 0.7rem;
    padding: 30px 20px;
    cursor: pointer;
    transition: all ease 0.5s;
  }

  .row:hover {
    transform: translateY(-8px);
  }

  .row h3 {
    color: var(--primary-color);
  }

  .row p {
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: var(--p-font);
  }

  .tools {
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
    margin-top: auto;
  }

  .tools h6{
    border-radius: 0.625rem;
    border: 1px solid #1097FF;

    font-size: 0.725rem;
    font-weight: 400;
    padding: 4px;
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
    margin-top: 1.5rem;

    align-self: center;
  }

  .btn:hover {
    transform: scale(1.1) translateX(-5px);
  }

  /* keyframes animation */

  @keyframes showRight {
    100% {
      width: 0;
    }
  }

</style>