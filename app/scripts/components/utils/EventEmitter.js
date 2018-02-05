export default class EventEmitter {
  constructor (listeners = {}) {
    this.listeners = listeners
  }
  on (eventName, eventCallback) {
    this.listeners[eventName] = eventCallback
    return () => {
      delete this.listeners[eventName]
    }
  }
  off (eventName) {
    delete this.listeners[eventName]
  }
  emit (data) {
    Object.keys(this.listeners)
    .forEach(listener => this.listeners[listener](data))
  }
}
