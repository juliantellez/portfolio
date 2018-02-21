import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header/Header.component'
import inject from '../components/utils/inject'
import styles from './home/home.css'
import canvasApp from './home/canvas'

@inject('home$')
class Home extends React.Component {
    static propTypes = {
      home$: PropTypes.object.isRequired,
    }
    componentDidMount () {
        canvasApp()
    }
    render () {
      const {home$} = this.props
      return (
        <div className={styles.main}>
          <Header />
            <canvas id="canvasOne" width="900" height="520" ></canvas>
          <div onClick={home$.onClick}>clik me</div>
        </div>
      )
    }
}

export default Home
