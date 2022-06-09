import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "../styles/level.css";
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
const Choice = (props) => {
  const [choice1, setChoice1] = useState(false);
  const [choice2, setChoice2] = useState(false);
  const [script, setScript] = useState([]);
  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const Choice1 = () => {
    setChoice1(true);
  };
  const Choice2 = () => {
    setChoice2(true);
  };
  useEffect(() => {
    setScript(props.text);
  }, []);
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
    } else {
      console.log("vibin");
    }
  };
  if (choice1) {
    return <Navigate to={"/choice1/*"} />;
  }
  if (choice2) {
    return <Navigate to={"/choice2/*"} />;
  }
  return (
    <div className="final-box">
      <img
        className="final-vid"
        src={`${process.env.PUBLIC_URL}` + `/kod.GIF`}
      />

      <div className="big-choices-box">
        <div className="choices">
          <div className="choice" onClick={Choice1}>
            <p className="choice-text">Break the loop</p>
            <img
              src={`${process.env.PUBLIC_URL}/kable.gif`}
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

        <div className="text-box" id="final-text">
          <div className="text">
            {" "}
            @!3%!!%^^78## ~ Podejmij wybór~~~ 5578$$#2
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choice;
