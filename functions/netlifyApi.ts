import { ApiOptions, ApiType, Methods } from './types'

require('dotenv').config()
const axios = require('axios')
const { API_ENDPOINT, API_KEY } = process.env

const apiEndpointWithKey = `${API_ENDPOINT}/?apikey=${API_KEY}`

// Send all data requests
exports.handler = async function (event) {
  const apiOptions: ApiOptions = JSON.parse(event.body)

  const {
    methods = Methods.get,
    apiType = ApiType.search,
    value = '',
    options = [],
  } = apiOptions

  // Add Params
  let params = `&${apiType}=${value}`
  if (options.length) {
    options.forEach(({ type, value }) => {
      params += `&${type}=${value}`
    })
  }

  const { data } = await axios({
    url: apiEndpointWithKey + params,
    methods,
    headers: {
      'Content-Type': 'application/json',
      'x-username': API_KEY,
    },
  })

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
