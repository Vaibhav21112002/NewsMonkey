import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Lauren Feiner",
      title:
        "Politico sells to German publishing giant Axel Springer in deal worth about $1 billion - CNBC",
      description:
        "The acquisition grows the publishing group's portfolio further, adding to its ownership of Insider and Morning Brew.",
      url: "https://www.cnbc.com/2021/08/26/axel-springer-to-buy-politico.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106933555-1629981618715-gettyimages-136480607-67866055.jpeg?v=1629981703",
      publishedAt: "2021-08-26T12:48:19Z",
      content:
        "German publisher Axel Springer announced Thursday that it plans to acquire digital media site Politico. The companies did not disclose a price for the deal, but a person familiar with the matter said… [+1402 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Alexandra Olson",
      title:
        "Half of US workers favor employee shot mandate: AP-NORC poll - Associated Press",
      description:
        "NEW YORK (AP) — Half of American workers are in favor of vaccine requirements at their workplaces, according to a new poll , at a time when such mandates gain traction  following the federal government's full approval of Pfizer's COVID-19 vaccine.",
      url: "https://apnews.com/article/lifestyle-business-health-travel-coronavirus-pandemic-1afb2682d6e08cdb54c5131f967f278a",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/14d1bd007f9a4d2399b8fa8106ab716e/3000.jpeg",
      publishedAt: "2021-08-26T12:08:14Z",
      content:
        "NEW YORK (AP) Half of American workers are in favor of vaccine requirements at their workplaces, according to a new poll, at a time when such mandates gain traction following the federal governments … [+5058 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Magdalena Petrova",
      title:
        "The International Space Station will soon be retired, but a replacement likely won't come from NASA - CNBC",
      description:
        "The International Space Station will likely be retired within the decade. NASA hopes to save money by having commercial companies build the next space outpost.",
      url: "https://www.cnbc.com/2021/08/26/heres-why-the-next-space-station-will-be-commercial.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106933045-1629902815272-51382291327_518a3dbfe2_o.jpg?v=1629902994",
      publishedAt: "2021-08-26T12:00:01Z",
      content:
        "The International Space Station got its start in 1998 when its first segments were launched, and it's now starting to show its age.\r\nSince 2000, the ISS has continuously housed a rotating group of as… [+1109 chars]",
    },
    {
      source: {
        id: null,
        name: "Www.https",
      },
      author: "New York Post",
      title:
        "Rolling Stones will go ahead with US tour after Charlie Watts' death - Fox News",
      description:
        "It’s only rock ‘n’ roll, so the Rolling Stones will play on without drummer Charlie Watts — and you’ll like it.",
      url: "https://www.https://nypost.com/2021/08/25/rolling-stones-will-tour-us-next-month-after-charlie-watts-death/?_ga=2.18114041.1386121084.1629637446-95759114.1560821173",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/Charlie-Watts-Getty.jpg",
      publishedAt: "2021-08-26T11:59:18Z",
      content:
        "Its only rock n roll, so the Rolling Stones will play on without drummer Charlie Watts and youll like it.\r\nThe rock band will continue their US tour in September, according to the Sun, and the band w… [+3735 chars]",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: "Bill Alpert",
      title:
        "Covid Infections Are Surging. When Will a Vaccine Be Ready for Children Under 12? - Barron's",
      description:
        "Emergency use authorization of the pediatric version of Pfizer's Covid vaccine could come after it submits data in September.",
      url: "https://www.barrons.com/articles/covid-vaccine-children-under-12-timeline-51629943320",
      urlToImage: "https://images.barrons.com/im-391034/social",
      publishedAt: "2021-08-26T11:55:00Z",
      content:
        "Urgency and caution are in high tension now as schooling resumes and infections by the Delta variant of the Covid-19 virus surge among unvaccinated Americans. That includes children.The Food and Drug… [+3721 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian sport",
      title:
        "MLS-Liga MX All-Star game halted after homophobic chanting - The Guardian",
      description:
        "MLS’s best players beat their Mexican counterparts in an entertaining game marred by chants that have marred the sport for years",
      url: "https://amp.theguardian.com/football/2021/aug/26/mls-liga-mx-all-star-game-halted-homophobic-chant-soccer",
      urlToImage: null,
      publishedAt: "2021-08-26T11:47:00Z",
      content:
        "MLS<ul><li>Officials call halt to game after chants heard in first-half</li><li>MLS team win on penalty shootout after lively game </li></ul>\r\nThu 26 Aug 2021 12.47 BST\r\nNew England goalkeeper Matt T… [+4316 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Zoe Zoe",
      title:
        "ESPN takes Rachel Nichols off NBA coverage and cancels her show - CBS News",
      description:
        "The decision follows backlash over leaked comments she made about her former colleague Maria Taylor.",
      url: "https://www.cbsnews.com/news/rachel-nichols-espn-nba-coverage-the-jump/",
      urlToImage:
        "https://cbsnews2.cbsistatic.com/hub/i/r/2021/07/06/0352871d-80b0-4f8d-85c9-d4333104c31e/thumbnail/1200x630/241e1a216055a5c5320855935f978bee/gettyimages-1091906438.jpg",
      publishedAt: "2021-08-26T11:41:11Z",
      content:
        'ESPN is pulling reporter Rachel Nichols from its NBA coverage and canceling her show "The Jump," the network confirmed Wednesday. The decision follows backlash over leaked comments she made about her… [+1625 chars]',
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Maeve Reston, CNN",
      title:
        "Recall candidates target California Gov. Gavin Newsom and his top GOP rival Larry Elder in debate - CNN",
      description:
        "As polls have tightened dramatically in recent weeks in the effort to recall Gavin Newsom, the Democratic California governor and his allies have been warning of doomsday scenarios if he is ousted on September 14 and replaced by a conservative Republican bent…",
      url: "https://www.cnn.com/2021/08/26/politics/california-recall-debate/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210823013853-01-gavin-newsom-0817-super-tease.jpg",
      publishedAt: "2021-08-26T11:27:00Z",
      content:
        "(CNN)As polls have tightened dramatically in recent weeks in the effort to recall Gavin Newsom, the Democratic California governor and his allies have been warning of doomsday scenarios if he is oust… [+8887 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Ashley Strickland, CNN",
      title: "This new class of hot ocean worlds could support life - CNN",
      description:
        "Astronomers have a new class of habitable exoplanets to look for: Hycean planets. These hot ocean worlds are more prevalent across the galaxy and a promising place to search for life outside of our solar system.",
      url: "https://www.cnn.com/2021/08/26/world/hycean-planets-habitable-scn/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210825154442-exoplanets-hycean-super-tease.jpg",
      publishedAt: "2021-08-26T10:16:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Jaclyn Diaz",
      title:
        "An Australian Sheep Farmer Uses His Animals To Offer A Tribute To His Late Aunt - NPR",
      description:
        "When Ben Jackson couldn't get to his beloved aunt's funeral, he wanted to offer a unique tribute — and he knew what to ewes.",
      url: "https://www.npr.org/2021/08/26/1031204615/this-australian-farmer-isnt-sheepish-about-showing-love-for-his-late-aunt",
      urlToImage:
        "https://media.npr.org/assets/img/2021/08/26/ap21238217420351_wide-4089d138cf7d61ca18556edce7010db601fbbd30.jpg?s=1400",
      publishedAt: "2021-08-26T10:09:29Z",
      content:
        "In this image taken from video, sheep form the shape of a heart in a field in Guyra, northern New South Wales, Australia, Thursday, Aug. 5, 2021.\r\nBen Jackson/AP\r\nAustralian sheep farmer Ben Jackson … [+1029 chars]",
    },
    {
      source: {
        id: null,
        name: "Chicago Tribune",
      },
      author: "Rex Huppke",
      title:
        "Column: COVID-19 vaccine mandates are coming. The willfully unvaccinated are about to see their world shrink. - Chicago Tribune",
      description:
        "COVID-19 vaccine mandates are coming. The willfully unvaccinated are about to see their world shrink.",
      url: "https://www.chicagotribune.com/columns/rex-huppke/ct-vaccine-mandate-covid-coronavirus-mask-florida-chicago-cases-surge-huppke-20210826-4ntjctr65rdylptpd6x3ikr22a-story.html",
      urlToImage:
        "https://www.chicagotribune.com/resizer/rFvVJuC3V4bvDsuO_U6Q8wgWYMI=/1200x0/center/bottom/cloudfront-us-east-1.images.arcpublishing.com/tronc/KZU2RKWD4JCZVE7HOWSXXM2EAY.jpg",
      publishedAt: "2021-08-26T10:00:00Z",
      content:
        "I have bad news for the willfully unvaccinated: COVID-19 vaccine mandates are coming, and your world is about to shrink to the size of a tweet.\r\nVaccine mandates, with medical and religious exemption… [+5430 chars]",
    },
    {
      source: {
        id: null,
        name: "The Weather Channel",
      },
      author: null,
      title:
        "Caribbean Disturbance Could Become a Tropical Storm or Hurricane Threat For US Gulf Coast | The Weather Channel - Articles from The Weather Channel | weather.com - The Weather Channel",
      description:
        "Here's what we know about the latest potential Caribbean tropical system we are tracking into early next week. - Articles from The Weather Channel | weather.com",
      url: "https://weather.com/safety/hurricane/news/2021-08-26-caribbean-disturbance-tropical-storm-hurricane-gulf-coast",
      urlToImage: "https://s.w-x.co/carib-system-thuam.jpeg",
      publishedAt: "2021-08-26T09:52:08Z",
      content:
        "At a Glance\r\n<ul><li>A Caribbean tropical disturbance is likely to become a tropical depression or storm.</li><li>This system could form as soon as Thursday.</li><li>Interests along the U.S. Gulf Coa… [+3105 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Brie Stimson",
      title:
        "Kamala Harris says evacuating Americans, Afghan allies is Biden admin's 'highest priority' - Fox News",
      description:
        'Vice President Kamala Harris said evacuating Americans and U.S. allies in Afghanistan is the administration’s "highest priority" while answering reporters’ questions in Vietnam on Thursday.',
      url: "https://www.foxnews.com/politics/kamala-harris-evacuations-americans-afghan-allies-biden-priority",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/AP21238141486605.jpg",
      publishedAt: "2021-08-26T09:32:50Z",
      content:
        'Vice President Kamala Harris said evacuating Americans and U.S. allies in Afghanistan is the administrations "highest priority" while answering reporters questions in Vietnam on Thursday. \r\nShe reite… [+2985 chars]',
    },
  ];

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

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11b1c586c53044d5b24d3a20d1696275&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNxtClick = async () => {
    // console.log("Next is clicked");
    this.setState({ loading: true, articles: [] });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=11b1c586c53044d5b24d3a20d1696275&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handlePrvClick = async () => {
    // console.log("Previous is clicked");
    this.setState({ loading: true, articles: [] });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=11b1c586c53044d5b24d3a20d1696275&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-5">
        <h2 className="my-2">Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles ? (
            this.state.articles.map((news, index) => {
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
                  />
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
        <div className="container d-flex justify-content-between">
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
        </div>
      </div>
    );
  }
}

export default News;
