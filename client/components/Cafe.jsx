import React from "react";

// declare proptypes use isRequired

export default function Cafe(props) {
  console.log("props", props.cafes);
  let cafes = props.cafes;
  const spots = [];

  for (let i = 0; i < cafes.length; i++) {
    console.log("c", cafes[i]);
    let img = <img src={cafes[i].shopImg} alt="" />;
    spots.push(cafes[i]);
  }
  console.log("spots", spots);
  return (
    <div>
      <p>im a cafe</p>
      {spots.map(i => {
        <h4>{i.shopName}</h4>;
        <img src={i.shopImg} alt="" />;
      })}
    </div>
  );
}
