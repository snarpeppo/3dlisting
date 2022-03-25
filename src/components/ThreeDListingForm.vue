<template>
  <div>
    <h1>Create your subscription!</h1>
    <form @submit.prevent="submitForm">
      <!-- USERNAME -->
      <div class="mb-5" :class="{ invalid: !username.isValid }">
        <label for="username" class="form-label text-start">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          class="form-control"
          v-model.trim="username.val"
          @blur="clearValidate('username')"
        />
        <p v-if="!username.isValid" class="p-error">
          the username in incorrect
        </p>
      </div>
      <!-- FILE  -->
      <div class="mb-5" id="fileLink" :class="{ 'p-invalid': !file.isValid }">
        <label for="Url" class="form-label text-start">Model Url:</label>
        <!-- 
        <input
          type="file"
          id="formFile"
          class="form-control"
          name="fileName"
          @change="filetest"
          @click="clearValidate('file')"
        /> -->

        <InputText
          type="text"
          id="Url"
          v-model="this.file.url"
          v-tooltip.top.focus="
            'inserisci il tuo link al modello, per esempio:\n\n https://www.thingiverse.com/thing:2239296 '
          "
        />
        <p v-if="!file.isValid" class="p-error">file not uploaded</p>
      </div>

      <div :class="{ invalid: !filament.isValid }">
        <label for="filaments" class="form-label text-start"
          ><h2>Filaments availables:</h2></label
        >
        <!-- DA RIVEDERE IL CONTROLLO A FRONTEND DEI FILAMENTI -->
        <filaments-list
          ref="filamentID"
          :class="{ invalid: !filament.isValid }"
          @mousedown="clearValidate('filament')"
        >
        </filaments-list>
        <p v-if="!filament.isValid" class="p-error">
          the filament not selected
        </p>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import FilamentsList from "../components/filaments/FilamentsList.vue";
export default {
  emits: ["save-data"],
  components: {
    FilamentsList,
  },
  data() {
    return {
      username: {
        val: "",
        isValid: true,
      },
      file: {
        isValid: true,
        url: "",
      },
      filament: {
        id: "",
        val: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidate(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.username.val === "") {
        this.username.isValid = false;
        this.formIsValid = false;
        console.log(`username is not ideal`);
      }
      console.log(this.file);
      if (this.file.name === "" || this.file.name === null) {
        this.file.isValid = false;
        this.formIsValid = false;
        console.log(`file is not ideal`);
      }

      if (this.filament.id === "" || this.filament.id === null) {
        this.filament.isValid = false;
        this.formIsValid = false;
        console.log(`filamentId is not ideal`);
      }
    },
    submitForm() {
      this.filament.id = this.$refs.filamentID.filamentSelezionato;
      console.log("id", this.filament.id);
      this.validateForm();

      if (!this.formIsValid) {
        console.log("form is not valid");
        return;
      }
      console.log("form is valid");
      console.log("refFilamento", this.$refs.filamentID.filamentSelezionato);

      const formData = {
        username: this.username.val,
        fileName: this.file.url,
        fk_filament: this.filament.id,
      };
      console.log(formData);
      this.$emit("save-data", formData);
    },

    filetest(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.file.name = files[0].name;
      console.log(this.file.name);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
  width: 70%;
}

input,
textarea {
  display: block;
  align-self: center;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h1 {
  margin-bottom: 2.5rem;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

p.p-error {
  color: red;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
