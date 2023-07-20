<script setup>

</script>

<template>
  <section class="hero" id="hero">
  <div class="hero-text">
    <h3>Hello, i'm</h3>
    <h1>NICOLAS LOISON</h1>
    <h4>It apprentice in application development</h4>
    <div class="hero-btnn">
      <a class="btn">ABOUT ME</a>
      <a class="btn2">PROJECTS</a>
    </div>
  </div>

  <div class="hero-img">
    <img src="../assets/hero_bg.png" alt="blue spot">
  </div>
  </section>
</template>

<style scoped>

.hero {
  position: relative;
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  gap: 2rem;
}

.hero-img img {
  height: auto;
  width: 100%;
}

.hero-text h1 {
  font-size: var(--h1-font);
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 1.19rem;
}

.hero-text h3 {
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1.19rem;
}

.hero-text h4 {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1.63rem;
}

.hero-btnn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
}

.btn {
  display: inline-block;
  padding: 12px 26px;
  background: var(--primary-color);
  color: var(--text-color);
  font-size: var(--p-font);
  font-weight: bold;
  border-radius: 0.7rem;
  transition: all ease 0.5s;
}

.btn:hover {
  transform: scale(1.1) translateX(-5px);
}

.btn2 {
  display: inline-block;
  padding: 12px 26px;
  background: var(--bg-color);
  color: var(--text-color);
  font-size: var(--p-font);
  font-weight: bold;
  border-radius: 0.7rem;
  border: 1px solid var(--primary-color, #1097FF);
  transition: all ease 0.5s;
}

.btn2:hover {
  transform: scale(1.1) translateX(5px);
}

/* text */

.center-text {
  text-align: center;
}

.center-text strong {
  font-size: var(--p-font);
  font-weight: 500;
  color: var(--primary-color);
}

.center-text h2 {
  font-size: var(--h2-font);
  font-weight: 900;
}
</style>