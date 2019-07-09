const IP_ADDRESS = "http://192.168.1.81"
const PORT = "4040"
const API_URL = `${IP_ADDRESS}:${PORT}`

const ApiUrlBuilder = (path_segments = [], params = {}) => {
  const query = Object.entries(params).map((arr) => { return arr.join("=") }).join("&")
  const url = [API_URL, ...path_segments].join("/")
  return query === "" ? url : `${url}?${query}`
}

export default ApiUrlBuilder
