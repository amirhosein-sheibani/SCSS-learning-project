import React, { useEffect } from "react";
import "./intro.scss";
import Typewriter from 'typewriter-effect/dist/core';

const Intro = () => {


  useEffect(() => {

    new Typewriter("#typewriter" ,{
        strings : ["Developer" , "Designer"],
        autoStart :true,
        loop : true,
        delay:100
        
    });
 
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="../../../portfolio(image)/IMG_20201206_223037_698-removebg.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, i'm</h2>
          <h1>amirhosein sheibaninia </h1>
          <h3>
            Front-end <span id="typewriter"></span>
          </h3>
          <a href="#portfolio">
            <img src="../assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
