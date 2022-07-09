import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1).toLowerCase()
    } - NewsMonkey`;
  }

  async componentDidMount() {
    this.props.setProgress(30);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=599835b49bbf487993543a0f15508904&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });

    console.log(parsedData);
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.Country
    }&category=${
      this.props.category
    }&apiKey=599835b49bbf487993543a0f15508904&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    console.log(parsedData);
  };
  render() {
    let { headercolor } = this.props;
    return (
      <>
        <h1 className={`mx-sm-5 ms-3 my-4 text-${headercolor} text-center`}>
          NewsMonkey - Top Headlines From{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1).toLowerCase()}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-4">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <Newsitem
                      author={element.author}
                      date={element.publishedAt}
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : ""
                      }
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                      sources={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
