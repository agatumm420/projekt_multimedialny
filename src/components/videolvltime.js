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
const VidLevelTime = (props) => {
  const [script, setScript] = useState([]);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
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
  const ManageTime = () => {
    if (sec == 59) {
      setSec(0);
      setMin((min) => min + 1);
    } else {
      setSec((sec) => sec + 1);
    }
  };
  const SyncText = () => {
    let next = count + 1;
    ManageTime();
    if (
      script[next].sec == sec &&
      script[next].min == min &&
      script.length - 1 >= next
    ) {
      var element = document.querySelector('div[class="text-box"]');
      simulateMouseClick(element);
    }
    if (next > script.length - 1) {
      Redirect();
    } else {
      console.log("vibin");
    }
  };
  if (redirect) {
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
          listenInterval={1000}
          onListen={SyncText}
          style={{ width: "70%", visibility: "visible" }}
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
export default VidLevelTime;
