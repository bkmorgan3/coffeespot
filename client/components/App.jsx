import React, { Component } from "react";

import Nav from "./Nav.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    fetch("/api/cafes")
      .then(res => console.log("res", res.json()))
      .then(data => console.log("data", JSON.stringify(data)))
      .catch(err => console.log("err", err));
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;
