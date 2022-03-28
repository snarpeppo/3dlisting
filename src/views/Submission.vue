<template>
  <div class="3dQueueForm">
    <base-big-card>
      <ThreeDListingForm @save-data="saveData"> </ThreeDListingForm>
    </base-big-card>
  </div>
</template>

<script>
import ThreeDListingForm from "../components/ThreeDListingForm.vue";
export default {
  components: {
    ThreeDListingForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch("submissions/createSub", data);
      this.$router.replace("/queue");
    },
  },
};
</script>
<style>
</style>