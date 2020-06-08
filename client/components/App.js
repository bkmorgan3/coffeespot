import React, { Component } from 'react';

import Nav from './Nav';
import CafeScreen from './CafeScreen';
import '../styles/index.scss';


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
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="app">
        <Nav />
        <CafeScreen cafes={cafes} />
      </div>
    );
  }
}

export default App;
