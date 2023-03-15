import React from "react";
import logo from "../assets/codomo.jpeg";

function Mission() {
  return (
    <div className="mission-container">
      <div className="mission-description">
        Codomo is on a mission to deliver the most{" "}
        <span className="mission-keyword">
          delightful education experiences
        </span>{" "}
        to liberate innovative minds
      </div>
      <div className="mission-image">
        <img src={String(logo)} alt="logo" />
      </div>
    </div>
  );
}

export default Mission;
