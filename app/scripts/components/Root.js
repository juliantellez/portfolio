import React from 'react'
import PropTypes from 'prop-types'

export default class Root extends React.Component {
    static childContextTypes = {
      store: PropTypes.object.isRequired,
    }

    static contextTypes = {
      store: PropTypes.object,
    }

    static propTypes = {
      children: PropTypes.element.isRequired,
      provideStore: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
      ]),
    }

    static defaultProps = {
      provideStore: {},
    }

    getChildContext () {
      return {
        store: this.props.provideStore,
      }
    }

    render () {
      return (
        <div className='Root'>
          {this.props.children}
        </div>
      )
    }
}
