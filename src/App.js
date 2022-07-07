import "./App.css";

import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modeName: "Light Mode",
      mode: "light",
      textcolor: "dark",
      headercolor: "dark",
      btnpncolor: "primary",
     
    };
  }
  handleMode = () => {
    if (this.state.modeName === "Light Mode") {
      document.body.style.backgroundColor = "rgb(50,50,50)";
      this.setState({
        modeName: "Dark Mode",
        mode: "dark",
        textcolor: "light",
        headercolor: "light",
        btnpncolor: "danger",
      });
    } else if (this.state.modeName === "Dark Mode") {
      document.body.style.backgroundColor = "rgb(255,255,255)";
      this.setState({
        modeName: "Light Mode",
        mode: "light",
        textcolor: "dark",
        headercolor: "dark",
        btnpncolor: "primary",
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar
          modeName={this.state.modeName}
          mode={this.state.mode}
          textcolor={this.state.textcolor}
          handleMode={this.handleMode}
        />

        <News
          headercolor={this.state.headercolor}
          btnpncolor={this.state.btnpncolor}
          pageSize={9}
          Country="in"
          category="general"
        />
      </div>
    );
  }
}
