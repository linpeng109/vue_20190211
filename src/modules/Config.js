var config = {
  axios: {
    baseURL: 'http://localhost:8084',
    headers: {'Access-Control-Allow-Origin': '*'},
    timeout: 5000,
    responseType: 'text'
  }
}
module.exports = config
