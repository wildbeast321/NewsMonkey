import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";

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
      progress: 0,
    };
  }
  apikey=process.env.REACT_APP_NEWS_API
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
  pageSize = 6;
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
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
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/Business"
            element={
              <News
                setProgress={this.setProgress} apikey={this.apikey}
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
                setProgress={this.setProgress} apikey={this.apikey}
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
                setProgress={this.setProgress} apikey={this.apikey}
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
                setProgress={this.setProgress} apikey={this.apikey}
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
                setProgress={this.setProgress} apikey={this.apikey}
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
                setProgress={this.setProgress} apikey={this.apikey}
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
                setProgress={this.setProgress} apikey={this.apikey}
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
