import React, { Component } from "react";

export default function Cafe(props) {
  console.log("props", props.cafes);

  for (let i = 0; i < props.cafes.length; i++) {
    console.log(props.cafes[i]);
  }

  return (
    <div>
      <p>im a cafe</p>
    </div>
  );
}

// My goal is to grab each item from state and render it to the DOM.

// My problem seems to be that state is not iterable.  I drill down to what looks like
// an array but then I get errors like  'Can not get length of undefined'
// so I go to iterate it as an object and again I get down to the same errors.

// i have tried sending my res.locals as just an array, in my Server file line 13.
// I've tried all kinds of ways to iterate, from passing through arrays, finding the keys.
// values of my props object but I am out of ideas now.
