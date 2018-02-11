import axios from 'axios'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

class HomeStore extends BehaviorSubject {
  onClick (event) {
    console.log(event)
  }
  fetch = () => axios.get('http://freegeoip.net/json/')
}

export default HomeStore
