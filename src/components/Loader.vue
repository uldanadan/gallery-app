<script setup></script>

<template>
  <div class="loader">
    <img src="../assets/img/loader.svg" />
  </div>
</template>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  margin-top: 99px;
  animation:spin 4s linear infinite;
}

@keyframes spin {
  100% {
    transform:rotate(360deg);
  }
}
</style>
