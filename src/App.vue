<script>
import HeaderBar from "@/components/HeaderBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterBar
  }
}

/* = Apparition du up button
----------------------------------------------- */
let iScrollPos = 0;
$(window).scroll(function () {
  let iCurScrollPos = $(this).scrollTop();
  if (iCurScrollPos > iScrollPos) {
    $('#up-button').removeClass('show');
  } else {
    $('#up-button').addClass('show');
  }
  iScrollPos = iCurScrollPos;
});

/* = Smooth scroll
----------------------------------------------- */
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

</script>

<template>
  <div>
    <HeaderBar/>
    <div class="container">
      <router-view></router-view>
      <a href="#content" id="up-button">Retour en haut</a>
    </div>
    <FooterBar/>
  </div>
</template>

<style scoped>
#up-button {
  display: none;
  /* éléments de style, vous pouvez mettre ce que vous voulez, ils ne sont là que pour l'exemple */
  position: fixed;
  bottom: 50px;
  left: 50px;
}

#up-button.show {
  display: block;
}
</style>
