import I from 'immutable'

class SEOInfo extends I.Record({
  title: 'Julian Tellez | Software developer',
  description: 'Software developer in London, U.K.',
  keywords: 'software, development, front-end, back-end',
}) {}

class Route extends I.Record({
  name: '',
  path: '/',
  className: '',
  component: null,
  onChange: () => ({}),
  onEnter: () => ({}),
  constructSeoInfo: () => new SEOInfo(),
}) {}

export default Route
