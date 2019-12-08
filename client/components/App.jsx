import React, { Component } from "react";

import Nav from "./Nav.jsx";
import Cafe from "./Cafe.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cafes: []
    };
  }

  componentDidMount() {
    fetch("/api/cafes")
      .then(res => res.json())
      .then(data => {
        this.setState({ cafes: data });
      })
      .catch(err => console.log("err", err));
  }

  render() {
    return (
      <div>
        <Nav />
        <Cafe cafe={this.state.cafes} />
      </div>
    );
  }
}

export default App;
