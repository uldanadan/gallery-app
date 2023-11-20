<script setup>
import {loadLikedImages} from "../api/images";
import {onMounted, ref} from "vue";
import Loader from "../components/Loader.vue";
import Empty from "../components/Empty.vue";

const images = ref([]);
const loading = ref(false);

onMounted( async () => {
  loading.value = true;
  await loadLikedImages()
      .then(res => images.value = res)
      .finally(() => loading.value = false)
});

</script>

<template>
  <div class="favorites">
    <h2 class="favorites__title">Избранное</h2>
    <Loader v-if="loading" />
    <template v-else>
      <Empty v-if="!images?.length" />
      <div v-else class="container favorites__container">
        <img v-for="image in images" :src="image.urls.regular" :alt="image.alt_description" />
      </div>    </template>
  </div>
</template>

<style lang="scss" scoped>
  .favorites {
    text-align: center;
    border-top: 16px solid #c4c4c4;

    &__title {
      font-size: 72px;
      font-weight: 700;
      padding-block: 94px 101px;
    }

    &__container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      padding-bottom: 167px;

      & img {
        width: 100%;
        height: 440px;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .favorites {
      border-top: none;

      &__title {
        font-size: 36px;
        padding-block: 40px 56px;
      }

      &__container {
        grid-template-columns: 1fr;
        padding-bottom: 84px;

        & img {
          height: 312px;
        }
      }
    }
  }
</style>
