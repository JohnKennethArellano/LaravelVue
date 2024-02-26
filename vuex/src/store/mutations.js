import { state } from "./states";

export const mutations = {
  setUser: (state, username) => {
    state.data.username = username;
  },
  showLoading: (state, showLoading) => {
    state.loading.showLoading = showLoading;
  },
  sidebarToggle: (state, value) => {
    state.sidebar.collapsed = value;
  },
  logout: (state) => {
    state.data.username = "";
  },
};
