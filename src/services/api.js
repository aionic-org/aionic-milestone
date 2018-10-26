import { create } from 'axios'
import { Session } from './session'

// default config
const axios = create({
  baseURL: 'http://localhost:3000/api'
})

export class Api {
  static validateResponse(res) {
    if (res.data.status < 200 || res.data.status >= 300) {
      return Promise.reject(res)
    } else {
      return Promise.resolve(res.data.data)
    }
  }

  static fetchData(endpoint) {
    const config = { headers: { Authorization: `Bearer ${Session.getToken()}` } }

    return axios
      .get(endpoint, config)
      .then(res => {
        return this.validateResponse(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }

  static deleteData(endpoint) {
    const config = { headers: { Authorization: `Bearer ${Session.getToken()}` } }

    return axios
      .delete(endpoint, config)
      .then(res => {
        return this.validateResponse(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }

  static postData(endpoint, data, authorize = true) {
    const config = {}
    if (authorize === true) {
      config.headers = { Authorization: `Bearer ${Session.getToken()}` }
    }

    return axios
      .post(endpoint, data, config)
      .then(res => {
        return this.validateResponse(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }

  static handleHttpError(error) {
    if (error.response !== undefined) {
      switch (error.response.status) {
        case 401:
          return 'Missing user rights!'
        case 404:
          return 'Resource not found!'
        default:
          return 'Failed to fetch data from server!'
      }
    } else if (error.message !== undefined) {
      return error.message
    } else {
      return 'Failed to fetch data from server!'
    }
  }
}
