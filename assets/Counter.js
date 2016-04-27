import React from "react";

var Counter = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  increment: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function() {
    return (
      <div>
        <h1>
          {this.state.count} <button onClick={this.increment}>+</button>
        </h1>
      </div>
    );
  }
});

export default Counter;