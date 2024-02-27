import AxiosClient from "@/AxiosClient";
import Csrf from "@/RandomToken";
export const actions = {
  async login({ commit }, user) {
    const cookie = Csrf.randomToken(20);
    commit("showLoading", true);
    return AxiosClient.post("login", user, cookie)
      .then(({ data }) => {
        commit("setUser", data.user);
        commit("showLoading", false);
        commit("setToken", cookie);
        commit("setAuth", true);
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
        return err;
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
