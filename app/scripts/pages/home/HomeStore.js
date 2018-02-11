import axios from 'axios'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

class HomeStore extends BehaviorSubject {
  onClick (event) {
    console.log(event)
  }
  fetch = () => axios.get('http://freegeoip.net/json/')
  imageUrl = 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/316278_389961834453168_1017201830_n.jpg?oh=73198c9f6d66605f6d69c9884e41121f&oe=5B14267B'
}

export default HomeStore
