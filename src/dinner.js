import React from "react";

function Dinner(props) {
  return (
    <div>
      <h1>we are serving {props.dishName} </h1>
      <h1>We are not serving {props.sweetDish} today! </h1>
    </div>
  );
}

export default Dinner;
