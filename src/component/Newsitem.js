import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, sources } =
      this.props;
    return (
      <div className={`card text-bg-dark`}>
        <div style={{display:"flex", position:"absolute", right:"0",justifyContent:'flex-end'}}>
          <span
            className=" badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: "1" }}
          >
            {sources}
          </span>
        </div>

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
          <h5 className="card-title"> {title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted-light">
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
