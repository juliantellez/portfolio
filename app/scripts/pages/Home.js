import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import inject from '../components/utils/inject'

// TODO add @observe
@inject('home$')
class Home extends React.Component {
    static propTypes = {
      home$: PropTypes.object.isRequired,
    }
    render () {
      const {home$} = this.props
      return (
        <div>
          <Header />
          <img src={home$.imageUrl}/>
          <div onClick={home$.onClick}>clik me</div>
        </div>
      )
    }
}

export default Home
