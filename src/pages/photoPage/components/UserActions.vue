<script setup>
import {ref} from "vue";
import {dislikeImage, likeImage, downloadImage} from "../../../api/images";

const {image} = defineProps(['image']);
const isLiked = ref(image.liked_by_user);

const toggleLike = async () => {
  const response = isLiked.value ? dislikeImage(image.id) : likeImage(image.id)
  await response.then(() => isLiked.value = !isLiked.value);
}

const download = async () => {
  await downloadImage(image.id).then(res => window.open(res.url, '_blank'));
}
</script>

<template>
  <div class="user-btn">
    <button @click="toggleLike" class="user-btn-like" :class="{ 'is-liked': isLiked }">
      <img v-if="!isLiked" src="../../../assets/img/fav-black.svg" alt="Like" />
      <img v-else src="../../../assets/img/fac-yellow.svg" alt="Is Liked" />
    </button>
    <button @click="download" class="user-btn-dwnld">Download</button>
  </div>
</template>

<style lang="scss" scoped>
.user-btn {
  display: flex;
  align-items: center;

  button {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    border-radius: 8px;
  }

  &-like {
    border: 0;
    background-color: #FFFFFF;
    padding: 13px;
  }

  &-dwnld {
    border: 1px solid #FFF200;
    background: #FFF200;
    padding: 12px 23px;
    font-size: 20px;
    margin-left: 20px;
    display: flex;
    align-items: center;

    &::before {
      content: url('../../../assets/img/download.svg');
      margin-right: 16px;
    }
  }
}

@media screen and (max-width: 480px) {
  .user-btn {

    &-dwnld {
      font-size: 0;
      padding: 13px;

      &::before {
        margin: 0;
      }
    }
  }
}
</style>
