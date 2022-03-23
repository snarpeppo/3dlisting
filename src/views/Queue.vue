<template>
  <div class="3dQueueForm">
    <base-big-card>
      <submission-list> </submission-list>
    </base-big-card>
  </div>
</template>

<script>
import SubmissionList from "../components/submissions/SubmissionList.vue";
export default {
  components: {
    SubmissionList,
  },
};
</script>
<style scoped>
.rounded {
  border-radius: 25px;
}
</style>
