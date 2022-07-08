import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, sources } =
      this.props;
    return (
      <div className="card">
        <img
          src={
            !imgurl
              ? "https://cdn-icons-png.flaticon.com/512/21/21601.png"
              : imgurl
          }
          className="card-img-top"
          alt="..."
          style={{ height: "16rem" }}
        />
        <div className="card-body">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {sources}
          </span>
          <h5 className="card-title"> {title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsurl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-danger"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
export default Newsitem;
