exports.install = function (Vue, options) {
  const axios = require('axios')
  const axiosConfig = require('./Config').axios
  const Axios = axios.create(axiosConfig)
  Vue.prototype.$axios = {get: Axios.get, post: Axios.post}
}
