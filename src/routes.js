import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/home";
import Level from "./components/level";
import { level1, code } from "./scripts";
import Choice from "./components/finalchoice";
import Choice1 from "./components/choice1";
import Choice2 from "./components/choice2";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import wstep from "./scripts/wstep.js";
import VidLevel from "./components/videolevel";
import VidLevelTime from "./components/videolvltime";
import dzien1 from "./scripts/dzien1";
import LevelClick from "./components/lvlclick";
import dzien3 from "./scripts/dzien3";
import Level3 from "./components/level3";
import Level4 from "./components/level4";
import Level5 from "./components/level5";
import Bad from "./components/badending";
import good from "./scripts/good";
import bad from "./scripts/bad";
const Routez = () => {
  return (
    <Router basename="/" className="site">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/level1"
          element={
            <VidLevel
              text={wstep}
              next="level1c1"
              audio="Wstęp.mp3"
              video="Filmik0.mp4"
              timestamped={false}
            />
          }
        />
        <Route
          exact
          path="/level1c1"
          element={
            <VidLevelTime
              next="level2"
              audio="Filmik1.mp3"
              video="Filmik1.mp4"
              text={dzien1}
            />
          }
        />
        <Route
          exact
          path="/level2"
          element={
            <LevelClick
              next="level3"
              audio="Filmik2.mp3"
              video="Filmik2.mp4"
              isScript={false}
              clickable="ściana.png"
              id="clickable"
              startSec={9}
              endSec={15}
              minute={0}
            />
          }
        />
        <Route
          exact
          path="/level3"
          element={
            <Level3
              next="level4"
              audio="Filmik3.mp3"
              video="Filmik3.mp4"
              isScript={true}
              text={dzien3}
              clickable="3piętro.png"
              id="clickable1"
              startSec={35}
              endSec={43}
              minute={1}
            />
          }
        />
        <Route
          exact
          path="/level4"
          element={
            <Level4
              next="level5"
              audio="Filmik4.mp3"
              video="Filmik4.mp4"
              isScript={true}
              text={dzien3}
              clickable="logo_up.png"
              id="clickable2"
              startSec={15}
              endSec={31}
              minute={1}
            />
          }
        />
        <Route
          exact
          path="/level5"
          element={
            <Level5
              next="choice"
              audio="Filmik5.mp3"
              video="Filmik5.mp4"
              isScript={true}
              text={dzien3}
              clickable="dziura.png"
              id="clickable3"
              startSec={28}
              endSec={37}
              minute={1}
            />
          }
        />
        <Route
          exact
          path="/bad"
          element={
            <Bad
              next="choice"
              audio="badending.mp3"
              video="badending.mp4"
              isScript={true}
              text={bad}
            />
          }
        />
        <Route
          exact
          path="/choice"
          video="Filmik6.mp4"
          audio="Filmik6.mp3"
          element={<Choice />}
        />
        <Route
          exact
          path="/choice1"
          element={
            <Choice1
              code={code}
              language="javascript"
              showLineNumbers={true}
              startingLineNumber={1}
              highlight="1,6,7"
            />
          }
        />
        <Route
          exact
          path="/choice2"
          element={<Choice2 />}
          isScript={true}
          text={good}
        />
      </Routes>
    </Router>
  );
};
export default Routez;
