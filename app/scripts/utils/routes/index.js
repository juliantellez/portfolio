import I from 'immutable'

class ContentInfo extends I.Record({
  title: '',
  description: '',
}) {}

class RouteHandler extends I.Record({
  component: null,
  onEnter: () => new ContentInfo(),
  onChange: () => new ContentInfo(),
}) {}

class Route extends I.Record({
  name: '',
  className: '',
  handler: new RouteHandler(),
}) {}

export default {
  Route,
  RouteHandler,
  ContentInfo,
}
