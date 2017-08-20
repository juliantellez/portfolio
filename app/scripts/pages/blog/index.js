import React from 'react'
import {RouteHandler} from 'src/utils/routes'

class Blog extends React.Component {
  render () {
    return (
      <div>
        BLOG
      </div>
    )
  }
}

export default new RouteHandler({
  component: Blog,
  // onEnter: require('./onEnter'),
})
