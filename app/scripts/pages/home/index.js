import React from 'react'
import {RouteHandler} from 'src/utils/routes'

class Home extends React.Component {
  render () {
    return (
      <div>
        Home
      </div>
    )
  }
}

export default new RouteHandler({
  component: Home,
  // onEnter: require('./onEnter'),
})
