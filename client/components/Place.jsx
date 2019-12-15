import React from React;

export default function Place(props){
  return (
    <div>
      <p>{props.shopName}</p>
      <img src={props.shopImg} alt=""/>
      <p>{props.shopAddress}</p>
    </div>
  )
}
