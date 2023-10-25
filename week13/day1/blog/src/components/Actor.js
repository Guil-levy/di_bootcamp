import React from "react";

class Actor extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Tom",
      lastName: "Cruise",
      image: "https://example.com/tom-hanks.jpg",
    
    };
  }

  render() {
    return (
      <div>
        <h1>His name is {this.state.firstName} {this.state.lastName}</h1>
        <p>
          he looks like this : {this.state.image}
          {this.state.model}
        </p>
      </div>
    );
  }
}

export default Actor;