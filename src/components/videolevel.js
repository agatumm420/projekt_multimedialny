import React, { useState, useEffect } from "react";
import "../styles/level.css";
import { Navigate } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player/lazy";

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
const VidLevel = (props) => {
  const [script, setScript] = useState([]);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    setScript(props.text);
    setRedirect(false);
  }, []);
  const DisplayScript = (count) => {
    if (count <= script.length || script.length !== 0) {
      return script[count].txt;
    }
  };
  const onClick = () => {
    if (count == script.length - 1) {
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
  const SyncText = () => {
    if (props.timestamped == false) {
      var element = document.querySelector('div[class="text-box"]');
      simulateMouseClick(element);
    } else {
    }
  };
  if (redirect) {
    // setRedirect(false);
    return <Navigate to={`/${props.next}`} />;
  }
  return (
    <div className="level">
      <div className="background-2">
        <video className="video-box" autoPlay muted>
          <source
            src={`${process.env.PUBLIC_URL}` + `/${props.video}`}
            type="video/mp4"
          />
        </video>
        <ReactAudioPlayer
          src={`${process.env.PUBLIC_URL}` + `/${props.audio}`}
          autoPlay={true}
          controls
          listenInterval={3000}
          onListen={SyncText}
          style={{ width: "70%", visibility: "hidden", position: "absolute" }}
          onEnded={Redirect}
        />
        <div className="second-row">
          <div className="text-box" onClick={onClick}>
            <div className={clicked ? "text" : "text-active"}>
              {script.length == 0 ? null : script[count].txt}
            </div>
          </div>
          <div className="help-btn">
            <FontAwesomeIcon icon={faQuestion} style={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VidLevel;
