import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
     count: 0,
    };
  }
increment = ()=>{
    this.setState({ count: this.state.count + 1})
}
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h3>
            {this.state.count}
        </h3>
        <p>
          <button onClick={this.increment}> Increment</button>
        </p>
      </div>
    );
  }
}

export default Counter;