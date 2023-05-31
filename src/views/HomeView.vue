<template>
  <div>
    <div class="main">
      <v-container class="pt-0">
        <v-row justify="center pt-5">
          <v-col
            xl="6"
            lg="8"
            md="8"
            sm="12"
            cols="12"
            class="mb-0 justify-sm-center text-xl-left text-lg-left text-md-center text-sm-center text-xs-center text-center"
          >
            <p class="main_description animate__animated lh-1  animate__fadeIn">
              Все в  <span class="odnobody">одной<img src="../assets/img/5.png" class="odno" alt=""></span> <br> карте
              <!-- <b
                class="px-lg-10 rotate_background rotate_text px-md-16 px-sm-15 d-md-inline-block py-md-2 d-sm-inline-block d-inline-block animate__animated animate__fadeIn"
              >
               
              </b> -->
             
            </p>
            <p
              class="main_description_1 pb-5 pt-8 mb-5 animate__animated animate__slideInDown"
            >
              Удобство и функциональность для всех пользователей
            </p>
            <v-row
              class="d-flex justify-lg-start justify-md-center justify-sm-center justify-center animate__animated animate__slideInDown"
            >
              <v-col
                class="text-md-center text-lg-start d-lg-table"
                lg="4"
                md="6"
                sm="6"
                cols="12"
              >
                <!-- <v-btn class="order_button align-center " @click="goToForm()" size="large">
                  <span class="pe-2 d-lg-table"
                    ><img src="../assets/img/cardOrder.png" alt=""
                  /></span>
                  Заказать карту
                </v-btn> -->

                <button
                  class="btn order_button align-center px-9 py-2"
                  @click="goToForm()"
                >
                  <span class="pe-3"
                    ><img src="../assets/img/cardOrder.png" alt="" /></span
                  >Заказать карту
                </button>
              </v-col>
              <v-col
                class="text-lg-start ps-lg-0 text-md-center d-flex align-center justify-center"
                lg="2"
                md="3"
                sm="3"
                cols="12"
              >
                <a href="">Подробнее →</a>
              </v-col>
            </v-row>
            <v-row>
              <img
                class="mt-10 mx-lg-0 mx-md-auto mx-sm-auto mx-auto img-fluid animate__animated animate__slideInDown"
                src="../assets/img/Active users.png"
              />
            </v-row>
          </v-col>
          <v-col
            xl="3"
            lg="4"
            md="4"
            sm="12"
            cols="12"
            class="text-sm-center text-center animate__animated animate__fadeIn d-lg-flex d-xl-flex align-md-center justify-md-center justify-sm-center d-sm-none d-lg-block d-md-block d-none"
          >
            <img src="../assets/img/3d_4_png 1.png" class="img-fluid" alt="" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="list pt-5">
      <v-container>
        <v-row justify="center" class="justify-center">
          <v-col lg="3" md="4" cols="12" class="">
            <div class="d-flex mr-5 align-center justify-center">
              <img
                src="../assets/img/LogoEdus.png"
                class="img-fluid"
                alt="Логотип"
              />
              <p class="Edus_subtitle m-0 ml-2 pt-2">Zerek</p>
            </div>
          </v-col>
          <v-col lg="3" md="4" cols="12" class="">
            <div class="d-flex align-center justify-center">
              <img
                src="../assets/img/LogoEdus.png"
                class="img-fluid"
                alt="Логотип"
              />
              <p class="Edus_subtitle m-0 ml-2 pt-2 fw-bold">Mektep</p>
            </div>
          </v-col>
          <v-col lg="3" md="4" cols="12" class="">
            <div class="d-flex align-center justify-center">
              <img
                src="../assets/img/LogoEdus.png"
                class="img-fluid"
                alt="Логотип"
              />
              <p class="Edus_subtitle m-0 ml-2 pt-2">College</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="integrcard py-5">
      <v-container>
        <v-row justify="center">
          <v-col xxl="6" xl="5" lg="5" sm="12" md="12" cols="12">
            <p class="integr_title">
              Интегрированные
              <b class="blue_text"> карты <br />безопасности для <br /></b>
              образовательных учреждений
            </p>
            <p class="intg_description">
              Наши интегрированные карты безопасности обеспечивают безопасность,
              контроль и удобство в образовательных учреждениях. Независимо от
              вашей роли - родителя, школьника, учителя или персонала - наши
              карты гарантируют максимальную защиту.
            </p>
            <a href="" color="#2176FF">Другие возможности →</a>
          </v-col>
          <v-col xxl="6" xl="5" lg="6" sm="12" md="12" cols="12">
            <v-row justify="center">
              <v-col lg="5" md="6" sm="6" cols="12">
                <v-card
                  :elevation="elevation[1]"
                  class="custom-elevation"
                  @mouseover="elevation[1] = 8"
                  @mouseleave="elevation[1] = 0"
                  style="border-radius: 10px"
                >
                  <v-card-item
                    class="text-lg-left text-md-left text-center justify-lg-start justify-md-start justify-sm-start justify-center"
                  >
                    <div class="text-h6 mb-1 d-flex">
                      <span class="me-3 align-center">
                        <img src="../assets/img/Card Logo/Group.png" alt=""
                      /></span>
                      <p class="mt-2">Безопасность</p>
                    </div>
                    <div class="text-caption-descr">
                      Надежная защита в <br />
                      учебных заведениях
                    </div>
                  </v-card-item>
                  <v-card-actions
                    class="d-flex justify-lg-start justify-md-start justify-sm-start justify-center"
                  >
                    <v-btn class="card_button">Подробнее →</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col lg="5" md="6" sm="6" cols="12">
                <v-card
                  :elevation="elevation[2]"
                  class="custom-elevation"
                  @mouseover="elevation[2] = 8"
                  @mouseleave="elevation[2] = 0"
                  style="border-radius: 10px"
                >
                  <v-card-item
                    class="text-lg-left text-md-left text-center justify-lg-start justify-md-start justify-sm-start justify-center"
                  >
                    <div class="text-h6 mb-1 d-flex">
                      <span class="me-3 align-center">
                        <img src="../assets/img/Card Logo/kitchen.png" alt=""
                      /></span>
                      <p class="mt-2">Питание</p>
                    </div>
                    <div class="text-caption-descr">
                      Получение бесплатное <br />
                      питание для школьников
                    </div>
                  </v-card-item>
                  <v-card-actions
                    class="d-flex justify-lg-start justify-md-start justify-sm-start justify-center"
                  >
                    <v-btn class="card_button">Подробнее →</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col lg="5" md="6" sm="6" cols="12">
                <v-card
                  :elevation="elevation[3]"
                  class="custom-elevation"
                  @mouseover="elevation[3] = 8"
                  @mouseleave="elevation[3] = 0"
                  style="border-radius: 10px"
                >
                  <v-card-item
                    class="text-lg-left text-md-left text-center justify-lg-start justify-md-start justify-sm-start justify-center"
                  >
                    <div class="text-h6 mb-1 d-flex">
                      <span class="me-3 align-center">
                        <img src="../assets/img/Card Logo/library.png" alt=""
                      /></span>
                      <p class="mt-2">Библиотека</p>
                    </div>
                    <div class="text-caption-descr">
                      Удобный доступ к <br />
                      образовательным <br />ресурсам
                    </div>
                  </v-card-item>
                  <v-card-actions
                    class="d-flex justify-lg-start justify-md-start justify-sm-start justify-center"
                  >
                    <v-btn class="card_button">Подробнее →</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col lg="5" md="6" sm="6" cols="12">
                <v-card
                  :elevation="elevation[4]"
                  class="custom-elevation"
                  @mouseover="elevation[4] = 8"
                  @mouseleave="elevation[4] = 0"
                  style="border-radius: 10px"
                >
                  <v-card-item
                    class="text-lg-left text-md-left text-center justify-lg-start justify-md-start justify-sm-start justify-center"
                  >
                    <div class="text-h6 mb-1 d-flex">
                      <span class="me-3 align-center">
                        <img
                          src="../assets/img/Card Logo/notification.png"
                          alt=""
                      /></span>
                      <p class="mt-2">Уведомление</p>
                    </div>
                    <div class="text-caption-descr">
                      Моментальная <br />информация о <br />перемещении детей
                    </div>
                  </v-card-item>
                  <v-card-actions
                    class="d-flex justify-lg-start justify-md-start justify-sm-start justify-center"
                  >
                    <v-btn class="card_button">Подробнее →</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="stastistics pt-5 mt-5">
      <v-container>
        <v-row>
          <v-col class="text-center">
            <p class="statistic_number d-inline-flex">
              <count-up :end-val="48" />
              K
              <span class="blue_plus">+</span>
            </p>
            <p class="statistic_description">пользователей - ученики</p>
          </v-col>
          <v-col class="text-center">
            <p class="statistic_number">
              <count-up :end-val="3508"></count-up>
            </p>
            <p class="statistic_description">пользователей - ученики</p>
          </v-col>
          <v-col class="text-center">
            <p class="statistic_number">
              <count-up :end-val="1046"></count-up>
            </p>
            <p class="statistic_description">пользователей - ученики</p>
          </v-col>
          <v-col class="text-center">
            <p class="statistic_number d-inline-flex">
              <count-up :end-val="51"></count-up>K<span class="blue_plus"
                >+</span
              >
            </p>
            <p class="statistic_description">пользователей - ученики</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="uniquecard d-flex align-center">
      <v-container>
        <v-row>
          <v-col xl="6" lg="6" md="12" sm="12" cols="12" class="text-center">
            <img src="../assets/img/cardUniqe.png" class="img-fluid" />
          </v-col>
          <v-col
            lg="6"
            xl="6"
            md="12"
            sm="12"
            cols="12"
            class="text-md-center text-lg-start text-center text-sm-center text-lg-left"
          >
            <p class="card_unig_title">
              Выберите свою собственную <br />
              уникальную карту
            </p>
            <br />
            <p class="card_unig_description">
              Мы предлагаем клиентам возможность выбрать <br />
              карту, которая отражает их индивидуальность <br />
              и соответствует их уникальным потребностям. Мы <br />
              признаем важность персонального подхода и <br />
              предлагаем широкий выбор карт с различными <br />
              дизайнами и функциями, чтобы каждый мог найти <br />
              именно то, что нужно именно ему.
            </p>
            <!-- <v-btn class="order_button mt-5 align-center">
              <span class="pe-2"
                ><img src="../assets/img/cardOrder.png" alt=""
              /></span>
              Заказать карту</v-btn
            > -->
            <button
              class="btn order_button align-center px-9 py-2 mt-5"
              @click="goToForm()"
            >
              <span class="pe-3"
                ><img src="../assets/img/cardOrder.png" alt="" /></span
              >Заказать карту
            </button>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="cardorder">
      <v-container>
        <!-- Title -->
        <v-row>
          <v-col class="take_Card_title text-center">Как получить карту</v-col>
        </v-row>
        <!-- Numerate -->
        <v-row
          class="Numerate d-lg-flex d-md-flex d-none d-sm-none justify-center"
        >
          <v-col
            lg="1"
            md="3"
            class="d-xl-flex justify-xl-center d-lg-block d-md-flex pe-xl-6 justify-end text-center pe-md-10"
          >
            <div class="numerate pt-3">1</div>
          </v-col>
          <v-col lg="3" class="d-flex align-center">
            <div class="dashed-divider"></div>
          </v-col>
          <v-col lg="1" md="3" class="text-center d-flex justify-center">
            <div class="numerate pt-3">2</div>
          </v-col>
          <v-col lg="3" class="d-flex align-center">
            <div class="dashed-divider"></div>
          </v-col>
          <v-col
            lg="1"
            md="3"
            class="text-center pe-lg-10 d-flex d-md-block justify-center ps-xl-10"
          >
            <div class="numerate pt-3">3</div>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center mt-5 pt-5">
          <v-col
            class="text-center form-elevation"
            lg="4"
            md="4"
            sm="12"
            cols="12"
          >
            <v-card
              :elevation="elevation[4]"
              @mouseover="elevation[5] = 12"
              @mouseleave="elevation[5] = 0"
              style="position: relative"
            >
              <span
                ><img src="../assets/img/clarity_form-line.png" alt=""
              /></span>
              <p class="title_get_Card pb-3">Заполнение формы</p>
              <p>
                Первым шагом в процессе выпуска карты <br />является заполнение
                простой и удобной <br />
                онлайн-формы. Вам потребуется<br />
                предоставить некоторую информацию, <br />
                необходимую для обработки вашего <br />
                запроса.
              </p>
            </v-card>
          </v-col>
          <v-col
            class="text-center form-elevation"
            lg="4"
            md="4"
            sm="12"
            cols="12"
          >
            <v-card
              :elevation="elevation[4]"
              @mouseover="elevation[5] = 12"
              @mouseleave="elevation[5] = 0"
              style="position: relative"
            >
              <span><img src="../assets/img/Card Logo/QR.png" alt="" /></span>
              <p class="title_get_Card pb-3">Оплата с картой или QR</p>
              <p>
                После заполнения формы вы будете <br />перенаправлены на
                страницу оплаты. Вы <br />
                можете выбрать удобный способ оплаты, <br />включая оплату с
                помощью вашей <br />
                существующей карты или с помощью QR- <br />кода.
              </p>
            </v-card>
          </v-col>
          <v-col
            class="text-center form-elevation"
            lg="4"
            md="4"
            sm="12"
            cols="12"
          >
            <v-card
              :elevation="elevation[4]"
              @mouseover="elevation[5] = 12"
              @mouseleave="elevation[5] = 0"
              style="position: relative"
            >
              <span><img src="../assets/img/Card Logo/card.png" alt="" /></span>
              <p class="title_get_Card pb-3">Ждите карту</p>
              <p>
                После успешной оплаты и обработки <br />заказа, вам останется
                только дождаться <br />
                доставки карты в вашу организацию. <br />
                Обеспечим быструю и надежную доставку <br />
                вашей карты, чтобы вы могли начать <br />использовать ее в
                кратчайшие сроки.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="FAQ">
      <v-container>
        <v-row>
          <v-col>
            <p class="card_unig_title text-center">Часто задаваемые вопросы</p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col lg="6">
            <v-expansion-panels class="accordion mb-5">
              <v-expansion-panel
                v-for="faqtitle in faqtitles"
                :key="faqtitle"
                elevation="0"
                class="my-2"
                style="
                  border-radius: 10px !important;
                  border: 0.1px solid #aaaa !important;
                "
              >
                <v-expansion-panel-title>
                  <span
                    ><img src="../assets/img/pencil.png" class="pe-5" alt=""
                  /></span>
                  <div class="accordion_title">
                    {{ faqtitle }}
                  </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text class="accordion_descr">
                  <v-divider class="h1"></v-divider>
                  Мы предлагаем несколько удобных способов оплаты, включая
                  оплату с помощью существующей кредитной карты или
                  использование QR-кода для оплаты через мобильное приложение
                  или платежную систему.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="phoneBlock my-16 py-16">
      <v-container>
        <v-row justify="center">
          <v-col
            xl="9"
            class="phoneInHand custom-elevation-variable"
            :elevation="elevation[4]"
            @mouseover="elevation[5] = 12"
            @mouseleave="elevation[5] = 0"
            style="position: relative"
          >
            <v-row>
              <v-col
                xl="6"
                lg="6"
                cols="12"
                class="d-lg-block d-md-none d-sm-none d-none"
              >
                <img
                  style="
                    position: absolute;
                    border-radius: 10px;
                    bottom: 0;
                    left: 0;
                  "
                  src="/src/assets/img/phoneinHand.png"
                  class="img-fluid"
                  alt=""
                />
              </v-col>
              <v-col xl="6" lg="6" md="12" sm="12" cols="12">
                <div>
                  <p class="lighttext">Получите уведомление</p>
                  <p class="lighttext_subtitle">
                    Наша система обеспечивает быстрое и надежное получение
                    уведомлений, чтобы вы всегда оставались в курсе событий.
                  </p>
                  <v-row class="my-5">
                    <v-col xl="4" lg="4" md="3" sm="3" cols="12">
                      <a href=""
                        ><img src="../assets/img/appstore.png" alt=""
                      /></a>
                    </v-col>
                    <v-col xl="3" lg="3" md="3" sm="3" cols="12">
                      <a href="">
                        <img src="../assets/img/googleplay.png" alt=""
                      /></a>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import router from "../router";
import CountUp from "vue-countup-v3";
export default {
  name: "App",
  components: {
    CountUp,
  },
  data: () => ({
    openTab: null,
    elevation: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
    faqtitles: {
      1: "Какую информацию мне нужно предоставить при заполнении формы?",
      2: "Какие способы оплаты доступны?",
      3: "Могу ли я заказать карту для кого-то другого, например, для ребенка или супруга?",
      4: "Как долго займет получение карты?",
    },
  }),
  methods: {
    goToForm() {
      router.push("cardorder");
    },
  },
};
</script>
