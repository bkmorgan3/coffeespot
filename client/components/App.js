import React, { Component } from 'react';

import Nav from './Nav';
import CafeScreen from './CafeScreen';
import '../styles/index.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      cafes: [],
    };
    this.deleteCafe = this.deleteCafe.bind(this);
  }

  componentDidMount() {
    fetch('/api/cafes')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cafes: data, isLoaded: true });
      })
      .catch((error) => {
        this.setState({ isLoaded: true, error });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  deleteCafe(id) {
    // eslint-disable-next-line no-undef
    const updatedCafes = this.state.cafes.filter(cup => cup.shopId !== id)
    this.setState({cafes: updatedCafes})
  }

  render() {
    const {
      cafes,
      error,
      isLoaded,
    } = this.state;
    if (error) return <div>Error: {error.message}</div>
    if (!isLoaded) return <div>Loading...</div>
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="app">
        <Nav />
        <CafeScreen cafes={cafes} deleteCafe={this.deleteCafe} />
      </div>
    )
  }
}

export default App;