/* eslint-disable */
import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello,world!</h1>
        <h2>
            现在是
            {this.state.date.toLocaleDateString()}
        </h2>
      </div>
    );
  }
}

export default Clock;
