import React, { Component } from 'react'
import Total from './Total'

export default class  extends Component {
    constructor(){
        super()
        this.state={
            counter: 0,
            calaories: 0
        }
    }

    handleinput=(e)=>{
        this.setState({
            counter:e.target.value,
        })
    }

    handleCounter=()=>{
        this.setState({
            calaories: this.props.data.cal*this.state.counter,
        })
    }

    handleReset=()=>{
        this.setState({
            counter:0,
            calaories:0
        })
    }

  render() {
    return (
      <div className='contentDiv'>
       <h1 style={{fontSize:"2.5vw"}}> {this.props.data.name}</h1>
        <img src={this.props.data.img} alt="" />
        <div>
            <h2>Enter Quantity</h2>
        <input type="number"  onChange={(e)=>{this.handleinput(e)}}
        />
        </div>
        <button onClick={this.handleCounter}>+</button>
        <button onClick={this.handleReset}>Reset</button>
        <div>
            <h2>Total Calaories</h2>
        <h1>{this.state.calaories}</h1>
        </div>
        <Total name={this.props.data.name} totalCal={this.state.calaories} count={this.state.counter}/>
    </div>
    )
  }
}
