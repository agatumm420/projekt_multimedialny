import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/home";
import Level from "./components/level";
import { level1, code } from "./scripts";
import Choice from "./components/finalchoice";
import Choice1 from "./components/choice1";
import Choice2 from "./components/choice2";
import React from "react";
const Routez = () => {
  return (
    <BrowserRouter className="site">
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route
          path="level1/*"
          element={
            <Level
              background="background1.png"
              clickable="szary-doggo.svg"
              person="szary-doggo.svg"
              text={level1}
            />
          }
        />
        <Route path="choice/*" element={<Choice />} />
        <Route
          path="choice1/*"
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
        <Route path="choice2/*" element={<Choice2 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routez;
