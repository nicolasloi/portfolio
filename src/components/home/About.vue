<script>
export default {};
</script>

<template>
  <section class="about" id="about">
    <h2>ABOUT <span>ME</span></h2>

    <div class="container-icon">
      <div class="info-icon">
        <div class="group-icon">
          <img src="../../assets/mail.svg" alt="icon mail">
          <p id="text-icon">nicolasloison13@icloud.com</p>
        </div>
        <div class="group-icon">
          <img src="../../assets/birthday.svg" alt="icon cake">
          <p id="text-icon">13.10.2004</p>
        </div>
        <div class="group-icon">
          <img src="../../assets/language.svg" alt="icon language">
          <p id="text-icon">French, English</p>
        </div>
        <div class="group-icon">
          <img src="../../assets/globe.svg" alt="icon globe">
          <p id="text-icon">Swiss, French</p>
        </div>
        <div class="group-icon">
          <img src="../../assets/map.svg" alt="icon map">
          <p id="text-icon">Vaud, Switzerland</p>
        </div>
        <div class="group-icon">
          <img id="github" src="../../assets/github.png" alt="icon github">
          <p id="text-icon">nicolasloi</p>
        </div>
      </div>
    </div>

    <p class="catchphrase">
      "As a software engineer focused on application development, I am passionate about computer science and find great
      satisfaction in enhancing users' lives with my creations."
    </p>
  </section>
</template>

<style scoped>
  h2 {
    font-size: var(--h1-font);
    font-weight: 500;
  }

  h2 span{
    color: var(--primary-color);
  }

  .container-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.2rem;
    margin-bottom: 2.2rem;
  }

  .info-icon {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 82.0625rem;
    height: 8.5625rem;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    gap: 1.25rem;
    flex-shrink: 0;
    flex-wrap: wrap;
  }
  .group-icon {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  #github {
    width: 2.0625rem;
    height: 2.0625rem;
  }

  #text-icon {
    text-align: center;
    font-weight: 400;
    font-size: var(--picon-font);
  }

  .catchphrase {
    width: 26.5rem;
    font-weight: 400;
    font-size: 1.25rem;
  }

  /* RESPONSIVE */
  @media screen and (max-width: 1200px) {
    .info-icon {
      display: grid;
      grid-template-columns: repeat(2, 2fr);
    }
  }

  @media screen and (max-width: 1023px) {
    .info-icon {
      margin-top: 6rem;
      margin-bottom: 6rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>