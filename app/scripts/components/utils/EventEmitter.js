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
    Object
    .keys(this.listeners)
    .map(listener => this.listeners[listener])
    .filter(Boolean)
    .forEach(listener => listener(data))
  }
}
