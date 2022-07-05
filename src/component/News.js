import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=0aa93d9ce6db46e8a59af9e7b785e27d&page=1&pageSize=18";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    console.log(parsedData);
  }
  handleprevclick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0aa93d9ce6db46e8a59af9e7b785e27d&page=${
      this.state.page - 1
    }&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handlenextclick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0aa93d9ce6db46e8a59af9e7b785e27d&page=${
      this.state.page + 1
    }&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <>
        <h1 className="mx-sm-5 ms-3 my-4">NewsMonkey - Top Headlines</h1>
        <div className="container my-2">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-between my-3 mx-auto">
              <button
                type="button"
                className="btn btn-primary fw-bold fs-6"
                onClick={this.handleprevclick}
                disabled={this.state.page <= 1}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="btn btn-primary fw-bold fs-6"
                onClick={this.handlenextclick}
                disabled={
                  this.state.page >= ~~(this.state.totalResults / 18) + 1
                }
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
