import { state } from "./states";

export const mutations = {
  setUser: (state, username) => {
    state.data.username = username;
  },
  setToken: (state, token) => {
    state.user.token = token;
  },
  setAuth: (state, auth) => {
    state.user.isAuth = auth;
  },
  showLoading: (state, showLoading) => {
    state.loading.showLoading = showLoading;
  },
  sidebarToggle: (state, value) => {
    state.sidebar.collapsed = value;
  },
  logout: (state) => {
    state.data.username = "";
    state.user.token = "";
    state.user.isAuth = false;
  },
  setStudents: (state , data)=>{
    state.students.data = data;
  }
};
