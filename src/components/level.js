import React, { useState, useEffect } from "react";
import "../styles/level.css";
import { Navigate } from "react-router-dom";
const Level = (props) => {
  const [script, setScript] = useState([]);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setScript(props.text);
  }, []);
  const DisplayScript = (count) => {
    if (count <= script.length || script.length !== 0) {
      return script[count].txt;
    }
  };
  const onClick = () => {
    if (count == script.length) {
      setCount(0);
      setClicked(!clicked);
    } else {
      setCount((count) => count + 1);
      setClicked(!clicked);
    }
  };
  const TrackScript = () => {
    script.forEach((element, index) => {
      DisplayScript(index);
    });
  };
  const Redirect = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to={"/choice/*"} />;
  }
  return (
    <div className="level">
      <img
        src={`${process.env.PUBLIC_URL}` + `/${props.background}`}
        className="background"
      />
      <img
        src={`${process.env.PUBLIC_URL}` + `/${props.clickable}`}
        className="person"
      />
      <img
        src={`${process.env.PUBLIC_URL}` + `/${props.clickable}`}
        className="clickable"
        onClick={Redirect}
      />
      <div className="text-box" onClick={onClick}>
        <p className={clicked ? "text" : "text-active"}>
          {script.length == 0 ? null : script[count].txt}
        </p>
      </div>
    </div>
  );
};
export default Level;
