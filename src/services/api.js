import { create } from 'axios'
import { Session } from './session'

// default config
const axios = create({
  baseURL: 'http://localhost:3000/api'
})

export class Api {
  static fetchData(endpoint) {
    const config = {
      headers: {
        Authorization: `Bearer ${Session.getToken()}`
      }
    }

    return axios
      .get(endpoint, config)
      .then(res => {
        if (res.data.status < 200 || res.data.status >= 300) {
          return Promise.reject(res)
        } else {
          return Promise.resolve(res)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }

  static postData(endpoint, data, authorize = true) {
    const config = {}
    if (authorize === true) {
      config.headers = {
        Authorization: `Bearer ${Session.getToken()}`
      }
    }

    return axios
      .post(endpoint, data, config)
      .then(res => {
        if (res.data.status < 200 || res.data.status >= 300) {
          return Promise.reject(res)
        } else {
          return Promise.resolve(res)
        }
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }
}
