<template>
  <div>
    <table class="table table-hover" id="formtable" v-if="getFilaments">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th>Produttore</th>
          <th>Colore</th>
          <th>Materiale</th>
        </tr>
      </thead>
      <tbody>
        <filament-item
          name="fk_filament"
          @click="selectedFilament($event)"
          v-for="cable in getFilaments"
          :key="cable.id"
          :filament_id="cable.filament_id"
          :filamentProducer="cable.filamentProducer"
          :filamentColor="cable.filamentColor"
          :filamentMaterial="cable.filamentMaterial"
          :class="{ highlight: cable.filament_id == filamentSelezionato }"
        ></filament-item>
      </tbody>
    </table>
    <div v-else>
      <p>Non ci sono filamenti disponibili</p>
    </div>
  </div>
</template>

<script>
import filamentItem from "../../components/filaments/FilamentItem.vue";
export default {
  data() {
    return {
      filamentSelezionato: null,
    };
  },
  components: {
    filamentItem,
  },

  created() {
    this.loadFilaments();
  },
  computed: {
    getFilaments() {
      return this.$store.getters["filaments/getFilaments"];
    },
  },
  methods: {
    async loadFilaments() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("filaments/loadFilaments");
      } catch (error) {
        this.error = error.messge || "something went wrong";
      }
      this.isLoading = false;
    },

    selectedFilament(e) {
      let td = e.currentTarget.id;
      this.filamentSelezionato = td;
      // console.log(this.filamentSelezionato);
    },
  },
};
</script>

<style>
.table-div {
  margin-bottom: 2.5rem;
}

.highlight {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: #fff !important;
}

tr:hover {
  cursor: pointer;
}
</style>