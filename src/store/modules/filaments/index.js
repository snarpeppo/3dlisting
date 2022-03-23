import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
    namespaced: true,
    state() {
      return {
        filaments: [
          {
            filament_id: null,
            filamentProducer: null,
            filamentColor: null,
            filamentMaterial: null,
          },
        ],
      };
    },
    mutations,
    actions,
    getters,
  };