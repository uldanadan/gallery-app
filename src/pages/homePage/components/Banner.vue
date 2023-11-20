<script setup>
import { ref } from 'vue';

const emit = defineEmits(['onSearch']);

const searchTerm = ref('');

</script>

<template>
  <div class="banner">
    <div class="container banner__container">
      <div class="banner__search">
        <input v-model="searchTerm" type="text" placeholder="Поиск">
        <button @click="emit('onSearch', searchTerm.trim())" class="banner__search-btn"></button>
      </div>
    </div>
    <div class="banner__blur"></div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  background: url("../../../assets/img/background.jpg") no-repeat center;
  background-size: cover;
  width: 100%;
  z-index: 1;
  border-bottom: 16px solid #c4c4c4;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__search {
    position: relative;
    padding: 90px 0;

    input {
      background-color: #FFFFFF;
      border: none;
      color: #000000;
      font-size: 24px;
      width: 866px;
      padding: 25px 40px;

      &::placeholder {
        color: #000000;
      }
    }
    &-btn {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translate(-50%, -50%);
      border: none;
      background: none;
      cursor: pointer;

      &::before {
        content: url('../../../assets/img/srch-black.svg');
      }
    }
  }

  &__blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    z-index: -1;
  }
}
@media screen and (max-width: 480px) {
  .banner {
    border-bottom: none;

    &__search {
      input {
        width: 295px;
        padding: 20px 25px;
      }
    }
  }
}
</style>
