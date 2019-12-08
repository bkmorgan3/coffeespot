import React, { Component } from "react";

class Cafe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [];
    const shops = this.props.cafe.coffeeHouses;
    console.log("shops", shops);

    return (
      <div>
        <p>Im a caffe</p>
        {shops}
      </div>
    );
  }
}

export default Cafe;
