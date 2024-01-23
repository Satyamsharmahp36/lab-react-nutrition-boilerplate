import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
        <div className='end'>
            <div>{this.props.name}</div>
            <div>{this.props.totalCal}</div>
            <div>{this.props.count}</div>
        </div>
    
    )
  }
}
