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
const Level4 = (props) => {
  const [script, setScript] = useState([]);
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [displayHelp, setHelp] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [clickable, setClickable] = useState(false);
  useEffect(() => {
    setScript(props.text);
    setRedirect(false);
    setMounted(true);
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
      if (sec == props.startSec && min == props.minute) {
        setClickable(true);
      }
      if (sec == props.endSec && min == props.minute) {
        setClickable(false);
      }
      var element = document.querySelector('div[class="text-box"]');
      simulateMouseClick(element);
    } else {
      if (sec == props.startSec && min == props.minute) {
        setClickable(true);
      }
      if (sec == props.endSec && min == props.minute) {
        setClickable(false);
      }
      console.log("vibin");
    }
  };
  const CheckForRightSec = () => {
    ManageTime();
    if (sec == props.startSec && min == props.minute) {
      setClickable(true);
    }
    if (sec == props.endSec && min == props.minute) {
      setClickable(false);
    }
  };
  const SecondManager = () => {
    if (props.isScript == true) {
      SyncText();
    } else {
      CheckForRightSec();
    }
  };
  const Found = () => {
    setRedirect(true);
  };
  const Reload = () => {
    window.location.reload(true);
  };
  if (redirect == true && mounted == true) {
    // setRedirect(false);
    return <Navigate to={`/${props.next}`} replace />;
  }
  return (
    <div className="level" id="lvl5">
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
          onListen={SecondManager}
          style={{ width: "70%", visibility: "visible" }}
          onEnded={Reload}
        />
        {clickable ? (
          <img
            id={props.id}
            src={`${process.env.PUBLIC_URL}` + `${props.clickable}`}
            onClick={Found}
          />
        ) : null}

        <div className="second-row">
          <div className="text-box" onClick={onClick}>
            <div className={clicked ? "text" : "text-active"}>
              {props.isScript == true && script.length != 0
                ? script[count].txt
                : "..."}
            </div>
          </div>
          <div
            className="help-btn"
            onClick={() => {
              setHelp(!displayHelp);
            }}
          >
            <FontAwesomeIcon icon={faQuestion} style={styles.icon} />
          </div>
          {displayHelp ? (
            <div className="help-box">
              Something seems different...Try to find what!
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Level4;
