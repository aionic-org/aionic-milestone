import { Session } from './session'

const root = 'http://localhost:3000'

export class Api {
  static async fetchData(endpoint) {
    try {
      const res = await fetch(`${root}/${endpoint}`)
      return res.json()
    } catch (err) {
      throw err
    }
  }

  static async postData(endpoint, data, authorize = false) {
    try {
      const headers = new Headers({ 'Content-Type': 'application/json' })

      if (authorize === true) {
        headers.append('Authorization', `Bearer ${Session.getToken()}`)
      }

      const res = await fetch(`${root}/${endpoint}`, {
        method: 'POST',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(data)
      })

      return res.json()
    } catch (err) {
      throw err
    }
  }
}
