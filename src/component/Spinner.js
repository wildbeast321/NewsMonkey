import React, { Component } from "react";
import loading from "./loading.gif";

export default class spinner extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <img className="my-4" src={loading} alt="loading" />
      </div>
    );
  }
}
