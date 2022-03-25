<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 8px;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
  box-shadow: 20px 8px 20px 0px rgb(0 0 0 / 26%),
    -0.5em 0 0.4em rgb(0 0 0 / 26%);
  padding: 1rem;
  margin: 2rem auto;
  max-height: 40rem;
  max-width: 80%;
}
</style>
