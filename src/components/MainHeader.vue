<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container d-flex">
        <router-link to="/">
          <a class="navbar-brand" href="#">
            <img src="../assets/img/logo_cards_full2 1.png" class="img-fluid" />
          </a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav text-center text-sm-center">
            <li class="nav-item mx-lg-4 mx-md-0">
              <a class="nav-link" aria-current="page" href="#">Главная</a>
            </li>
            <li class="nav-item mx-lg-4 mx-md-0">
              <a class="nav-link" href="#">Возможности</a>
            </li>
            <li class="nav-item mx-lg-4 mx-md-0">
              <a class="nav-link" href="#">Как получить карту</a>
            </li>
            <li class="nav-item mx-lg-4 mx-md-0">
              <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item mx-lg-4 mx-md-0">
              <a class="nav-link" href="#">Контакты</a>
            </li>
            <li class="nav-item ms-lg-6 py-1">
              <button
                class="btn order_button align-center px-9 py-2"
              >
                Войти
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-link {
  font-family: "SF Pro Display";
  font-style: normal;
  font-size: 20px !important;
  font-weight: 400;
  color: #0e0e52 !important;
}
.nav-link:hover,
.nav-link:focus {
  color: #0e0e52;
}
.nav_button {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  border-radius: 20px !important;
  background-color: #2176ff !important;
  color: white !important;
}
</style>
