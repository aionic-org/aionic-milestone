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
}
