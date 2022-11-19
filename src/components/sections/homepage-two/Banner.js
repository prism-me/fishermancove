import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ReactWOW from "react-wow";
import { Hidden } from "@material-ui/core";
import { constants } from "../../../utils/constants";
import CountdownTimer from "../counter/countdownTimer";
import DateCountdown from "react-date-countdown-timer";

class Banner extends Component {
  componentDidMount() {
    console.log("this.props.location.pathname", this.props);
  }
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      fade: true,
      arrows: false,
    };

    let currentRoute = window.location.pathname;
    let homePageURI = currentRoute.split("/")[2];
    let styles = "";
    if (homePageURI === undefined && this.props?.isMobile) {
      styles = {
        backgroundImage: `url(https://fisherman.b-cdn.net/black-friday/home-page-banner-mobile.jpg)`,
        backgroundPosition: "left",
        backgroundSize: "cover",
      };
    } else if (homePageURI === "black-friday-sale" && this.props?.isMobile) {
      styles = {
        backgroundImage: `url(https://fisherman.b-cdn.net/black-friday/black-offer-mobile.jpg)`,
        backgroundPosition: "left",
        backgroundSize: "cover",
      };
    } else {
      styles = {
        backgroundImage: `url(${this.props?.image})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
      };
    }
    // let homePageClass;

    // if (homePageURI === undefined && this.props.isMobile) {
    //   homePageClass = true;
    // }
    // console.log("currentRoute", homePageClass);

    const bannerPosts = [
      {
        tag: "",
        taganimation: ".6s",
        title:
          "Don't miss the early bird discount for Black Friday. Upto 50% Discount",
        subtitle:
          constants?.site_content?.home_page?.banner?.subtitle[
            this.props?.activeLang
          ],
        titleanimation: ".9s",
        btn1: `${
          constants?.site_content?.home_page?.banner?.btn4[
            this.props?.activeLang
          ]
        }`,
        btn1animation: "1.1s",
        btn1url: "/black-friday-sale",
        btn2: `${
          constants?.site_content?.home_page?.banner?.btn5[
            this.props?.activeLang
          ]
        }`,
        btn2animation: "1.3s",
        btn2url: "/rooms-suites-seychelles",
        btn3: `${
          constants?.site_content?.home_page?.banner?.btn3[
            this.props?.activeLang
          ]
        }`,
        btn3animation: "1.3s",
        btn3url: "/",
      },
    ];

    const THREE_DAYS_IN_MS = 6 * 24 * 60 * 60 * 1000;
    //   const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    //   const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;
    console.log("this.props", this.props);
    return (
      <Slider
        className="banner-area banner-style-two"
        id="bannerSlider"
        {...settings}
      >
        {bannerPosts.map((item, i) => (
          <div
            key={i}
            className={`single-banner d-flex align-items-center justify-content-center ${
              this.props.isMain ? "" : "sub-banner"
            }`}
          >
            <div className="container">
              <div
                className={
                  homePageURI
                    ? `row justify-content-left`
                    : `row justify-content-left home-page-wrapper-row`
                }
              >
                <div className="col-10 col-lg-6">
                  <div className="banner-content text-left">
                    <ReactWOW
                      animation="fadeInDown"
                      data-delay={item.taganimation}
                    >
                      <span className="promo-tag">{item.tag}</span>
                    </ReactWOW>
                    <ReactWOW
                      animation="fadeInLeft"
                      data-delay={item.titleanimation}
                    >
                      <h1 className={homePageURI ? `title` : `title`}>
                        {this.props.title}
                        <br />
                        {this.props?.subtitle}
                      </h1>
                    </ReactWOW>
                    <ul className={this.props.isMain ? "" : "d-none"}>
                      <ReactWOW
                        animation="fadeInUp"
                        data-delay={item.btn1animation}
                      >
                        <li>
                          <Link
                            className="main-btn btn-border"
                            to={`/${this.props?.activeLang}${item.btn1url}`}
                          >
                            {item.btn1}
                          </Link>
                        </li>
                      </ReactWOW>

                      <Hidden smDown>
                        <ReactWOW
                          animation="fadeInUp"
                          data-delay={item.btn2animation}
                        >
                          <li>
                            <Link
                              className="main-btn btn-border"
                              to={`/${this.props?.activeLang}${item.btn2url}`}
                            >
                              {item.btn2}
                            </Link>
                          </li>
                        </ReactWOW>
                      </Hidden>
                      <Hidden mdUp>
                        <ReactWOW
                          animation="fadeInUp"
                          data-delay={item.btn3animation}
                        >
                          <li>
                            <Link
                              className="main-btn btn-border"
                              to={`/${this.props?.activeLang}${item.btn3url}`}
                              style={{
                                borderColor: "#be8a7d",
                                background: "#be8a7d",
                              }}
                              onClick={(e) => {
                                window.gtag_report_conversion(
                                  `${
                                    this.props?.activeLang === "en"
                                      ? "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB"
                                      : this.props?.activeLang === "fr"
                                      ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=fr-FR"
                                      : this.props?.activeLang === "de"
                                      ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=de-DE"
                                      : this.props?.activeLang === "ru"
                                      ? "https://be.synxis.com/?Hotel=31842&Chain=27304&locale=ru-RU"
                                      : "https://be.synxis.com/?&chain=27304&hotel=31842&locale=en-GB"
                                  }`
                                );
                              }}
                            >
                              {item.btn3}
                            </Link>
                          </li>
                        </ReactWOW>
                      </Hidden>
                    </ul>
                    {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
                    <DateCountdown
                      dateTo="November 25, 2022 00:00:00 GMT+03:00"
                      mostSignificantFigure="day"
                      numberOfFigures="6"
                      callback={() => alert("Hello")}
                    />
                  </div>
                </div>
                <div
                  className={`d-none ${this.props.isMain ? "d-md-flex" : ""}`}
                  style={{
                    position: "absolute",
                    width: "50%",
                    display: "flex",
                    marginTop: "2rem",
                    alignItems: "baseline",
                    justifyContent: "flex-end",
                    right: "60px",
                    bottom: "68px",
                  }}
                >
                  <div
                    className="rounded-circle mx-2"
                    style={{
                      width: "100px",
                      height: "100px",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                    }}
                  >
                    <img
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={require("./../../../assets/img/banner/tc-winner.gif")}
                    />
                  </div>
                  <div
                    className="rounded-circle mx-2"
                    style={{
                      width: "100px",
                      height: "100px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      alt=""
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                      src={require("./../../../assets/img/banner/luxury.png")}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* banner bg */}

            <div
              className={
                this.props?.isMobile
                  ? `banner-bg ${currentRoute ? `` : `home-mobile-banner`}`
                  : `banner-bg`
              }
              style={styles}
            />
            <div className="banner-overly" />
          </div>
        ))}
      </Slider>
    );
  }
}

export default Banner;
