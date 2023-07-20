<script>
export default {
  name: 'HeaderBar',
  mounted() {
    let menu = document.querySelector('#menu-icon')
    let navbar = document.querySelector('.navbar')

    menu.onclick = () => {
      menu.classList.toggle('bx-x')
      navbar.classList.toggle('open')
    }

    window.onscroll = () => {
      menu.classList.remove('bx-x')
      navbar.classList.remove('open')
    }
  }
}
</script>

<template>
  <header>
    <router-link to="/" class="logo">
      <h2>NICOLAS LOISON</h2>
    </router-link>

    <ul class="navbar">
      <li>
        <router-link to="/" class="active">Home</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
    </ul>

    <div class="header-icons">
      <div class="bx bx-menu" id="menu-icon"><img src="../assets/menu-icon.svg" alt="icon menu burger"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-color);
  box-shadow: 0 0.4rem 30rem rgba(0, 0, 0, 0.1);
  padding: 20px 14%;
  transition: all ease 0.52s;
}

.logo h2 {
  margin-right: -30rem;
  color: var(--text-color);
  font-size: 1.25rem;
}

.navbar {
  display: flex;
}

.navbar a {
  position: relative;
  margin: 0px 15px;
  padding: 5px 5px;
  font-size: var(--h2-font);
  font-weight: 500;
  color: var(--text-color);
  transition: all ease 0.5s;
}

.navbar a::after {
  position: absolute;
  content: "";
  height: 3px;
  bottom: 0px;
  width: 0%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  background: var(--primary-color);
  transition: all ease 0.5s;
}

.navbar a:hover::after {
  width: 40%;
}

.navbar a:hover {
  color: var(--primary-color);
}

.navbar a.active {
  color: var(--primary-color);
}

.navbar a.active::after {
  width: 40%;
}

.header-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-icons i {
  vertical-align: middle;
  font-size: 1.5rem;
  color: var(--text-color);
  margin-left: 20px;
  transition: all ease .50s;
}

#menu-icon {
  color: var(--text-color);
  font-size: 30px;
  z-index: 10001;
  margin-left: 25px;
  cursor: pointer;
  display: none;
}

/* RESPONSIVE */

@media screen and (max-width: 1023px) {
  #menu-icon {
    display: block;
  }

  .navbar {
    position: absolute;
    top: -500px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    background-color: var(--bg-color);
    box-shadow: 0 4px 4px rgb(0 0 0 /10%);
    transition: all ease 0.5s;
  }

  .navbar a {
    display: block;
    font-size: 24px;
    font-weight: 600;
    margin: 5px 30px;
    padding: 10px 0;
  }

  .navbar a::after {
    display: none;
  }

  .navbar.open {
    top: 100%;
  }
}

</style>