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
  icon2: {
    width: 60,
    height: 60,
    color: "#29292A",
  },
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      hover: false,
    };
  }
  onClick = () => {
    this.setState({ redirect: true });
  };
  ShowsUp = () => {
    this.setState({ hover: true });
  };
  Leaves = () => {
    this.setState({ hover: false });
  };
  render() {
    if (this.state.redirect) {
      return <Navigate to={"level1/*"} />;
    }
    return (
      <div className="home">
        <div className="circle">
          <img src={`${process.env.PUBLIC_URL}/szary-doggo.svg`} id="dogger" />
          <p className="title"> Play </p>

          <a
            href="#"
            class="testing"
            data-text="BUY TICKETS"
            onClick={this.onClick}
            onMouseEnter={this.ShowsUp}
            onMouseLeave={this.Leaves}
            id="start-btn"
          >
            <FontAwesomeIcon
              icon={faPlay}
              style={this.state.hover ? styles.icon2 : styles.icon}
            />
          </a>
        </div>
      </div>
    );
  }
}
export default Home;
