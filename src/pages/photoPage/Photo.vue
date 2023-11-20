<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {loadImage} from "../../api/images";
import UserActions from "./components/UserActions.vue";

const image = ref(null);

const route = useRoute();
const id = route.params['id'];

onMounted(() => {
  loadImage(id)
  .then(res => image.value = res);
});
</script>

<template>
  <div v-if="image" v-bind:style="{ 'background-image': 'url(' + image.urls.regular + ')' }" class="photo">
    <div class="container photo__container">
      <div class="photo__user">
        <div class="photo__user-info">
          <img :src="image.user.profile_image.medium" alt="User Avatar" />
          <div>
            <h3 class="photo__user-name">{{ image.user.name }}</h3>
            <p class="photo__user-username">@{{ image.user.username }}</p>
          </div>
        </div>
        <UserActions :image="image" />
      </div>
      <div class="photo__maximize">
        <img :src="image.urls.regular" :alt="image.alt_description" class="photo-img"/>
        <div class="photo__maximize-icon">
          <img src="../../assets/img/maximize.svg" alt="Maximize Icon" />
        </div>
      </div>
    </div>
    <div class="photo__blur"></div>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  position: relative;
  height: 774px;
  z-index: 1;

  &__back {
    position: absolute;
    width: 100%;
    height: 774px;
    border-radius: 0;
    object-fit: cover;
  }

  .photo__container {
    padding-top: 46px;
    text-align: center;
  }

  &-img {
    width: 100%;
    max-height: 744px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.50);
  }

  &__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;

    &-info {
      display: flex;
      color:  #F2F2F2;
      text-align: left;

      img {
        width: 55px;
        height: 55px;
        border-radius: 8px;
        border: 1px solid #FFF;
        margin-right: 10px;
      }
    }

    &-name {
      font-size: 30px;
    }

    &-username {
      font-size: 18px;
    }
  }
  &__maximize {
    position: relative;

    &-icon {
      position: absolute;
      bottom: 33px;
      right: 40px;
      cursor: pointer;
    }
  }
  &__blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(4px);
    z-index: -1;
  }
}

@media screen and (max-width: 480px) {
  .photo {
    background: none !important;

    &-img {
      max-height: 227px;
    }

    &__user {
      &-info {
        color: #000;
        align-items: center;
      }

      &-name {
        font-size: 18px;
      }

      &-username {
        font-size: 14px;
      }
    }
    &__maximize {
      &-icon {
        bottom: 8px;
        right: 9px;
        cursor: pointer;

        & img {
          width: 24px;
          height: 24px;
        }
      }
    }
    &__blur {
      background: none;
    }
  }
}
</style>
