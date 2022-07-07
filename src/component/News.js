import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=650bc90539bb426d9a3f774447c6e6f8&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.setState({
      loading: false,
    });
    console.log(parsedData);
  }
  handleprevclick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.Country
    }&category=${
      this.props.category
    }&apiKey=650bc90539bb426d9a3f774447c6e6f8&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
    this.setState({
      loading: false,
    });
  };
  handlenextclick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.Country
    }&category=${
      this.props.category
    }&apiKey=650bc90539bb426d9a3f774447c6e6f8&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
    this.setState({
      loading: false,
    });
  };
  render() {
    let { headercolor, btnpncolor } = this.props;
    return (
      <>
        <h1 className={`mx-sm-5 ms-3 my-4 text-${headercolor} text-center`}>
          NewsMonkey - Top Headlines
        </h1>

        <div className="container my-4 ">
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
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
                className={`btn btn-${btnpncolor} fw-bold fs-6`}
                onClick={this.handleprevclick}
                disabled={this.state.page <= 1}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className={`btn btn-${btnpncolor} fw-bold fs-6`}
                onClick={this.handlenextclick}
                disabled={
                  this.state.page >=
                  ~~(this.state.totalResults / this.props.pageSize) + 1
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
