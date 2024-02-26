import { reactive } from "vue";

export const state = reactive({
  data: {
    username: "",
  },
  loading: {
    showLoading: false,
  },
  sidebar: {
    collapsed: false,
  },
  user : {
    data : []
  }
});
