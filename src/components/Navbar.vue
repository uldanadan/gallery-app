<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showSearch = ref(false);
const showFavorites = ref(false);

onMounted(() => {
  watch(() => router.currentRoute.value, (to) => {

    if (to.path === '/'){
      showSearch.value = false;
      showFavorites.value = true;
    } else {
      showSearch.value = true;
      showFavorites.value = false;
    }
  });
});
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <img class="header__logo" src="../assets/img/logo.svg" />
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li v-if="showSearch" class="header__nav-item">
            <router-link to="/" class="header__nav-link">
              <img src="../assets/img/srch-white.svg" alt="Favorites Icon" class="header__nav-icon">
              Поиск
            </router-link>
          </li>
          <li class="header__nav-item">
            <router-link to="/favorites" class="header__nav-link">
              <img src="../assets/img/fav-white.svg" alt="Search Icon" class="header__nav-icon">
              Избранное
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #000000;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0 14px;
  }

  &__nav {
    &-list {
      display: flex;
      align-items: center;
    }

    &-item {
      list-style-type: none;
    }

    &-link {
      font-size: 18px;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      margin-left: 38px;
    }

    &-icon {
      margin-right: 14px;
    }
  }
}

@media screen and (max-width: 480px) {
  .header {
    &__logo {
      width: 84px;
      height: 33px;
    }
    &__nav {
      &-link {
        margin-left: 20px;
        font-size: 0;
      }
    }
  }
}
</style>
