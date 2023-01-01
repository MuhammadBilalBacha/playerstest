import React from "react";
import "./players.css";

const Players = (props) => {
  return (
    <div className="contain">
      <div className="myrow fw-semibold py-3 text-dark d-flex justify-content-between px-3 my-2">
        <span>
          <img src={props.image} alt="" className="image" />
        </span>
        <span>{props.first_name}</span>
        <span>{props.last_name}</span>
        <span>{props.club}</span>
        <span className="btn btn-primary" onClick={props.click}>
          view
        </span>
      </div>
    </div>
  );
};

export default Players;
