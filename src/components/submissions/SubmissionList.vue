<template>
  <div>
    <h2 class="mb-3">3D Queue</h2>
    <DataTable
      responsive-layout="scroll"
      :value="subs"
      v-if="getQueue.length > 0"
    >
      <Column
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
        :sortable="true"
      ></Column>
    </DataTable>
    <div v-else>
      <p>non ci sono submissions, sii il primo a farne una!</p>
      <router-link to="/Submission">Clicca qui</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: null,
      subs: null,
    };
  },

  beforeUpdate() {
    this.subs = this.getQueue;
  },

  created() {
    this.loadQueue();
    this.columns = [
      { field: "username", header: "Username" },
      { field: "fileName", header: "File" },
      { field: "filamentColor", header: "Filament" },
      { field: "timestamp", header: "Timestamp" },
    ];
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
