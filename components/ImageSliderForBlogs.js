import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ImageSliderForBlogs = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Fragment>
      <Carousel responsive={responsive}>
        <div>
          <div className="container media-main">
            <div className="col-md-4">
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img src="../static/images/blogs/globalWarming.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a href="/about-us/blogs/global-warming" target="_blank">
                        How Water Harvesting can reduce Global Warming ?
                        <br />
                      </a>
                    </h3>
                    <p
                      style={{
                        textAlign: "left",
                        color: "#4c3f43",
                        fontSize: "13px",
                        fontWeight: "500",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Climate is associated with sun, oceans, wind, rain, snow,
                      forests, deserts, savannas, and human activity. Increase
                      in temperature of the earth’s atmosphere because an
                      increased amount of the heat striking the earth from the
                      sun that is being trapped in the earth’s atmosphere....
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/global-warming"
                            target="_blank"
                          >
                            Read more
                          </a>
                          {"  "}
                          <i class="fa fa-angle-right" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img
                    src="../static/images/blogs/groundWaterRecharge.jpg"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a href="/about-us/blogs/ground-water-recharge" target="_blank">
                        Groundwater Recharge
                        <br />
                      </a>
                    </h3>
                    <p
                      style={{
                        textAlign: "left",
                        color: "#4c3f43",
                        fontSize: "13px",
                        fontWeight: "500",
                        letterSpacing: "0.5px",
                      }}
                    >
                      In recent years, there is a raised concern about meeting
                      our own needs without compromising the ability of future
                      generations to meet their own needs. There comes a demand
                      for water consumption to fulfil increasing residential and
                      irrigation demands. Nevertheless, with the help rainwater
                      harvesting techniques....
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/ground-water-recharge"
                            target="_blank"
                          >
                            Read more
                          </a>
                          {"  "}
                          <i class="fa fa-angle-right" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img
                    src="../../static/images/blogs/Benefits-of-rainwater-harvesting.jpg"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a href="/about-us/blogs/rain-water-harvesting" target="_blank">
                        The Benefits of Rain Water Harvesting
                        <br />
                      </a>
                    </h3>
                    <p
                      style={{
                        textAlign: "left",
                        color: "#4c3f43",
                        fontSize: "13px",
                        fontWeight: "500",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Rainwater harvesting is the process that collects and
                      stores rainwater for reuse. It is a sustainable way to use
                      water, as it reduces the demand for municipal water
                      supplies, and it can also help to reduce flooding.
                      Rainwater harvesting is a water conservation....
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/rain-water-harvesting"
                            target="_blank"
                          >
                            Read more
                          </a>
                          {"  "}
                          <i class="fa fa-angle-right" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4" style={{ marginTop: "30px" }}>
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img
                    src="../static/images/blogs/hydrologicalCycleImage.jpg"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a href="/about-us/blogs/hydrological-cycle" target="_blank">
                        The importance of hydrological cycle on earth
                        <br />
                      </a>
                    </h3>
                    <p
                      style={{
                        textAlign: "left",
                        color: "#4c3f43",
                        fontSize: "13px",
                        fontWeight: "500",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Water is one of the world’s most valuable resources that
                      has to be retained for an inclusive future. Water is
                      absolutely important to life on earth. Water contributes
                      to the major part of the earth and earth’s climatic
                      balance....
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a href="/about-us/blogs/hydrological-cycle" target="_blank">
                            Read more
                          </a>
                          {"  "}
                          <i class="fa fa-angle-right" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      ;
    </Fragment>
  );
};

export default ImageSliderForBlogs;
