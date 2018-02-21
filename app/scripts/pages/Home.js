import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header/Header.component'
import inject from '../components/utils/inject'
import styles from './home/home.css'

@inject('home$')
class Home extends React.Component {
    static propTypes = {
      home$: PropTypes.object.isRequired,
    }
    render () {
      const {home$} = this.props
      return (
        <div className={styles.main}>
          <Header />
          <div onClick={home$.onClick}>clik me</div>
        </div>
      )
    }
}

export default Home
