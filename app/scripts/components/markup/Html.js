/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

import Favicon from './FavIcon'

export default class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    routeStore: PropTypes.object.isRequired,
  }

  injectStore () {
    const routeStore = JSON.stringify(this.props.routeStore)
    const __html = `var ROUTE_STORE = ${routeStore}`
    return (
      <script
        dangerouslySetInnerHTML={{ __html }}
      />
    )
  }

  render () {
    const {title, description, keywords} = this.props
    const favicon = Favicon()
    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel='stylesheet' type='text/css' href='/static/styles.css' />
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />
          {favicon}
        </head>
        <body>
          <main id='main' dangerouslySetInnerHTML={{__html: this.props.children}} />
          {this.injectStore()}
          <script src='/static/client.js'/>
        </body>
      </html>
    )
  }
}
