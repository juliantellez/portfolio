/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'

// TODO divide scripts in chunks

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

  _getFavicon () {
    return [
      <link key='apple-touch-icon' rel='apple-touch-icon' sizes='180x180' href='/static/images/apple-touch-icon.png'/>,
      <link key='icon32x32' rel='icon' type='image/png' sizes='32x32' href='/static/images/favicon-32x32.png'/>,
      <link key='icon16x16' rel='icon' type='image/png' sizes='16x16' href='/static/images/favicon-16x16.png'/>,
      <link key='mask-icon' rel='mask-icon' href='/static/images/safari-pinned-tab.svg' color='#5BBAD5'/>,
      <meta key='theme-color' name='theme-color' content='#FFFFFF'/>,
    ]
  }

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
          <link rel='stylesheet' type='text/css' href='/static/styles.css' />
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />
          {this._getFavicon()}
        </head>
        <body>
          <main id='main' dangerouslySetInnerHTML={{__html: this.props.children}} />
          {this._getState()}
          <script src='/static/client.js'/>
        </body>
      </html>
    )
  }
}
