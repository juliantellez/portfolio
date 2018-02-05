import EventEmiter from './EventEmitter'

const reporter = new EventEmiter()

const reportRendering = component => {
  reporter.emit({
    event: 'render',
    component,
  })
}

// TODO continue here
// https://github.com/kuuup/mobx-ssr-example/blob/master/src/client/index.js
// https://github.com/mobxjs/mobx-react/blob/master/src/observer.js

// missing:
//  observer renderer
//  state object, should contain views + actions
