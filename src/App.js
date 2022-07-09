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
      Country: "in",
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
  handlecountryin = () => {
    this.setState({
      Country: "in",
    });
  };
  handlecountryus = () => {
    this.setState({
      Country: "us",
    });
  };
  handlecountryjp = () => {
    this.setState({
      Country: "jp",
    });
  };
pageSize=6
  render() {
     
    return (

      <Router>
        <Navbar
          modeName={this.state.modeName}
          mode={this.state.mode}
          textcolor={this.state.textcolor}
          handleMode={this.handleMode}
          handlecountryjp={this.handlecountryjp}
          handlecountryin={this.handlecountryin}
          handlecountryus={this.handlecountryus}
        />
        <Routes>
          <Route
            exact
            path="/Business"
            element={
              <News
                key={`Business/${this.state.Country}`}
                headercolor={this.state.headercolor}
                btnpncolor={this.state.btnpncolor}
                pageSize={this.pageSize}
                Country={this.state.Country}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                key={`Entertainment/${this.state.Country}`}
                headercolor={this.state.headercolor}
                btnpncolor={this.state.btnpncolor}
                pageSize={this.pageSize}
                Country={this.state.Country}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <News
                key={`${this.state.Country}`}
                headercolor={this.state.headercolor}
                btnpncolor={this.state.btnpncolor}
                pageSize={this.pageSize}
                Country={this.state.Country}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                key={`Health/${this.state.Country}`}
                headercolor={this.state.headercolor}
                btnpncolor={this.state.btnpncolor}
                pageSize={this.pageSize}
                Country={this.state.Country}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                key={`Science/${this.state.Country}`}
                headercolor={this.state.headercolor}
                btnpncolor={this.state.btnpncolor}
                pageSize={this.pageSize}
                Country={this.state.Country}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                key={`Sports/${this.state.Country}`}
                headercolor={this.state.headercolor}
                btnpncolor={this.state.btnpncolor}
                pageSize={this.pageSize}
                Country={this.state.Country}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                key={`Technology/${this.state.Country}`}
                headercolor={this.state.headercolor}
                btnpncolor={this.state.btnpncolor}
                pageSize={this.pageSize}
                Country={this.state.Country}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
