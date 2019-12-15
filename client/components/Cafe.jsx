import React from "react";

export default function Cafe(props) {
  console.log("props", props.cafes);
  let cafes = props.cafes;

  for (let i = 0; i < cafes.length; i++) {
    console.log(cafes[i]);
  }

  return (
    <div>
      <p>im a cafe</p>
    </div>
  );
}
