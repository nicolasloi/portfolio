<script>

</script>

<template>
  <section class="page-project">
    <div class="title">
      <router-link class="btn" to="./projects">GO BACK</router-link>
      <h2>Umbrella</h2>
    </div>
    <p>For this project, I had 10 days to complete it.
      It was the first time I'd used PHP for a real project. It wasn't a solo project, I worked in pairs.
      We decided to make Umbrella because we wanted to make a weather application,
      but since that already existed, we invented a new concept.
      The aim of the app is to find an activity based on the weather.</p>
    <p class="txt">Home page, in the input field enter the city you are in</p>
    <img src="../../assets/umbrella_home.png" alt="screen umbrella">
    <p class="txt">On the left, all the weather information for the selected city. On the right,
      the activities we propose in relation to the weather.
      We've rated the activities from 1 to 5 for each type of weather.
      There's also information on whether it's indoors or outdoors.</p>
    <img src="../../assets/umbrella_activity.png" alt="screen umbrella">
    <p class="txt">You will find below the weather information for the next few hours and days.</p>
    <img src="../../assets/umbrella_weather.png" alt="screen umbrella">

    <h3>Tools</h3>
    <div class="tools">
      <h6>PHP</h6>
      <h6>Tailwind</h6>
      <h6>DaisyUI</h6>
      <h6>postgreSQL</h6>
      <h6>OpenWeatherMap</h6>
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