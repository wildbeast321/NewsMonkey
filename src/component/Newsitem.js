import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsurl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            !imgurl
              ? "https://cdn-icons-png.flaticon.com/512/21/21601.png"
              : imgurl
          }
          className="card-img-top"
          alt="..."
          style={{ height: "11rem" }}
        />
        <div className="card-body">
          <h5 className="card-title"> {title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
export default Newsitem;
