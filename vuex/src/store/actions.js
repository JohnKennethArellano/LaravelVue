import AxiosClient from "@/AxiosClient";
import Csrf from "@/Csrf";
export const actions = {
  async login({ commit }, user) {
    // const cookie = await Csrf.getCookie();
    commit("showLoading", true);
    return AxiosClient.post("login", user)
      .then(({ data }) => {
        commit("setUser", data.user);
        commit("showLoading", false);
        return data;
      })
      .catch((apiMsg) => {
        commit("showLoading", false);
        console.log(apiMsg);
      });
  },
  async register({ commit }, formdata) {
    // const cookie = await Csrf.getCookie();
    commit("showLoading", true);
    return AxiosClient.post("register", formdata)
      .then(({ data }) => {
        commit("showLoading", false);
        return data;
      })
      .catch((err) => {
        commit("showLoading", false);
        console.log(err);
      });
  },
  async checkuser() {
    alert("adajh");
  },
  async logout({ commit }) {
    commit("logout");
  },
  async sideBar({ commit }, value) {
    commit("sidebarToggle", value);
  },
};
