<script>

</script>

<template>
  <section class="page-project">
    <div class="title">
      <router-link class="btn" to="./projects">GO BACK</router-link>
      <h2>Jobtrek Suivis</h2>
    </div>
    <p>The main objective of JobtrekSuivis is to allow companies and trainers to track and evaluate the skills of
      apprentices throughout their apprenticeship program. The application provides an efficient way to collect, store,
      and analyze data on the skills acquired by apprentices, facilitating the tracking of their progress and evaluation
      of their performance.</p>
    <p class="txt">Here's the site mockup, including the MCD database.</p>
    <img src="../../assets/jobtreksuivis_maquette.png" alt="screen jobtreksuivis">
    <p class="txt">My database diagram.</p>
    <img src="../../assets/jobtreksuivis_database.png" alt="screen jobtreksuivis database">
    <p class="txt">This is the user page. If you are logged in as a trainer, you can manage all your users.</p>
    <img src="../../assets/jobtreksuivis_user.png" alt="screen jobtreksuivis">
    <p class="txt">On this page, we create a user. We add all the necessary information. It's almost the same for the
      edit page.</p>
    <img src="../../assets/jobtreksuivis_create.png" alt="screen jobtreksuivis">
    <p class="txt">This is the page for creating a new profession with all the skills, etc. There's also a drak
      mode.</p>
    <img src="../../assets/jobtreksuivis_darkmode_job.png" alt="screen jobtreksuivis">

    <h3>Tools</h3>
    <div class="tools">
      <h6>C#</h6>
      <h6>ReactJS</h6>
      <h6>.Net Core</h6>
      <h6>postgreSQL</h6>
      <h6>MaterialUI</h6>
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