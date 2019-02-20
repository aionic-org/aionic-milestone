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
}
