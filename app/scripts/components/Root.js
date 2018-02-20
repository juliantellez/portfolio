import React from 'react'
import PropTypes from 'prop-types'
import stores from '../stores/main'
import rootStyles from './Root.css'

export default class Root extends React.Component {
    static childContextTypes = {
      stores: PropTypes.object.isRequired,
    }

    static contextTypes = {
      stores: PropTypes.object,
    }

    static propTypes = {
      children: PropTypes.element.isRequired,
      serializedStores: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
      ]),
    }

    static defaultProps = {
      serializedStores: {},
    }

    hydrateStores () {
      return Object
      .keys(stores)
      .map(storeName => {
        const Store = stores[storeName]
        const data = this.props.serializedStores[storeName] || {}
        return [storeName, new Store(data)]
      })
      .reduce((accumulate, [storeName, store]) => {
        accumulate[storeName] = store
        return accumulate
      }, {})
    }

    getChildContext () {
      return {
        stores: this.hydrateStores(),
      }
    }

    render () {
      return (
        <div className={rootStyles.main}>
          {this.props.children}
        </div>
      )
    }
}
