import React from 'react'

import HomeLink from './homeLink/HomeLink.component'
import Navigation from './navigation/Navigation.component'
import styles from './Header.css'

export default class Header extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <HomeLink />
        <Navigation />
      </div>
    )
  }
}
