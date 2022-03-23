<template>
  <div>
    <h2 class="mb-3">3D Queue</h2>
    <table class="table table-hover" id="formtable" v-if="getQueue">
      <thead class="table-primary">
        <tr>
          <th scope="col">Username</th>
          <th scope="col">File</th>
          <th scope="col">Filamento</th>
          <th scope="col">timestamp</th>
        </tr>
      </thead>
      <tbody>
        <submission-item
          v-for="submission in getQueue"
          :key="submission.id"
          :username="submission.username"
          :fileName="submission.fileName"
          :filament="submission.filamentColor"
          :timestamp="submission.timestamp"
        ></submission-item>
      </tbody>
    </table>
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
table {
  border-radius: 6px;
}
</style>
