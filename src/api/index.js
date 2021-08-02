import axios from "axios";

axios.defaults.baseURL = "http://localhost:8009/";

export const getSwipeList = async () => {
  return axios.get("/home/swiper");
};
