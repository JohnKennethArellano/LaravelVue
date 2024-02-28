import axios from "axios";

export default {
  async getData(url) {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
};
