import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import inject from '../components/utils/inject'

// TODO add @observe
@inject('home$')
class Home extends React.Component {
    static propTypes = {
      home$: PropTypes.object.isRequired,
    }
    render () {
      return (
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/blog'>Blog</Link>
          <div onClick={this.props.home$.onClick}>clik me</div>
        </div>
      )
    }
}

export default Home
