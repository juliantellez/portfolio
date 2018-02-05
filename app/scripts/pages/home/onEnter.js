import axios from 'axios'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

export default async request => {
  const {data} = await axios.get('http://freegeoip.net/json/')
  const home$ = new BehaviorSubject({ data })

  return {
    home$: home$.getValue(),
  }
}
