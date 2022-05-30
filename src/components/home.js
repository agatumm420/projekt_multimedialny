import React, { useState, useEffect, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
const styles = {
  icon: {
    width: 60,
    height: 60,
    color: "#fff",
  },
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }
  onClick = () => {
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) {
      return <Navigate to={"level1/*"} />;
    }
    return (
      <div className="home">
        <div className="circle">
          <div className="doggo"></div>
          <p className="title"> Play </p>
          <button className="start-btn" onClick={this.onClick}>
            <FontAwesomeIcon icon={faPlay} style={styles.icon} />
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
