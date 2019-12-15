import React, { Component } from "react";

export default function Cafe(props) {
  // console.log("props", props.cafes);
  const list = [];
  let myObj = props.cafes.coffeeHouses;
  for (let key in props) {
    console.log("key", myObj);
    list.push(myObj);
  }
  console.log("list", list);
  for (let i = 0; i < list.length; i++) {
    console.log("listing", list[i]);
  }
  return (
    <div>
      <p>im a cafe</p>
    </div>
  );
}
