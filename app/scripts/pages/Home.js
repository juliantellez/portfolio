import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import inject from '../components/utils/inject'

// TODO @observe
@inject('home$')
class Home extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
    }

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

export default Home
