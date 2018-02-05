import { BehaviorSubject } from 'rxjs/BehaviorSubject'

// TODO
class State {
  constructor (initialState) {
    this.view = initialState
  }
  toJSON () {
    return this.view
  }
}

export default State
