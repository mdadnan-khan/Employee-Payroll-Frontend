const axios = require("axios").default;

class AxiosService {
  getService(url = "", tokenRequired = false, httpOptions = null) {
    return axios.get(url, tokenRequired && httpOptions);
  }

  postService(
    url = "",
    payload = null,
    tokenRequired = false,
    httpOptions = null
  ) {
    return axios.post(url, payload, tokenRequired && httpOptions);
  }

  putService(url, data, tokenRequired = false, httpOptions = null) {
    return axios.put(url, data, tokenRequired && httpOptions);
  }

  deleteService(url = "", tokenRequired = false, httpOptions = null) {
    return axios.delete(url);
  }
}

module.exports = new AxiosService();
