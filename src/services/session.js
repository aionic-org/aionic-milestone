import decode from 'jwt-decode'
import { Api } from './api'

export class Session {
  static registerUser(user, registerHash) {
    // register user
    return Api.postData(`auth/register/${registerHash}`, user, false)
      .then(res => {
        // signin user
        return this.signinUser(user)
          .then(res => {
            return Promise.resolve(res)
          })
          .catch(err => {
            return Promise.reject(err)
          })
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }

  static signinUser(user) {
    return Api.postData('auth/signin', user, false)
      .then(res => {
        return Promise.resolve(res)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  }

  static signoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }

  static setUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  static isLoggedIn() {
    const token = this.getToken()

    return token !== null && token.length && this.isValidToken(token) ? true : false
  }

  static isValidToken(encodedToken) {
    const token = decode(encodedToken)

    if (!token.exp || !token.iss || !token.aud) {
      return false
    } else {
      const expDate = new Date(0)
      expDate.setUTCSeconds(token.exp)

      const validDetails =
        expDate > new Date() && token.iss === 'aionic-api' && token.aud === 'aionic-client'

      return validDetails ? true : false
    }
  }
}
