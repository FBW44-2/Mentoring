import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    console.log('constructor')
    this.state = { counter: 0 }
  }

  
  componentDidMount() {
    console.log('componentDidMount');
    fetch()
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount')

  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>Welcome to Test App!</h3>
        <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>+</button>
        <span>{this.state.counter}</span>


        <button onClick={() => { this.forceUpdate() }}>forUpdate</button>
        <a href="/about">Google</a>
      </div>
    )
  }
  

}
