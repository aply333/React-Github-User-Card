import React from "react";

const MyCard = props => {
  return (
    <fragment>
      <h1>{props.userName}</h1>
      <img src = {props.userImg}/>
    </fragment>
  );
};

export default MyCard;
