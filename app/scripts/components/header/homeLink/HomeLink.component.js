import React from 'react'
import { Link } from 'react-router-dom'

import styles from './HomeLink.css'

export default class HomeLink extends React.Component {
  render () {
    return (
      <Link to='/' className={styles.main}>
        <div className={styles.logo}>JT</div>
        <div className={styles.name}>Julian Tellez</div>
      </Link>
    )
  }
}
