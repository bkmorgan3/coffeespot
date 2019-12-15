import React from "react";

// declare proptypes use isRequired

export default function Cafe(props) {
  console.log("props", props.cafes);
  let cafes = props.cafes;
  const names = [];

  for (let i = 0; i < cafes.length; i++) {
    console.log(cafes[i]);
    let img = <img src={cafes[i].shopImg} alt="" />;
    names.push(img);
  }

  return (
    <div>
      <p>im a cafe</p>
      {names}
    </div>
  );
}
