import React, { useState, useEffect } from "react";
import "../styles/level.css";
import { Navigate } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
const mouseClickEvents = ["mousedown", "click", "mouseup"];
function simulateMouseClick(element) {
  mouseClickEvents.forEach((mouseEventType) =>
    element.dispatchEvent(
      new MouseEvent(mouseEventType, {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      })
    )
  );
}
const styles = {
  icon: {
    width: 50,
    height: 50,
    color: "#fff",
  },
};
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
      Redirect();
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
  const SyncText = () => {
    var element = document.querySelector('div[class="text-box"]');
    simulateMouseClick(element);
  };
  if (redirect) {
    return <Navigate to={props.next} />;
  }
  return (
    <div className="level">
      <h1 className="level-title">{props.title ? props.title : null}</h1>
      {props.background ? (
        <img
          src={`${process.env.PUBLIC_URL}` + `/${props.background}`}
          className="background"
        />
      ) : null}

      <ReactAudioPlayer
        src={`${process.env.PUBLIC_URL}` + `/${props.audio}`}
        autoPlay={true}
        listenInterval={3000}
        onListen={SyncText}
        style={{ width: "100%", visibility: "visible" }}
        onEnded={Redirect}
      />
      <div className="text-box" onClick={onClick}>
        <div className={clicked ? "text" : "text-active"}>
          {script.length == 0 ? null : script[count].txt}
        </div>
      </div>
      <div className="help-btn">
        <FontAwesomeIcon icon={faQuestion} style={styles.icon} />
      </div>
    </div>
  );
};
export default Level;
