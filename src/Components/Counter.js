import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <strong>
            Count: {this.props.count}
        </strong>
        <button onClick = {this.props.countUp}>Count+</button>
        <button onClick = {this.props.countDown}>Count-</button>
      </div>
    );
  }
}

export default Counter;
