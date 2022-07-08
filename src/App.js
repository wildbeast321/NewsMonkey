import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Navbar
          modeName={this.state.modeName}
          mode={this.state.mode}
          textcolor={this.state.textcolor}
          handleMode={this.handleMode} 
        />
        <Routes>
          <Route exact path="/Business" element={<News key="business" headercolor={this.state.headercolor} btnpncolor={this.state.btnpncolor} pageSize={9} Country="in" category="business"/>}/>
          <Route exact path="/Entertainment" element={<News key="entertainment" headercolor={this.state.headercolor} btnpncolor={this.state.btnpncolor} pageSize={9} Country="in" category="entertainment"/>}/>
          <Route exact path="/" element={<News key="general" headercolor={this.state.headercolor} btnpncolor={this.state.btnpncolor} pageSize={9} Country="in" category="general"/>}/>
          <Route exact path="/Health" element={<News key="health" headercolor={this.state.headercolor} btnpncolor={this.state.btnpncolor} pageSize={9} Country="in" category="health"/>}/>
          <Route exact path="/Science" element={<News key="science" headercolor={this.state.headercolor} btnpncolor={this.state.btnpncolor} pageSize={9} Country="in" category="science"/>}/>
          <Route exact path="/Sports" element={<News key="sports" headercolor={this.state.headercolor} btnpncolor={this.state.btnpncolor} pageSize={9} Country="in" category="sports"/>}/>
          <Route exact path="/Technology" element={<News key="technology" headercolor={this.state.headercolor} btnpncolor={this.state.btnpncolor} pageSize={9} Country="in" category="technology"/>}/>
        </Routes>
      </Router>
    );
  }
}
