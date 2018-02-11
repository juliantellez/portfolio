export default class EventEmitter {
  listeners = []
  on (cb) {
    this.listeners.push(cb)
    return () => {
      const index = this.listeners.indexOf(cb)
      index !== -1 && this.listeners.splice(index, 1)
    }
  }
  emit (data) {
    this.listeners.forEach(cb => cb(data))
  }
}
