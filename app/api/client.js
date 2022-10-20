const { create } = require("apisauce");

const apiClient = create({
  baseURL: "http://192.168.0.37:9000/api",
});

export default apiClient;
