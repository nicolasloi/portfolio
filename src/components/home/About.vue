<script>
export default {};
</script>

<template>
  <section class="about" id="about">
    <h2>ABOUT <span>ME</span></h2>

    <p class="catchphrase">
      "As an apprentice software engineer focused on application development, I am passionate about computer science
      and find great satisfaction in enhancing users' lives with my creations."
    </p>

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
          <img src="../../assets/user.svg" alt="icon globe">
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

    <div class="grid-container-about">

      <div class="experience">
        <h3 class="experience-title">Professional experience</h3>

        <div class="experience-list">
          <div class="experience-item">
            <div class="date">
            <h4>IT apprentices - Application development orientation</h4>
            <p>Sarting 08.2022</p>
            </div>
            <p>Carrying out projects independently and as part of a team</p>
            <p class="lieu">Jobtrek Foundation - Lausanne</p>
          </div>
          <div class="experience-item">
            <div class="date">
              <h4>Computer technician - 3 day course</h4>
              <p>03.2022</p>
            </div>
            <p>customer support</p>
            <p class="lieu">Meanquest - Ecublens</p>
          </div>
          <div class="experience-item">
            <div class="date">
              <h4>Computer specialist - 2 day course</h4>
              <p>11.2021</p>
            </div>
            <p>IT systems management</p>
            <p class="lieu">Clinique La Source - Lausanne</p>
          </div>
          <div class="experience-item">
            <div class="date">
            <h4>Computer specialist - 1 day course</h4>
              <p>10.2021</p>
            </div>
            <p>Discovering the basics of development</p>
            <p class="lieu">Liip SA - Fribourg</p>
          </div>
        </div>
      </div>

      <div class="hobbies">
        <h3 class="hobbies-title">Hobbies</h3>
        <div class="hobbies-list">
          <p>Football</p>
          <p>Digital</p>
          <p>gym</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: var(--h1-font);
  font-weight: 500;
}

h2 span {
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
  margin-top: 2rem;
  width: 26.5rem;
  font-weight: 400;
  font-size: 1.25rem;
}

.grid-container-about {
  display: grid;
  grid-template-columns: 65% 35%;
  gap: 2rem;
}

.grid-container-about h3 {
  font-size: var(--h2-font)  ;
}

.grid-container-about p {
  font-size: var(--p-font)  ;
}

.experience-list {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 20px;
}

.date {
  display: flex;
  justify-content: space-between;
}

.date p {
  color: var(--primary-color);
  font-weight: 700;
}

.hobbies {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  text-align: right;
}

.lieu {
  color: var(--primary-color);
}

/* RESPONSIVE */
@media screen and (max-width: 1300px) {
  .grid-container-about {
    display: block;
  }
  .hobbies {
    display: flex;
    margin-top: 4rem;
    gap: 20px;
    align-items: flex-start;
    text-align: left;
  }
}

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

  .catchphrase {
    font-size: 1rem;
  }
}
</style>