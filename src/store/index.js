import { createStore } from "vuex";
import SubmissionsModule from "./modules/submissions/index.js";
import FilamentsModule from "./modules/filaments/index.js";

const store = createStore({
  modules: {
    submissions: SubmissionsModule,
   filaments: FilamentsModule
  },
});

export default store;

