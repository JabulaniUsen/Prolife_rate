import axios from "axios";
import { APP_CONFIG } from "../config/settings";
import { getToken } from "../Redux/storage";

const axiosClient = () => {
  axios.defaults.baseURL = APP_CONFIG.BASE_URL;

  const _token = getToken();

  if (_token != undefined) {
    axios.defaults.headers.get.Authorization = `Bearer ${_token}`;
    axios.defaults.headers.post.Authorization = `Bearer ${_token}`;
    axios.defaults.headers.delete.Authorization = `Bearer ${_token}`;
    axios.defaults.headers.patch.Authorization = `Bearer ${_token}`;
    axios.defaults.headers.put.Authorization = `Bearer ${_token}`;
    axios.defaults.headers.common.Authorization = `Bearer ${_token}`;
  }
  return axios;
};

export default axiosClient;