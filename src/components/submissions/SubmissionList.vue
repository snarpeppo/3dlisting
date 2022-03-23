<template>
  <div>
    <ul v-if="getQueue">
      <submission-item
        v-for="submission in getQueue"
        :key="submission.id"
        :username="submission.username"
        :fileName="submission.fileName"
        :filament="submission.filament"
        :timestamp="submission.timestamp"
      ></submission-item>
    </ul>
    <div v-else>
      <p>non ci sono submissions, sii il primo a farne una!</p>
      <router-link to="/Submission">Clicca qui</router-link>
    </div>
  </div>
</template>

<script>
import SubmissionItem from "../../components/submissions/SubmissionItem.vue";
export default {
  components: {
    SubmissionItem,
  },

  created() {
    this.loadQueue();
  },
  computed: {
    getQueue() {
      return this.$store.getters["submissions/getQueue"];
    },
  },
  methods: {
    async loadQueue() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("submissions/loadQueue");
      } catch (error) {
        this.error = error.messge || "something went wrong";
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>