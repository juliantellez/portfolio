import I from 'immutable'

class SEOInfo extends I.Record({
  title: '',
  description: '',
  keywords: '',
}) {}

class Route extends I.Record({
  name: '',
  path: '/',
  className: '',
  component: null,
  onChange: () => new SEOInfo(),
  onEnter: () => new SEOInfo(),
}) {}

export default {
  Route,
  SEOInfo,
}
