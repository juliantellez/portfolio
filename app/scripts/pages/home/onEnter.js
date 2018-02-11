
import HomeStore from './HomeStore'

export default async request => {
  const home$ = new HomeStore()
  const {data} = await home$.fetch()
  home$.next(data)
  return {
    home$: home$.getValue(),
  }
}
