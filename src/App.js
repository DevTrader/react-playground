import React, { Component } from 'react';
import Projects from './Components/Projects'
import Counter from './Components/Counter'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  componentWillMount(){
    this.setState()
  }

  countUpHandler = () => {
    this.setState({
      count: this.state.count +1
    })
  }

  countDownHandler = () => {
    this.setState({
      count: this.state.count -1
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My App</h1>
        <Counter 
          count = {this.state.count} 
          countUp = {this.countUpHandler} 
          countDown = {this.countDownHandler}
        />
      </div>
    );
  }
}

export default App;
