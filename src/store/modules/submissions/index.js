import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
    namespaced: true,
    state() {
      return {
        submissions: [
          {
            id: null,
            username: null,
            fileName: null,
            filament: null,
            timestamp: null
          },
        ],
      };
    },
    mutations,
    actions,
    getters,
  };
  