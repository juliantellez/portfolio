import React from 'react'

export default class Root extends React.Component {
  render () {
    return (
      <div className='Root'>
        {this.props.children}
      </div>
    )
  }
}
