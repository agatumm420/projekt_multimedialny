import React, { useState, useEffect } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import MyCodeBlock from "./mycodeblock";
const styles = {
  line1: {
    color: "#ffff",
  },
};
const Choice1 = (props) => {
  const [coder, setCoder] = useState(props.code);
  return (
    <div className="code-choice">
      <div className="border">
        <p className="code-title">Fix the time loop </p>

        <MyCodeBlock code={`while(){`} id="line1" styles={styles.color} />
      </div>
    </div>
  );
};
export default Choice1;
