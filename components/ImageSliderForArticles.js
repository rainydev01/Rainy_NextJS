import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ImageSliderMulti = () => {
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
                  <img src="../static/images/media/articles/Rainwater_collection.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.deccanherald.com/state/mangaluru/rainwater-collection-unit-helps-farmers-irrigate-farmland-846203.html"
                        target="_blank"
                      >
                        Rainwater collection unit helps farmers during covid
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
                      The rainwater collection unit—Jaladhare—by 'Rainy'
                      Research and Manufacturing at Hadihalli in Chikmagalur has
                      become a ray of hope for farmers during these tough times.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.deccanherald.com/state/mangaluru/rainwater-collection-unit-helps-farmers-irrigate-farmland-846203.html"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.deccanherald.com/state/mangaluru/rainwater-collection-unit-helps-farmers-irrigate-farmland-846203.html"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.deccanherald.com/state/mangaluru/rainwater-collection-unit-helps-farmers-irrigate-farmland-846203.html"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.deccanherald.com/state/mangaluru/rainwater-collection-unit-helps-farmers-irrigate-farmland-846203.html"
                            target="_blank"
                          >
                            Read more
                          </a>{" "}
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
                  <img src="../static/images/media/articles/Karnataka_Water_research_Chikkamagalu.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://bangaloremirror.indiatimes.com/news/state/karnataka-water-research-station-to-come-up-in-chikkamagaluru/articleshow/62890815.cms"
                        target="_blank"
                      >
                        Karnataka: Water research station to come in Chikmagalur
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
                      Self-funded, and probably one-of-its-kind in India, the
                      project will have state of the art hydrology labs and
                      rainwater harvesting models.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://bangaloremirror.indiatimes.com/news/state/karnataka-water-research-station-to-come-up-in-chikkamagaluru/articleshow/62890815.cms"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://bangaloremirror.indiatimes.com/news/state/karnataka-water-research-station-to-come-up-in-chikkamagaluru/articleshow/62890815.cms"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://bangaloremirror.indiatimes.com/news/state/karnataka-water-research-station-to-come-up-in-chikkamagaluru/articleshow/62890815.cms"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://bangaloremirror.indiatimes.com/news/state/karnataka-water-research-station-to-come-up-in-chikkamagaluru/articleshow/62890815.cms"
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
                  <img src="../static/images/media/articles/Bangalore_Michael_Baptist.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://over2shailaja.wordpress.com/2014/05/05/honour-for-indias-green-heroes/"
                        target="_blank"
                      >
                        Honour For India’s Green Heroes
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
                      JSW Earth Care award category : Innovations for Climate
                      Protection bestowed on FLRWH for their innovative V-Wire
                      Injection Well technology
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://over2shailaja.wordpress.com/2014/05/05/honour-for-indias-green-heroes/"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://over2shailaja.wordpress.com/2014/05/05/honour-for-indias-green-heroes/"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://over2shailaja.wordpress.com/2014/05/05/honour-for-indias-green-heroes/"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://over2shailaja.wordpress.com/2014/05/05/honour-for-indias-green-heroes/"
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
          </div>

          <div style={{ marginTop: "10vh" }} className="container media-main">
            <div className="col-md-4">
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img src="../static/images/media/articles/harvester-shares-expertise-to-tap-Natures.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://timesofindia.indiatimes.com/city/bengaluru/Rainwater-harvester-shares-expertise-to-tap-Natures-bounty/articleshow/35573308.cms?from=mdr"
                        target="_blank"
                      >
                        Rainwater Harvester Shares Expertise to Tap Nature’s
                        Bounty
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
                      Explaining his journey into innovating for rain water
                      harvesting, our founder Mr. Michael Baptist shares his
                      vision on implementing RWH.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://timesofindia.indiatimes.com/city/bengaluru/Rainwater-harvester-shares-expertise-to-tap-Natures-bounty/articleshow/35573308.cms?from=mdr"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://timesofindia.indiatimes.com/city/bengaluru/Rainwater-harvester-shares-expertise-to-tap-Natures-bounty/articleshow/35573308.cms?from=mdr"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://timesofindia.indiatimes.com/city/bengaluru/Rainwater-harvester-shares-expertise-to-tap-Natures-bounty/articleshow/35573308.cms?from=mdr"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://timesofindia.indiatimes.com/city/bengaluru/Rainwater-harvester-shares-expertise-to-tap-Natures-bounty/articleshow/35573308.cms?from=mdr"
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
                  <img src="../static/images/media/articles/Saving_every_drop.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="http://www.indiatogether.org/schoolrwh-environment"
                        target="_blank"
                      >
                        Schools leap ahead with the use of innovative RWH
                        Technology
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
                      An article by Sri Padre explaining the benefits of RWH
                      systems installed by Farmland at Kuvempu Centenary Govt.
                      Model Higher Primary School.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "http://www.indiatogether.org/schoolrwh-environment"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "http://www.indiatogether.org/schoolrwh-environment"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "http://www.indiatogether.org/schoolrwh-environment"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="http://www.indiatogether.org/schoolrwh-environment"
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
                  <img src="../static/images/media/articles/Rainwater_filters_for_the monsoon_of_2016.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.thehindu.com/features/homes-and-gardens/Rainwater-filters-for-the-monsoon-of-2016/article14342450.ece"
                        target="_blank"
                      >
                        Rainwater Filter for the Monsoon of 2016
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
                      Learning and managing rainwater using RWH methods,
                      especially after two consecutive years of drought, was the
                      way to water wisdom in 2016
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.thehindu.com/features/homes-and-gardens/Rainwater-filters-for-the-monsoon-of-2016/article14342450.ece"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.thehindu.com/features/homes-and-gardens/Rainwater-filters-for-the-monsoon-of-2016/article14342450.ece"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.thehindu.com/features/homes-and-gardens/Rainwater-filters-for-the-monsoon-of-2016/article14342450.ece"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.thehindu.com/features/homes-and-gardens/Rainwater-filters-for-the-monsoon-of-2016/article14342450.ece"
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
          </div>
        </div>
        <div>
          <div className="container media-main">
            <div className="col-md-4">
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img src="../static/images/media/articles/Govt-ties-up.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.deccanherald.com/content/406405/govt-ties-up-pvt-firm.html"
                        target="_blank"
                      >
                        Govt. Ties Up with Pvt. Firm to Recharge Groundwater
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
                      The State government has tied up with us, to construct
                      injection wells to recharge groundwater by harvesting
                      rainwater.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.deccanherald.com/content/406405/govt-ties-up-pvt-firm.html"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.deccanherald.com/content/406405/govt-ties-up-pvt-firm.html"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.deccanherald.com/content/406405/govt-ties-up-pvt-firm.html"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.deccanherald.com/content/406405/govt-ties-up-pvt-firm.html"
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
                  <img src="../static/images/media/articles/Saving_every_drop.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://savitahiremath.com/2011/09/29/saving-every-drop-of-rainwater/"
                        target="_blank"
                      >
                        Saving every drop of rainwater
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
                      FLRWH with the mission of saving every drop of rainwater,
                      has helped rural and urban areas to increase yield of
                      existing borewells and installed their patented 'Rainy'
                      filters to conserve water.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://savitahiremath.com/2011/09/29/saving-every-drop-of-rainwater/"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://savitahiremath.com/2011/09/29/saving-every-drop-of-rainwater/"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://savitahiremath.com/2011/09/29/saving-every-drop-of-rainwater/"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://savitahiremath.com/2011/09/29/saving-every-drop-of-rainwater/"
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
                  <img src="../static/images/media/articles/Industrial_areas.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.sixdegreesnews.org/archives/1571/industrial-areas-take-to-rainwater-harvesting-in-bangalore"
                        target="_blank"
                      >
                        Industrial areas take to RWH in Bangalore
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
                      Industries in the Sarjapur area of Bangalore are taking
                      positive steps in the direction of RWH with the help of
                      innovative 'Rainy' Filters and also by implementing our
                      Systems & Solutions.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.sixdegreesnews.org/archives/1571/industrial-areas-take-to-rainwater-harvesting-in-bangalore"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.sixdegreesnews.org/archives/1571/industrial-areas-take-to-rainwater-harvesting-in-bangalore"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.sixdegreesnews.org/archives/1571/industrial-areas-take-to-rainwater-harvesting-in-bangalore"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.sixdegreesnews.org/archives/1571/industrial-areas-take-to-rainwater-harvesting-in-bangalore"
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
          </div>

          <div style={{ marginTop: "10vh" }} className="container media-main">
            <div className="col-md-4">
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img src="../static/images/media/articles/The-art-of-reviving-borewells.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.thehindu.com/todays-paper/tp-features/tp-districtplus/The-art-of-reviving-borewells/article15797031.ece"
                        target="_blank"
                      >
                        The art of reviving borewells
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
                      An informative article by Mr. V. Paneesha explaining the
                      borewell recharging process and its benefits.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.thehindu.com/todays-paper/tp-features/tp-districtplus/The-art-of-reviving-borewells/article15797031.ece"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.thehindu.com/todays-paper/tp-features/tp-districtplus/The-art-of-reviving-borewells/article15797031.ece"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.thehindu.com/todays-paper/tp-features/tp-districtplus/The-art-of-reviving-borewells/article15797031.ece"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.thehindu.com/todays-paper/tp-features/tp-districtplus/The-art-of-reviving-borewells/article15797031.ece"
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
                  <img src="../static/images/media/articles/Rainwater_collection.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.newindianexpress.com/states/karnataka/2010/jan/16/cmagalur-zps-rainwater-harvesting-project-a-su-161230.html"
                        target="_blank"
                      >
                        Rainwater Harvesting Project Success in Chikmagalur{" "}
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
                      The ‘Swajala Dhara’ to recharge drinking water borewells
                      in Chikmagalur district has been successfully implemented
                      in association with Farmland Rainwater Harvesting Systems.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.newindianexpress.com/states/karnataka/2010/jan/16/cmagalur-zps-rainwater-harvesting-project-a-su-161230.html"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.newindianexpress.com/states/karnataka/2010/jan/16/cmagalur-zps-rainwater-harvesting-project-a-su-161230.html"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.newindianexpress.com/states/karnataka/2010/jan/16/cmagalur-zps-rainwater-harvesting-project-a-su-161230.html"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.newindianexpress.com/states/karnataka/2010/jan/16/cmagalur-zps-rainwater-harvesting-project-a-su-161230.html"
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
                  <img src="../static/images/media/articles/Harvest_rainwater.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.deccanherald.com/content/66174/water-recharge-project-extended-13.html"
                        target="_blank"
                      >
                        V Wire Project Implementation to be extended to 13
                        villages
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
                      A more scientific way to increase ground water by
                      recharging existing borewells rather than digging new
                      ones. A unique solution developed by us.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.deccanherald.com/content/66174/water-recharge-project-extended-13.html"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.deccanherald.com/content/66174/water-recharge-project-extended-13.html"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.deccanherald.com/content/66174/water-recharge-project-extended-13.html"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.deccanherald.com/content/66174/water-recharge-project-extended-13.html"
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
          </div>
        </div>
        <div>
          <div className="container media-main">
            <div className="col-md-4">
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img src="../static/images/media/articles/Chikkamagaluru_Farmland_Aqua.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.daijiworld.com/news/newsDisplay.aspx?newsID=481961"
                        target="_blank"
                      >
                        Farmland Rainwater Harvesting Systems wins Aqua
                        Foundations Excellence Award <br />
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
                      'Rainy' have been honoured with the Aqua Foundations
                      Excellence Award 2017 under the category of Industrial
                      Excellence in Development of Technology.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=481961"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=481961"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=481961"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.daijiworld.com/news/newsDisplay.aspx?newsID=481961"
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
                  <img src="../static/images/media/articles/Harvest_rainwater.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.deccanherald.com/opinion/panorama/harvest-rainwater-to-avert-water-crisis-748073.html"
                        target="_blank"
                      >
                        Harvest rainwater to avert water crisis
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
                      In Chikmagalur, a project is underway by Farmland
                      Rainwater Harvesting Systems to tap rainwater over an area
                      of five acres, one of the largest such experiments in the
                      world, undertaken in a drought-hit area.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.deccanherald.com/opinion/panorama/harvest-rainwater-to-avert-water-crisis-748073.html"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.deccanherald.com/opinion/panorama/harvest-rainwater-to-avert-water-crisis-748073.html"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.deccanherald.com/opinion/panorama/harvest-rainwater-to-avert-water-crisis-748073.html"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.deccanherald.com/opinion/panorama/harvest-rainwater-to-avert-water-crisis-748073.html"
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
                  <img src="../static/images/media/articles/Bangalore_Michael_Baptist.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="http://www.daijiworld.com/news/newsDisplay.aspx?newsID=235866"
                        target="_blank"
                      >
                        International Award For Innovative Technology
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
                      Media coverage of the JSW- The Times of India ‘Earth Care
                      Award’ in 2014. We were awarded for our FL-V Wire
                      Injection Well Technology under the Innovation for Climate
                      Protection category.
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "http://www.daijiworld.com/news/newsDisplay.aspx?newsID=235866"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "http://www.daijiworld.com/news/newsDisplay.aspx?newsID=235866"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "http://www.daijiworld.com/news/newsDisplay.aspx?newsID=235866"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="http://www.daijiworld.com/news/newsDisplay.aspx?newsID=235866"
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
          </div>

          <div style={{ marginTop: "10vh" }} className="container media-main">
            <div className="col-md-4">
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img src="../static/images/media/articles/Farmland_SKOCH_2018.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html"
                        target="_blank"
                      >
                        SKOCH Award Winner: Farmland Rainwater Harvesting
                        Systems
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
                      Skoch Achiever Award 2018 Silver Category Awarded To
                      Farmland Rainwater Harvesting Systems And Conferred On
                      10th March 2018 At New Delhi
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
                            href="http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html"
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
                  <img src="../static/images/media/articles/Michael-1639576356.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="https://www.thebetterindia.com/269117/rainwater-harvesting-technique-recharge-wells-how-to-karnataka-drought/"
                        target="_blank"
                      >
                        His Unique Technique Recharges 45 Million Litres of
                        Rainwater/Yr in 25000 Wells
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
                      In recent years, Chikamaglur in Karnataka has recorded
                      severe droughts affecting their areca nut, coffee and
                      spice plantations. The crisis escalated due to poor
                      rainfall, causing the residents and farmers....
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.thebetterindia.com/269117/rainwater-harvesting-technique-recharge-wells-how-to-karnataka-drought/"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.thebetterindia.com/269117/rainwater-harvesting-technique-recharge-wells-how-to-karnataka-drought/"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.thebetterindia.com/269117/rainwater-harvesting-technique-recharge-wells-how-to-karnataka-drought/"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="https://www.thebetterindia.com/269117/rainwater-harvesting-technique-recharge-wells-how-to-karnataka-drought/"
                            target="_blank"
                          >
                            Read more
                          </a>{" "}
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

export default ImageSliderMulti;
