<template>
  <div>
    <footer class="text-center text-lg-start bg-white text-muted">
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4"
      ></section>
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-4 col-xl-4 col-lg-4">
              <h6 class="text-uppercase fw-bold">
                <img src="../assets/img/logo_cards_full2 1.png" height="50" />
              </h6>
              <p class="footer_descr mt-6">
                Удобства и функциональность <br />
                в одной карте для всех <br />
                пользователей
              </p>
              <div
                class="align-center justify-center justify-content-center justify-content-sm-center justify-sm-center pt-3 social_links"
              >
                <a href=""
                  ><img
                    class="img-fluid mx-1"
                    src="../assets/img/icons/facebook.png"
                    alt=""
                /></a>
                <a href=""
                  ><img
                    class="img-fluid mx-3"
                    src="../assets/img/icons/insta.png"
                    alt=""
                /></a>
                <a href=""
                  ><img
                    class="img-fluid mx-2"
                    src="../assets/img/icons/basil_youtube-outline.png"
                    alt=""
                /></a>
              </div>
            </div>
            <div class="col-md-4 col-xl-3 col-lg-4 mt-8">
              <h6 class="footer_text fw-bold mb-4 pb-2">Будем на связи</h6>
              <p>
                <a href="mailto:support.edus.kz" class="text-reset"
                  ><img
                    src="../assets/img/icons/mail.png"
                    class="pe-6 py-2"
                    alt=""
                  />
                  support.edus.kz</a
                >
              </p>
              <p>
                <a href="tel:+77070304050" class="text-reset"
                  ><img
                    src="../assets/img/icons/ph_phone.png"
                    class="pe-6 py-2"
                    alt=""
                  />+7 707 030 4050</a
                >
              </p>
              <p>
                <a class="text-reset"
                  ><img
                    src="../assets/img/icons/clock.png"
                    class="pe-6 py-2"
                    alt=""
                  />
                  09:00 - 18:00</a
                >
              </p>
            </div>
            <div class="col-md-4 col-xl-4 col-lg-4 mt-8">
              <h6 class="fw-bold mb-4 footer_text pb-2">Быстрые ссылки</h6>
              <p>
                <router-link to="/" class="text-reset py-2" @click="scrollToTop"
                  >Главная</router-link
                >
              </p>
              <p>
                <a href="#!" class="text-reset py-2 ">Возможности</a>
              </p>
              <p>
                <a href="#!" class="text-reset py-2 ">Часто задаваемые вопросы</a>
              </p>
              <p>
                <a href="#!" class="text-reset py-2 ">Как получить карту</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
