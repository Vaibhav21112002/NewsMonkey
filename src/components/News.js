import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      // articles: this.articles,
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false,
    };
  }

  udpateNews = async (pageNo) => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=11b1c586c53044d5b24d3a20d1696275&page=1&pageSize=${
      this.props.pageSize + pageNo
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + pageNo,
    });
  };

  async componentDidMount() {
    this.udpateNews(0);
    document.title = ` ${this.props.category.toUpperCase(0)} | News Monkey`;
  }
  handleNxtClick = async () => {
    this.udpateNews(1);
  };
  handlePrvClick = async () => {
    this.udpateNews(-1);
  };
  fetchMoreData = async() => {
    this.setState({page:this.state.page+1})
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=11b1c586c53044d5b24d3a20d1696275&page=1&pageSize=${
      this.props.pageSize
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page,
    });
  };
  render() {
    return (
      <div className="container my-5">
        <h2 className="my-2">Top Headlines</h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {this.state.articles.map((news, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={news.title ? news.title : ""}
                    description={
                      news.description
                        ? news.description.slice(0, 80) + "..."
                        : ""
                    }
                    image={
                      news.urlToImage
                        ? news.urlToImage
                        : "https://source.unsplash.com/user/erondu/1600x900"
                    }
                    url={news.url ? news.url : "/"}
                    author={news.author}
                    date={news.publishedAt}
                    source={news.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page === 1}
            className="btn btn-primary"
            onClick={this.handlePrvClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              Math.ceil(this.state.totalResults / this.props.pageSize) ===
              this.state.page
            }
            className="btn btn-primary"
            onClick={this.handleNxtClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
