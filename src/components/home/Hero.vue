<script>
export default {};
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-text">
      <h3>Hello, i'm</h3>
      <h1>NICOLAS LOISON</h1>
      <h4>It apprentice in application development</h4>
      <div class="hero-btnn">
        <a class="btn" href="#about">ABOUT ME</a>
        <a class="btn2" href="#projects">PROJECTS</a>
      </div>
    </div>

    <div class="hero-img">
      <img src="../../assets/hero_bg.png" alt="blue spot">
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
  gap: 2rem;
}


.hero-img {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
}

.hero-img img {
  position: relative;
  height: auto;
  width: 100%;
  max-width: 70%;
}

.hero-img img::before {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  animation: showRight 1s ease forwards;
  animation-delay: 1.4s;
}

.hero-text h1 {
  position: relative;
  font-size: var(--h1-font);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1.19rem;
}

.hero-text h1::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  animation: showRight 1s ease forwards;
  animation-delay: 0.8s;
}

.hero-text h3 {
  position: relative;
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1.19rem;
}

.hero-text h3::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  animation: showRight 1s ease forwards;
  animation-delay: 0.6s;
}

.hero-text h4 {
  position: relative;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1.63rem;
}

.hero-text h4::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  animation: showRight 1s ease forwards;
  animation-delay: 1s;
}

.hero-btnn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
}

.hero-text .hero-btnn::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  animation: showRight 1s ease forwards;
  animation-delay: 1.2s;
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
}

.btn:hover {
  transform: scale(1.1) translateX(-5px);
}

.btn2 {
  display: inline-block;
  padding: 12px 26px;
  background: var(--bg-color);
  color: var(--primary-color);
  font-size: var(--p-font);
  font-weight: bold;
  border-radius: 0.7rem;
  border: 1px solid var(--primary-color, #1097FF);
  transition: all ease 0.5s;
}

.btn2:hover {
  transform: scale(1.1) translateX(5px);
}
/* keyframes animation */

@keyframes showRight {
  100% {
    width: 0;
  }
}

</style>