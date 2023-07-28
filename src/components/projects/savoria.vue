<script>
export default {};
</script>

<template>
  <div class="project">
    <h3>Savoria</h3>
    <div class="tools">
      <h6>HTML</h6>
      <h6>CSS</h6>
      <h6>JavaScript</h6>
    </div>
    <p>A simple restaurant website done in basic HTML/CSS</p>
    <img src="../../assets/screen_savoria.png" alt="screen JobtrekSuivis">
    <router-link class="btn" to="/portfolio/projects/savoria">VIEW MORE</router-link>
  </div>
</template>

<style scoped>

.project {
  display: flex;
  flex-direction: column;
  background-color: var(--other-color);
  min-height: 600px;
  padding-left: 1.50rem;
  box-shadow: -1px 15px 26px -4px rgb(161 151 151 / 10%);
  border-radius: 0.7rem;
  transition: all ease 0.5s;
}

.project:hover {
  transform: translateY(-8px);
}

h3 {
  font-size: var(--h2-font);
  font-weight: 700;
  color: var(--primary-color);
  margin-top: 2.50rem;
  margin-bottom: 1rem;
}

.tools {
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

p {
  font-size: var(--p-font);
  font-weight: 400;
  margin-top: 2rem;
  margin-right: 3rem;
  margin-bottom: 1rem;
}

img {
  max-width: 100%;
  width: auto;
  margin-top: auto;
  margin-right: 1.50rem;
}

.btn {
  display: inline-block;
  padding: 12px 26px;
  background: var(--primary-color);
  color: var(--other-color);
  font-size: var(--p-font);
  font-weight: bold;
  border-radius: 0.7rem;
  transition: all ease 0.5s;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  align-self: center;
}

.btn:hover {
  transform: scale(1.1) translateX(-5px);
}

@media screen and (max-width: 1400px) {
  .project {
    display: flex;
    flex-direction: column;
    background-color: var(--other-color);
    min-height: 400px;
  }
}
</style>