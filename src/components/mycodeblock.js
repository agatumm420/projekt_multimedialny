import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Interactive } from "react-interactive";
import CodeBlockWriter from "code-block-writer";
import ContentEditable from "react-contenteditable";
import Confetti from "react-confetti";

const CheckCondition = () => {
  let condition = document.querySelector("#condition");
  if (condition.innerText === "(hours<24){") {
    return true;
  } else {
    return false;
  }
};

class MyCodeBlock extends Component {
  constructor() {
    super();
    this.contentEditable = React.createRef();
    this.state = {
      html: `<div class='code-box'><b class='while'>while <i class='par' id='condition'>(){</i></b>
        <p class='function'> DoDay<i class='par'>();</i></p>
        <p class='par' id='hours'>hours++;</p>
        <p class='par'>}</p>
    </div>`,
      isSolved: false,
      redirect: false,
    };
  }
  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
    // if (condition) {
    CheckCondition() ? this.Win() : console.log("didn't");
    // }
  };
  Win = () => {
    this.setState({ isSolved: true });
  };

  render() {
    return (
      <div className="bigger-code-div">
        <div className="code-component">
          <div className="line-numbers">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
          <div className="code-part">
            <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false} // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName="div" // Use a custom HTML tag (uses a div by default
              spellCheck="false"
            />
          </div>
        </div>
        {this.state.isSolved ? (
          <Confetti
            width={1200}
            height={1200}
            numberOfPieces={200}
            colors={["#E63C50", "#3D3B71", "#ADB50F", "#4B4B48"]}
          />
        ) : (
          <div className="warning">
            {" "}
            <p>Time is running out</p>
          </div>
        )}
      </div>
    );
  }
}
export default MyCodeBlock;
