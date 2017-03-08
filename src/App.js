import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainInputComponent from './components/MainInputComponent'

import { calcButtons } from './static/TypesAndDefaults'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: 0,
      storedValue: 0,
      operationsCount: 0
    }
    this.mathPlus = this.mathPlus.bind(this)
    this.mathMinus = this.mathMinus.bind(this)
  }

  handleChange = (value) => {
    if(value){
      this.setState({currentValue: parseInt(value)})
    } else {
      this.setState({currentValue: 0})
    }
  }

  initialFallback() {
    if(this.state.storedValue === 0){
      this.setState({storedValue: this.state.currentValue})
    }
  }

  mathPlus() {
    this.initialFallback()
    this.setState({
      storedValue: parseInt(this.state.storedValue) + parseInt(this.state.currentValue),
      currentValue: 0
    })
  }

  mathMinus() {
    this.initialFallback()
    this.setState({
      storedValue: parseInt(this.state.storedValue) - parseInt(this.state.currentValue),
      currentValue: 0
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="current-result">{this.state.storedValue}</h1>
        <MainInputComponent mainValue={this.state.currentValue} handleChange={this.handleChange}/>
        <button className="btn-plus" onClick={this.mathPlus}>+</button>
        <button className="btn-minus" onClick={this.mathMinus}>-</button>
      </div>
    );
  }
}

export default App;
