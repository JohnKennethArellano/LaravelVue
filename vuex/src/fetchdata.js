import axios from "axios";

export default {
  getData(url) {
      const data = axios.post(url);
      return data;
  },
};
