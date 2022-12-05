import axios from "axios";
import { APP_ENV, MOVIE_DB_API_KEY, MOVIE_DB_BASE_URL } from "../constants/App";

const instance = axios.create({
  baseURL: MOVIE_DB_BASE_URL,
});

instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${MOVIE_DB_API_KEY}`;

if (APP_ENV !== "production") {
  instance.interceptors.response.use(
    (response) => {
      console.log("RESPONSE ", response);
      return response.data;
    },
    (error) => {
      console.log("ERROR ", error);
      return Promise.reject(error);
    }
  );
}

export default instance;
