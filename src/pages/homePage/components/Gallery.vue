<script setup>
import { useRouter } from 'vue-router';

const { images } = defineProps(['images'])

const router = useRouter();

const openImageViewer = (image) => {
  router.push(`/photo/${image.id}`);
}
</script>

<template>
  <div class="container gallery__container">
    <img v-for="image in images" :key="image.id" :src="image.urls.regular" :alt="image.alt_description" @click="openImageViewer(image)" />
  </div>
</template>

<style lang="scss" scoped>
.gallery__container {
  padding-top: 114px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  & img {
    width: 100%;
    height: 440px;
    object-fit: cover;
    cursor: pointer;
  }
}
@media screen and (max-width: 480px) {
  .gallery__container {
    padding-top: 50px;
    padding-bottom: 50px;
    grid-template-columns: 1fr !important;

    & img {
      height: 312px !important;
    }
  }
}
</style>
