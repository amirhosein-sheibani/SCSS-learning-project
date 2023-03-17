import React from "react";
import "./worksList.scss";

export default function WorksList({ id, icon, title, desc, image }) {
  return (
    <div className="container" id={id}>
      <div className="item" >
        <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src={icon} alt="" />
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <span>projects</span>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
