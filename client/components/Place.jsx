import React from "react";

export default function Place(props) {
  console.log("place props", props);
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}
