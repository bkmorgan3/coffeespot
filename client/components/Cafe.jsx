import React from "react";

// declare proptypes use isRequired

export default function Cafe(props) {
  console.log("props", props.cafes);
  const names = [];

  for (let i = 0; i < props.cafes.length; i++) {
    console.log("p.c.", props.cafes[i].shopName);
    names.push(props.cafes[i].shopName);
  }
  console.log(names[0]);
  let store = names[0];
  return <div>{store}</div>;
}
