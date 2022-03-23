import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      submissions: [
        {
          id: 1,
          username: "test",
          fileName: "file.test",
          filamentColor: "robe",
          timestamp: "robe",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
