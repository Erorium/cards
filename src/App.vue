<template>
  <div>
    <MainHeader class="pb-10 pt-3" v-if="showHeader" :class="{ 'nav-bar': isNavRoute }" />
    <router-view></router-view>
    <MainFooter v-if="showFooter" />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import router from "./router";
export default {
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      showHeader: false,
      showFooter: false,
    };
  },
  created() {
    // Имитируем задержку загрузки компонентов
    setTimeout(() => {
      this.showHeader = true;
      this.showFooter = true;
    }, 150); // Задержка в 1 секунду (можете настроить значение по своему усмотрению)
  },
  computed: {
    isNavRoute() {
      const currentRoute = this.$route.path;
      return currentRoute === "/"; 
    },
  },
};
</script>
<style>
.nav-bar {
  background-color: #9dc3fe !important;
}
</style>
