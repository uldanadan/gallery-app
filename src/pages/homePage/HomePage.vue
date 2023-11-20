<script setup>
import Banner from "./components/Banner.vue";
import Gallery from "./components/Gallery.vue";
import {onMounted, ref} from "vue";
import {loadImagesByQuery, loadRandomImages} from "../../api/images";
import Loader from "../../components/Loader.vue";
import Empty from "../../components/Empty.vue";

const images = ref([]);
const loading = ref(false);

const loadImages = async (query = '') => {
  loading.value = true;
  images.value = [];
  let response;
  if (query) {
    response = loadImagesByQuery(query);
  } else {
    response = loadRandomImages();
  }
  await response.then(res => images.value = res)
      .finally(() => loading.value = false);
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted( () => loadImages());
</script>

<template>
  <Banner @onSearch="loadImages($event)" />
  <Loader v-if="loading" />
  <template v-else>
    <Empty v-if="!images?.length" />
    <Gallery v-else :images="images" />
  </template>

  <div class="toTop" v-if="images?.length">
    <button @click="scrollToTop"><img src="../../assets/img/button_top.svg"></button>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  text-align: center;
  margin-top: 80px;
  font-size: 20px;
}

.toTop {
  margin: 80px auto 71px;
  display: flex;
  justify-content: flex-end;
  max-width: 1697px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
}

@media screen and (max-width: 480px) {
  .toTop {
    display: none;
  }
}
</style>
