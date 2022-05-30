import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
const Choice = (props) => {
  const [choice1, setChoice1] = useState(false);
  const [choice2, setChoice2] = useState(false);
  const Choice1 = () => {
    setChoice1(true);
  };
  const Choice2 = () => {
    setChoice2(true);
  };
  if (choice1) {
    return <Navigate to={"/choice1/*"} />;
  }
  if (choice2) {
    return <Navigate to={"/choice2/*"} />;
  }
  return (
    <div className="choices">
      <div className="choice" onClick={Choice1}>
        <p className="choice-text">Break the loop</p>
        <img
          src="https://us.123rf.com/450wm/artmiusv/artmiusv1905/artmiusv190500642/123908018-hand-drawn-tangle-scrawl-sketch-or-black-line-spherical-abstract-scribble-shape-vector-tangled-chaot.jpg?ver=6"
          className="tangled"
        />
      </div>
      <div className="choice" onClick={Choice2}>
        <p className="choice-text">Save doggo</p>
        <img
          src={`${process.env.PUBLIC_URL}/szary-doggo.svg`}
          className="doggo-choice"
        />
      </div>
    </div>
  );
};
export default Choice;
