export default {
  setQueue(state, payload) {
    state.submissions = payload;
  },

  createSub(state, payload) {
    state.submissions.push(payload);
  },

}