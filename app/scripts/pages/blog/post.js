import React from 'react'
import {RouteHandler} from 'src/utils/routes'

class BlogPost extends React.Component {
  render () {
    return (
      <div>
        BLOG POST
      </div>
    )
  }
}

export default new RouteHandler({
  component: BlogPost,
  // onEnter: require('./onEnter'),
})
