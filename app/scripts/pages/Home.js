import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </div>
    )
  }
}
