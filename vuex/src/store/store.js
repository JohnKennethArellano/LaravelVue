import { createStore } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./states";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()],
});
