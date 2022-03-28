<template>
  <div>
    <h1>Create your subscription!</h1>
    <form @submit.prevent="submitForm">
      <!-- USERNAME -->
      <div class="mb-5">
        <label for="username" class="form-label text-start">Username:</label>
        <!-- <input
          type="text"
          id="username"
          name="username"
          class="form-control"
          v-model.trim="username.val"
          @blur="clearValidate('username')"
        /> -->
        <InputText
          type="text"
          id="username"
          placeholder="Username"
          v-model.trim="username.val"
          v-tooltip.top.focus="'inserisci il tuo User'"
          @keypress="clearValidate('username')"
          @blur="clearValidate('username')"
          :class="!username.isValid ? 'p-invalid' : ''"
        />
        <div v-if="!username.isValid">
          <Message severity="error">Username is required</Message>
        </div>
      </div>
      <!-- FILE  -->
      <div class="mb-5" id="fileLink">
        <label for="Url" class="form-label text-start">Model Url:</label>
        <InputText
          type="text"
          id="Url"
          placeholder="Url"
          v-model="this.file.url"
          v-tooltip.top.focus="
            'inserisci il tuo link al modello, per esempio:\n\n https://www.thingiverse.com/thing:2239296 '
          "
          @keypress="clearValidate('file')"
          @blur="clearValidate('file')"
          :class="!file.isValid ? 'p-invalid' : ''"
        />
        <div v-if="!file.isValid">
          <Message severity="error">Url is required</Message>
        </div>
      </div>

      <div class="filaments">
        <label for="filaments" class="form-label text-start"
          ><h2>Filaments availables:</h2></label
        >
        <!-- DA RIVEDERE IL CONTROLLO A FRONTEND DEI FILAMENTI -->
        <filaments-list
          ref="filamentID"
          :class="{ invalid: !filament.isValid }"
          @click="clearValidate('filament')"
        >
        </filaments-list>
        <div v-if="!filament.isValid">
          <Message severity="error">Filament not selected</Message>
        </div>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    <Toast />
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
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    },
    clearValidate(input) {
      this[input].isValid = true;
      console.log(input, this[input].isValid);
    },
    validateForm() {
      this.formIsValid = true;
      if (this.username.val === "") {
        this.username.isValid = false;
        this.formIsValid = false;
        console.log(`username is not ideal`);
      }
      console.log(this.file);
      if (this.file.url === "" || this.file.url === null) {
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
      this.validateForm();

      if (!this.formIsValid) {
        console.log("form is not valid");
        return;
      }
      this.showSuccess();
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

h1 {
  margin-bottom: 2.5rem;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

/* p.p-error {
  color: red;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
} */
</style>
