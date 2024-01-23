import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div>
        <input type="text"  onChange={(e)=>{
          this.props.propes(e)
        }}>
          
        </input>
      </div>
    )
  }
}
