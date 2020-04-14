import React, { Component } from "react";
import "./scrollDown.css";

class ScrollDown extends Component {
  render() {
    const { href } = this.props;
    return (
      <a href={href} >
        <div className="containerp mt-20">
          <div className="scroll-btn dark">
            <i></i>
            <p>Role o scroll ou clique aqui</p>
          </div>
        </div>
      </a>
    );
  }
}

export default ScrollDown;
