<template>
  <div class="form_main">
    <v-container>
      <div class="animate__animated animate__fadeIn" v-if="step == 1">
        <p class="text-center main_text pt-16">
          Закажите карту прямо сейчас и получите <br />
          доступ к удивительным возможностям!
        </p>

        <v-row justify="center">
          <v-col lg="4" md="5" sm="6" cols="9">
            <v-alert
              v-if="this.formData.formStatus == true"
              type="error"
              class="my-5 animate__animated animate__fadeIn"
              dismissible
            >
              Пожалуйста, проверьте введенные данные.
            </v-alert>
            <v-form ref="form" @submit.prevent="submitForm()">
              <v-text-field
                class="mb-1"
                label="ИИН"
                v-model="formData.iin"
                :rules="formData.IINrules"
                mask="###########"
                @input="handleIinInput"
              ></v-text-field>
              <v-text-field
                class="mb-1"
                label="ФИО"
                v-model="formData.fullName"
                :rules="formData.FIOrules"
              ></v-text-field>
              <v-text-field
                class="mb-1"
                label="Номер телефона или почта"
                v-model="formData.email"
                :rules="formData.EmailRules"
              ></v-text-field>
              <v-btn
                type="submit"
                class="accordion-button rounded-3 mt-3"
                rounded="10"
                style="color: white"
                color="#2176FF"
              >
                Получить код
              </v-btn>
            </v-form>
            <v-row class="pt-5">
              <v-col><v-divider></v-divider></v-col>
              <v-col class="text-center or_word" lg="2" color="#546A7B"
                >ИЛИ</v-col
              >
              <v-col><v-divider></v-divider></v-col>
            </v-row>
            <p class="text-caption-descr text-center pt-5">Войти через</p>
            <v-row justify="center" class="justify-center pt-3">
              <v-col
                lg="4"
                md="4"
                cols="12"
                class="text-center img-thumbnail rounded-3"
              >
                <div class="d-flex mr-5 align-center justify-center px-4">
                  <img
                    src="../assets/img/LogoEdus.png"
                    class="img-fluid w-100"
                    alt="Логотип"
                  />
                  <p
                    class="Edus_subtitle_login m-0 ml-2 pt-2"
                    style="font-size: 15x !important"
                  >
                    Zerek
                  </p>
                </div>
              </v-col>
              <v-col
                lg="4"
                md="4"
                cols="12"
                class="text-center img-thumbnail rounded-3"
              >
                <div class="d-flex align-center justify-center px-4">
                  <img
                    src="../assets/img/LogoEdus.png"
                    class="img-fluid w-100"
                    alt="Логотип"
                  />
                  <p
                    class="Edus_subtitle_login m-0 ml-2 pt-2"
                    style="font-size: 15x"
                  >
                    Mektep
                  </p>
                </div>
              </v-col>
              <v-col
                lg="4"
                md="4"
                cols="12"
                class="text-center img-thumbnail rounded-3"
              >
                <div class="d-flex align-center justify-center px-4">
                  <img
                    src="../assets/img/LogoEdus.png"
                    class="img-fluid w-100"
                    alt="Логотип"
                  />
                  <p
                    class="Edus_subtitle_login m-0 ml-2 pt-2"
                    style="font-size: 15x"
                  >
                    College
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="animate__animated animate__fadeIn" v-if="step == 2">
        <p class="text-center main_text pt-16">
          Мы прислали вам код на почту или номер телефон
        </p>
        <p class="text-center main_text text-h6">Напишите код подтверждение</p>
        <v-row justify="center">
          <v-form @submit.prevent="codeDigitsSubmit()">
            <div class="d-flex">
              <v-text-field
                v-for="(digit, index) in codeDigits"
                :key="index"
                v-model="codeDigits[index]"
                maxlength="1"
                placeholder="*"
                class="code-input-field mr-lg-6 mr-md-6 mt-10"
                @input="automateInput(index)"
                inputmode="numeric"
                ref="textFields"
                @keypress="validateDigitInput($event)"
              ></v-text-field>
            </div>
            <v-btn
              type="submit"
              class="px-16 ms-lg-9 ms-md-9 rounded-3 mt-8 text-center"
              rounded="10"
              style="color: white"
              color="#2176FF"
              :disabled="!allDigitsEntered"
              >Подтвердить</v-btn
            >
          </v-form>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      codeDigits: ["", "", "", ""],
      formData: {
        iin: "",
        fullName: "",
        email: "",
        // Валидация строк
        IINrules: [
          (value) => !!value || "Это поле обязательно для заполнения",
          (value) =>
            (value && value.length === 12) ||
            "ИИН должен содержать 12 символов",
        ],
        FIOrules: [
          (value) => value.length > 0 || "Это поле обязательно для заполнения",
          (value) =>
            /^[a-zA-Zа-яА-Я\s]+$/.test(value) ||
            "Поле должно содержать только буквы",
        ],
        EmailRules: [
          (value) => !!value || "Это поле обязательно для заполнения",
          (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
            "Введите корректный email",
        ],
        smsRules: [
          (value) => value.length > 0 || "",
          (value) => /^\d$/.test(value) || "Можно вводить только цифры",
        ],
        formStatus: false,
      },
    };
  },
  watch: {
    codeDigits: {
      deep: true,
      handler(newDigits) {
        if (newDigits.every((digit) => digit !== "")) {
          this.codeDigitsSubmit();
        }
      },
    },
  },
  computed: {
    allDigitsEntered() {
      return this.codeDigits.every((digit) => digit !== "");
    },
  },
  methods: {
    validateDigitInput(event) {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);

      if (!/^\d+$/.test(keyValue)) {
        event.preventDefault();
      }
    },
    handleIinInput(event) {
      const inputValue = event.target.value;
      const digitsOnly = inputValue.replace(/\D/g, "");
      this.formData.iin = digitsOnly;
    },
    automateInput(index) {
      const nextIndex = index + 1;
      if (nextIndex < this.codeDigits.length) {
        this.$refs.textFields[nextIndex].focus();
      }
    },
    // Первая форма
    submitForm() {
      this.$refs.form.validate().then((result) => {
        if (result.valid) {
          // Форма прошла валидацию
          this.formData.formStatus = false;
          let formObject = {
            iin: this.formData.iin,
            fullname: this.formData.fullName,
            email: this.formData.email,
          };
          console.log(formObject);
          this.step++;
        } else {
          // Другие действия при невалидной форме
          this.formData.formStatus = true;
        }
      });
    },
    // Вторая форма
    codeDigitsSubmit() {
      const code = parseInt(this.codeDigits.join(""), 10);
      console.log(code);
    },
  },
};
</script>
<style>
.code-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
}

.code-input-block {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.code-input-field {
  width: 60px;
  height: 60px;
}
.Edus_subtitle_login {
  color: #000;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
}
.v-field__outline {
  display: none;
}
.v-field__input {
  border-radius: 10px !important;
}
.v-text-field input:focus,
.v-text-field input:active {
  border: 1px solid #2176ff !important;
}
.v-field--active,
.v-field__input {
  border-radius: 10px !important ;
}
.v-field__field {
  background-color: white !important;
  border: 1px solid #aaa !important;
  border-radius: 10px !important;
}
.v-input__details {
  display: flex;
}
.or_word {
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: #546a7b;
}
.form_main {
  min-height: 800px;
}
.main_text {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 32.73px;
  color: #1e1e1e;
}
</style>
1
