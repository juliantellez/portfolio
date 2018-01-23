import React from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends React.Component {
  render () {
    return (
      <div>
          NOt FOund!
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </div>
    )
  }
}
