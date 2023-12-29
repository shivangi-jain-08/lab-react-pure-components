import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  render() {
    console.log('This is Simple Component');
    return (
      <div className="simple-counter">
        <h2>Simple Counter</h2>
        <p>Counter: {this.state.counter}</p>
        <button className='counter' onClick={this.handleIncrement} disabled={!this.state.toggle}>
          Increase
        </button>
        <button onClick={this.handleToggle}>Set Toggle</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
