import moment from 'moment'

export class Helper {
  static getCurrentTime() {
    const now = new Date()
    return (
      (now.getHours() < 10 ? '0' : '') +
      now.getHours() +
      ':' +
      (now.getMinutes() < 10 ? '0' : '') +
      now.getMinutes() +
      ':' +
      (now.getSeconds() < 10 ? '0' : '') +
      now.getSeconds()
    )
  }

  static updateObjectPropByEvent(object, event, cb) {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    if (object[name] !== value) {
      cb({ ...object, [name]: value })
    }
  }

  static formatDateTime(_date) {
    const date = _date ? moment(_date) : ''
    return date ? date.format('YYYY-MM-DD / hh:mm a') : '-'
  }

  static formatDate(_date) {
    const date = _date ? moment(_date) : ''
    return date ? date.format('YYYY-MM-DD') : '-'
  }
}
