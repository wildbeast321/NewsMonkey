import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  document.title = `${
    props.category.charAt(0).toUpperCase() +
    props.category.slice(1).toLowerCase()
  } - NewsMonkey`;
   const fetchapi = async () => {
      props.setProgress(30);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      setloading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setarticles(parsedData.articles);
      setloading(false);
      settotalResults(parsedData.totalResults);
      console.log(parsedData);
      props.setProgress(100);
    };
  
  useEffect(() => {
   
    fetchapi();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.Country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    console.log(parsedData);
  };

  let { headercolor } = props;
  return (
    <>
      <h1
        className={`mx-2 text-${headercolor} text-center`}
        style={{ marginTop: "80px", marginBottom: "10px" }}
      >
        NewsMonkey - Top Headlines From
        {props.category.charAt(0).toUpperCase() +
          props.category.slice(1).toLowerCase()}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-4">
          <div className="row">
            {articles.map((element) => {
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
};

export default News;
