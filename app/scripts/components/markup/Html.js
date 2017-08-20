/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

export default class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    state: PropTypes.object,
  }

  static defaultProps = {
    state: {},
  }

  // TODO divide scripts in chunks

  _getState () {
    const state = JSON.stringify(this.props.state)
    return (
      <script
        dangerouslySetInnerHTML={{__html: `var STATE = ${state}`}} />
    )
  }

  render () {
    const {title, description, keywords} = this.props
    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel='stylesheet' type='text/css' href='static/styles.css' />
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />
        </head>
        <body>
          <main id='main' dangerouslySetInnerHTML={{__html: this.props.children}} />
          {this._getState()}
          <script src='static/client.js'/>
        </body>
      </html>
    )
  }
}
