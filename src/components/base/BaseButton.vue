<template>
  <button v-if="!link" class="btn btn-primary">
    <slot></slot>
  </button>
  <router-link v-else :to="to" class="btn btn-secondary">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

