import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, image, url, author, date,source } = this.props;
    return (
      <div>
        <div className="card my-2" style={{ minHeight: "500px" }}>
          <span style = {{zIndex:"999", left:"90%"}} class="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img src={image} className="card-img-top" alt="..." />
          <div
            className="card-body h-full"
            style={{ position: "relative", bottom: "0px" }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {date ? date.slice(0, 10) : ""}
              </small>
            </p>
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
