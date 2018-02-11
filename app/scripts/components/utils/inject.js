import React from 'react'
import PropTypes from 'prop-types'

const selectStores = (stores, storeNames) =>
  storeNames
  .filter(storeName => {
    const hasStore = storeName in stores
    if (!hasStore) {
      throw new Error(`${storeName} not found`)
    }
    return hasStore
  })
  .reduce((selectedStores, currentStore) => {
    selectedStores[currentStore] = stores[currentStore]
    return selectedStores
  }, {})

const nameWrappedComponentWithStore = (component, storeNames) => {
  const displayName = 'inject-' + (
    component.displayName ||
    component.name ||
    (component.constructor && component.constructor.name)
  )
  return `${displayName}-with-${storeNames.join('__')}`
}

export default function inject () {
  const storeNames = Object.keys(arguments).filter(Boolean).map(arg => arguments[arg])
  return WrappedComponent => {
    return class Injector extends React.Component {
          static WrappedComponent = WrappedComponent
          static displayName = nameWrappedComponentWithStore(WrappedComponent, storeNames)
          static contextTypes = {
            stores: PropTypes.object.isRequired,
          }

          mapStoresToProps () {
            const { stores } = this.context
            return selectStores(stores, storeNames)
          }

          render () {
            return (
              <WrappedComponent
                {...this.mapStoresToProps()}
                {...this.props}
              />
            )
          }
    }
  }
}
