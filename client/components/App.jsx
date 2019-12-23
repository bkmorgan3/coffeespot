import React, { Component } from 'react';

import Nav from './Nav.jsx';
import CafeScreen from './CafeScreen.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cafes: [],
    };
  }

  componentDidMount() {
    fetch('/api/cafes')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cafes: data });
      })
      .catch((err) => console.error('err', err));
  }

  render() {
    const {
      cafes,
    } = this.state;

    return (
      <div>
        <Nav />
        <CafeScreen cafes={this.state.cafes} />
      </div>
    );
  }
}

export default App;
