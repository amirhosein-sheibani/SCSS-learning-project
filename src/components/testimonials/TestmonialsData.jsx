import React from 'react';
import "./testmonialsData.scss"

function TestmonialsData({id , name , icon , title , image , desc , featured}) {
    return (
        <div className={(featured ? "card featured" : "card")} id={id}>
        <div className="top">
          <img src="../../assets/right-arrow.png" className="left" />
          <img src={image} className="user" alt="" />
          <img src={icon} className="right" alt="" />
        </div>
        <div className="center">
          {desc}
        </div>
        <div className="bottom">
          <h3>{name}</h3>
          <h4>{title}</h4>
        </div>
      </div>
    );
}

export default TestmonialsData;