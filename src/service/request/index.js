import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class myRequest {
  constructor(BASE_URL, TIMEOUT) {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
    });

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.instance.request({ ...config, method: "GET" });
  }

  post(config) {
    return this.instance.request({ ...config, method: "POST" });
  }
}

export default new myRequest(BASE_URL, TIMEOUT);
