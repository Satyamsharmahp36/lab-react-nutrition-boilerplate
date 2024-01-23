
import './App.css'
import FoodData from './components/FoodData'
import SearchData from './components/SearchData'
import ShowData from './components/ShowData'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      inputWord : ""
    }
  } 
  handleinput=(e)=>{
    this.setState({
      inputWord:e.target.value
    })
  }



  render() {
    return (
      <div id='mainDiv'>
      <div className='one'>
        <h1>Nutrition App</h1>
        <h3>Search Here</h3>
        <SearchData propes={this.handleinput}/>
        <h2>{this.state.inputWord}</h2>
        { 
        FoodData.filter((el)=>{
        if(this.state.inputWord==""){
          return el
        }
        else if(el.name.toLowerCase().includes(this.state.inputWord.toLowerCase())){
          return el;
        }
          }).map(e=>{
          return (
            <div key={e.id}>
            < ShowData data={e}/>
            </div>
          )
        })
      }
      </div>
      </div>
    )
  }
}



