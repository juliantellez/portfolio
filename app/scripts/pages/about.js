import React from 'react'

import {RouteHandler} from 'src/utils/routes'

class About extends React.Component {
  render () {
    return (
      <div>
        ABOUT
      </div>
    )
  }
}

export default new RouteHandler({
  component: About,
  // onEnter: require('./onEnter'),
})
