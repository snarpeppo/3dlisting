<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
  box-shadow: 3px 3px rgba(0, 0, 0, 0.26), -0.5em 0 0.4em rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-height: 40rem;
  max-width: 40rem;
}
</style>
