import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.css'

export default class Navigation extends React.Component {
  render () {
    return (
      <nav className={styles.main}>
        <Link className={styles.link} to='/about'>About</Link>
        <Link className={styles.link} to='/blog'>Blog</Link>
      </nav>
    )
  }
}
