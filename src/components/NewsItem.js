import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, image, url } = this.props;
    return (
      <div>
        <div
          className="card my-2"
          style={{ minHeight: "500px" }}
        >
          <img src={image} className="card-img-top" alt="..." />
          <div
            className="card-body h-full"
            style={{ position: "relative", bottom: "0px" }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={url}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
