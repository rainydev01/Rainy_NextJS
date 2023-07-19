import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ImageSliderBLogNew = () => {
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
        	<div style={{ backgroundImage: "url(../static/images/homepage/ddropsbg.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "top left", }} >

            <div className="container media-main">
                <div className="col-md-4" style={{ marginTop: "30px" }}>
              			<div className="sec-brdr">
                			<div className="mdiaimg">
                  				<img src="../static/images/blogs/saving-rain-water-with-techniques-img1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/saving-rain-water-with-these-techniques" target="_self" >
										            Step-by-Step Guide: Saving Rainwater with These Techniques
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          With the world facing water insufficiency and reports suggesting an increase in waterstressed areas by 2050, rainwater harvesting has become the need of the hour. As per the India Meteorological Department, Indian....
                      				</p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/saving-rain-water-with-these-techniques" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/saving-rain-water-with-these-techniques" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/saving-rain-water-with-these-techniques" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/saving-rain-water-with-these-techniques" target="_self" >
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
                  				<img src="../static/images/blogs/ground-water-harvesting-thumb.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/ground-water-harvesting" target="_self" >
										  Start Ground Water Harvesting Today with Rainy!
                        				<br />
                      					</a>
                    				</h3>
                    				
									<p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									Ground water harvesting is among the best techniques to conserve water resources while ensuring that the communities have sufficient access to a reliable source of water. So, if you are seeking a professional company...
                      				</p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/ground-water-harvesting" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/ground-water-harvesting" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/ground-water-harvesting" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/ground-water-harvesting" target="_self" >
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
                  				<img src="../static/images/blogs/rain-water-harvesting-drawing-thumb.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/rain-water-harvesting-drawing" target="_self" >
										  Rainy: Your One-Stop Destination For Rain Water Harvesting Services
                        				<br />
                      					</a>
                    				</h3>
                    				
									<p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									Rainwater harvesting refers to collecting and storing rainwater from various surfaces such as rooftops, parks, roads, and open grounds. This collected water can be used for various purposes or recharged into the groundwater system.... </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-drawing" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-drawing" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-drawing" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/rain-water-harvesting-drawing" target="_self" >
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

              <div className="container media-main" style={{ marginTop: "10vh" }}>

					      <div className="col-md-4" style={{ marginTop: "30px" }}>
              			<div className="sec-brdr">
                			<div className="mdiaimg">
                  				<img src="../static/images/blogs/rain-water-harvesting-methods-thumb.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/rain-water-harvesting-methods" target="_self" >
										  Comprehensive Guide to The Rain Water Harvesting Methods Opted at Rainy
                        				<br />
                      					</a>
                    				</h3>
                    				
									<p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									Rain water harvesting methods are valuable for achieving self-sufficiency regarding household water and combating water scarcity. It also holds significant potential as a business venture in the future. Collecting and treating.... </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-methods" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-methods" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-methods" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/rain-water-harvesting-methods" target="_self" >
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
                    src="../static/images/blogs/globalWaterScarcity/2.jpg"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="/about-us/blogs/global-water-scarcity"
                        target="_self"
                      >
                        How Rainwater Harvesting can solve Global Water scarcity
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
                      Every day that goes by, more and more water is becoming
                      scarce. The World Economic Forum identified the water
                      crisis as the fifth most dangerous global risk in terms of
                      its potential to affect society in January 2020....
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/global-water-scarcity"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/global-water-scarcity"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/global-water-scarcity"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/global-water-scarcity"
                            target="_self"
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
                    src="../static/images/blogs/rainyRainwaterHarvestingFilters/2.png"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="/about-us/rainy-rainwater-harvesting-filters"
                        target="_self"
                      >
                        Rainwater Harvesting Filters
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
                      Rainwater harvesting systems are one of the best methods
                      practiced and followed to support the conservation of
                      water. It collects and stores rain rather than allowing it
                      to run off. Rainwater, which is pure in form and of good
                      quality.....
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rainy-rainwater-harvesting-filters"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rainy-rainwater-harvesting-filters"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rainy-rainwater-harvesting-filters"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/rainy-rainwater-harvesting-filters"
                            target="_self"
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

            <div className="col-md-4" style={{ marginTop: "30px" }}>
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img
                    src="../static/images/blogs/rainwaterHarvestingInDifferentCountries/2.jpg"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="/about-us/blogs/rain-water-harvesting-in-different-countries"
                        target="_self"
                      >
                        Rainwater Harvesting in different countries
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
                      Rainwater harvesting is a centuries-old technique that has
                      recently been finding favor in many countries worldwide as
                      an efficient, sustainable way to provide clean drinking
                      water and irrigate crops. This cost effective technology
                      is becoming increasingly popular for its many advantages
                      like replenishing rapidly depleting groundwater
                      reserves...
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-in-different-countries"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-in-different-countries"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-in-different-countries"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/rain-water-harvesting-in-different-countries"
                            target="_self"
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
                    src="../static/images/blogs/simplicityInRainwaterHarvesting/1.png"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="/about-us/blogs/simplicity-in-rain-water-harvesting"
                        target="_self"
                      >
                        Simplicity in Rain Water Harvesting
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
                      Even though water makes up over three-quarters of our
                      world, not all of it is useful. Only a small portion of
                      water in the oceans and seas can be used for other
                      purposes;it cannot be used as drinking water.As a result,
                      there is always a lack of water that is suitable for
                      drinking or for use in homes and businesses. Areas of the
                      world...
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/simplicity-in-rain-water-harvesting"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/simplicity-in-rain-water-harvesting"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/simplicity-in-rain-water-harvesting"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/simplicity-in-rain-water-harvesting"
                            target="_self"
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
                    src="../static/images/blogs/RWHreducesSoilErosion/soilErosion1.png"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="/about-us/blogs/how-rainwater-harvesting-reduces-soil-erosion"
                        target="_self"
                      >
                        How Rain Water Harvesting can reduce soil erosion and
                        flooding?
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
                      The act of collecting rainwater runoff from a building or
                      other impermeable surface so that it can be stored for use
                      later is commonly known as Rain Water Harvesting (RWH).
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/how-rainwater-harvesting-reduces-soil-erosion"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/how-rainwater-harvesting-reduces-soil-erosion"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/how-rainwater-harvesting-reduces-soil-erosion"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/how-rainwater-harvesting-reduces-soil-erosion"
                            target="_self"
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
          	
          <div className="container media-main" style={{ marginTop: "10vh" }}>
              <div className="col-md-4" style={{ marginTop: "30px" }}>
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img
                    src="../static/images/blogs/rainWaterHarvestingTypesAndMethods/rainWaterHarvestingTypesAndMethods2.jpg"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="/about-us/blogs/rainwater-harvesting-advantages-types-and-methods"
                        target="_self"
                      >
                        Rainwater harvesting advantages, types and methods
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
                      Rainwater harvesting is a valuable term for
                      self-sufficiency, household water, combating water
                      scarcity, and a broad business term for the future. By
                      collecting and treating rain and stormwater from roofs and
                      ground surfaces, water availability for human consumption
                      increases exponentially...
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-advantages-types-and-methods"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-advantages-types-and-methods"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-advantages-types-and-methods"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/rainwater-harvesting-advantages-types-and-methods"
                            target="_self"
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
                    src="../static/images/blogs/rainWaterHarvestingInIndia/rainWaterHarvestingInIndia2.jpg"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="/about-us/blogs/rain-water-harvesting-in-india"
                        target="_self"
                      >
                        Rain Water Harvesting (RWH) In India
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
                      In ancient India, survival was the skeleton key where
                      civilizations, settlements, and empires rose and then
                      fell. Water, food, and shelter were a continuous struggle
                      in dry climates where water was scarce. The rainwater
                      harvesting system in India roots back to its origin of
                      more than 4,000 years when the ancient administrative...
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-in-india"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-in-india"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting-in-india"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/rain-water-harvesting-in-india"
                            target="_self"
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
                    src="../static/images/blogs/ancientVsModernPictures/jalhara.jpg"
                    style={{
                      height: "196px",
                    }}
                  />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a
                        href="/about-us/blogs/ancient-method-vs-modern-technology"
                        target="_self"
                      >
                        Ancient Methods Vs New Technology
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
                      Rainwater harvesting is one of the simplest and oldest
                      methods of self-supply of water which been used in South
                      Asia and other countries for many thousands of years. Now
                      a days, scarcity of good quality water has become a
                      significant cause of concern...
                    </p>
                    <div className="col-md-12 mdiasocial">
                      <div className="col-md-6 mediasocial">
                        <FacebookShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/ancient-method-vs-modern-technology"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/ancient-method-vs-modern-technology"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/ancient-method-vs-modern-technology"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/ancient-method-vs-modern-technology"
                            target="_self"
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
              <div className="col-md-4" style={{ marginTop: "30px" }}>
                <div className="sec-brdr">
                  <div className="mdiaimg">
                    <img
                      src="../static/images/blogs/tofi1.png"
                      style={{
                        height: "196px",
                      }}
                    />
                  </div>
                  <div className="mdiacont">
                    <div className="grndtext">
                      <h3>
                        <a href="/about-us/blogs/types-of-filter" target="_self">
                          Types of Rain Water Harvesting Filters
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
                        The lack of freshwater resources makes it tough to meet
                        the standard water demand. Collection of rainwater from
                        rooftops, runoff, roads, open ground, etc; for utilization
                        is known to be rainwater harvesting. Rainwater can be
                        stored or can be used to recharge the groundwater table...
                      </p>
                      <div className="col-md-12 mdiasocial">
                        <div className="col-md-6 mediasocial">
                          <FacebookShareButton
                            url={
                              "https://www.rainyfilters.com/about-us/blogs/types-of-filter"
                            }
                          >
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </FacebookShareButton>

                          <TwitterShareButton
                            url={
                              "https://www.rainyfilters.com/about-us/blogs/types-of-filter"
                            }
                          >
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </TwitterShareButton>

                          <WhatsappShareButton
                            url={
                              "https://www.rainyfilters.com/about-us/blogs/types-of-filter"
                            }
                          >
                            <i className="fa fa-whatsapp" aria-hidden="true" />
                          </WhatsappShareButton>
                        </div>
                        <div className="col-md-6 mediabtn">
                          <button>
                            <a
                              href="/about-us/blogs/types-of-filter"
                              target="_self"
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
                      src="../../static/images/blogs/Benefits-of-rainwater-harvesting.jpg"
                      style={{
                        height: "196px",
                      }}
                    />
                  </div>
                  <div className="mdiacont">
                    <div className="grndtext">
                      <h3>
                        <a
                          href="/about-us/blogs/rain-water-harvesting"
                          target="_self"
                        >
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
                              "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting"
                            }
                          >
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </FacebookShareButton>

                          <TwitterShareButton
                            url={
                              "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting"
                            }
                          >
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </TwitterShareButton>

                          <WhatsappShareButton
                            url={
                              "https://www.rainyfilters.com/about-us/blogs/rain-water-harvesting"
                            }
                          >
                            <i className="fa fa-whatsapp" aria-hidden="true" />
                          </WhatsappShareButton>
                        </div>
                        <div className="col-md-6 mediabtn">
                          <button>
                            <a
                              href="/about-us/blogs/rain-water-harvesting"
                              target="_self"
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
                      src="../static/images/blogs/groundWaterRecharge.jpg"
                      style={{
                        height: "196px",
                      }}
                    />
                  </div>
                  <div className="mdiacont">
                    <div className="grndtext">
                      <h3>
                        <a
                          href="/about-us/blogs/ground-water-recharge"
                          target="_self"
                        >
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
                              "https://www.rainyfilters.com/about-us/blogs/ground-water-recharge"
                            }
                          >
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </FacebookShareButton>

                          <TwitterShareButton
                            url={
                              "https://www.rainyfilters.com/about-us/blogs/ground-water-recharge"
                            }
                          >
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </TwitterShareButton>

                          <WhatsappShareButton
                            url={
                              "https://www.rainyfilters.com/about-us/blogs/ground-water-recharge"
                            }
                          >
                            <i className="fa fa-whatsapp" aria-hidden="true" />
                          </WhatsappShareButton>
                        </div>
                        <div className="col-md-6 mediabtn">
                          <button>
                            <a
                              href="/about-us/blogs/ground-water-recharge"
                              target="_self"
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
            <div className="container media-main">
                <div className="col-md-4" style={{ marginTop: "30px" }}>
              <div className="sec-brdr">
                <div className="mdiaimg">
                  <img src="../static/images/blogs/globalWarming.jpg" />
                </div>
                <div className="mdiacont">
                  <div className="grndtext">
                    <h3>
                      <a href="/about-us/blogs/global-warming" target="_self">
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
                            "https://www.rainyfilters.com/about-us/blogs/global-warming"
                          }
                        >
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </FacebookShareButton>

                        <TwitterShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/global-warming"
                          }
                        >
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </TwitterShareButton>

                        <WhatsappShareButton
                          url={
                            "https://www.rainyfilters.com/about-us/blogs/global-warming"
                          }
                        >
                          <i className="fa fa-whatsapp" aria-hidden="true" />
                        </WhatsappShareButton>
                      </div>
                      <div className="col-md-6 mediabtn">
                        <button>
                          <a
                            href="/about-us/blogs/global-warming"
                            target="_self"
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
                        src="../static/images/blogs/"
                        style={{
                          height: "196px",
                        }}
                      />
                    </div>
                    <div className="mdiacont">
                      <div className="grndtext">
                        <h3>
                          <a
                            href="/about-us/blogs/hydrological-cycle"
                            target="_self"
                          >
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
                                "https://www.rainyfilters.com/about-us/blogs/hydrological-cycle"
                              }
                            >
                              <i className="fa fa-facebook" aria-hidden="true" />
                            </FacebookShareButton>

                            <TwitterShareButton
                              url={
                                "https://www.rainyfilters.com/about-us/blogs/hydrological-cycle"
                              }
                            >
                              <i className="fa fa-twitter" aria-hidden="true" />
                            </TwitterShareButton>

                            <WhatsappShareButton
                              url={
                                "https://www.rainyfilters.com/about-us/blogs/hydrological-cycle"
                              }
                            >
                              <i className="fa fa-whatsapp" aria-hidden="true" />
                            </WhatsappShareButton>
                          </div>
                          <div className="col-md-6 mediabtn">
                            <button>
                              <a
                                href="/about-us/blogs/hydrological-cycle"
                                target="_self"
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
                        src="../static/images/blogs/beginnerGuideToSettingUp/2.png"
                        style={{
                          height: "196px",
                        }}
                      />
                    </div>
                    <div className="mdiacont">
                      <div className="grndtext">
                        <h3>
                          <a
                            href="/about-us/blogs/beginner-guide-to-setup-rwh"
                            target="_self"
                          >
                            A Beginner's Guide to setting up RWH
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
                          Rainwater harvesting involves collecting and storing
                          rainwater for reuse rather than allowing it to flow and be
                          absorbed into the earth or channelled into drains,
                          streams, or rivers. It is one of the simplest ways...
                        </p>
                        <div className="col-md-12 mdiasocial">
                          <div className="col-md-6 mediasocial">
                            <FacebookShareButton
                              url={
                                "https://www.rainyfilters.com/about-us/blogs/beginner-guide-to-setup-rwh"
                              }
                            >
                              <i className="fa fa-facebook" aria-hidden="true" />
                            </FacebookShareButton>

                            <TwitterShareButton
                              url={
                                "https://www.rainyfilters.com/about-us/blogs/beginner-guide-to-setup-rwh"
                              }
                            >
                              <i className="fa fa-twitter" aria-hidden="true" />
                            </TwitterShareButton>

                            <WhatsappShareButton
                              url={
                                "https://www.rainyfilters.com/about-us/blogs/beginner-guide-to-setup-rwh"
                              }
                            >
                              <i className="fa fa-whatsapp" aria-hidden="true" />
                            </WhatsappShareButton>
                          </div>
                          <div className="col-md-6 mediabtn">
                            <button>
                              <a
                                href="/about-us/blogs/beginner-guide-to-setup-rwh"
                                target="_self"
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
              <div className="container media-main" style={{ marginTop: "10vh" }}>
                <div className="col-md-4" style={{ marginTop: "30px" }}>
                  <div className="sec-brdr">
                    <div className="mdiaimg">
                      <img
                        src="../static/images/blogs/bestPracticeForMaintaining/2.png"
                        style={{
                          height: "196px",
                        }}
                      />
                    </div>
                    <div className="mdiacont">
                      <div className="grndtext">
                        <h3>
                          <a
                            href="/about-us/blogs/best-practice-for-maintaining-rwh"
                            target="_self"
                          >
                            Best Practices for Maintaining Your Rainwater Harvesting
                            System.
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
                          Rainwater harvesting is the greatest method or technology
                          for conserving rainwater by gathering, storing,
                          transporting, and purifying rainwater that runs off
                          rooftops, hill slopes, parks, roadways, and open areas for
                          later use...
                        </p>
                        <div className="col-md-12 mdiasocial">
                          <div className="col-md-6 mediasocial">
                            <FacebookShareButton
                              url={
                                "https://www.rainyfilters.com/about-us/blogs/best-practice-for-maintaining-rwh"
                              }
                            >
                              <i className="fa fa-facebook" aria-hidden="true" />
                            </FacebookShareButton>

                            <TwitterShareButton
                              url={
                                "https://www.rainyfilters.com/about-us/blogs/best-practice-for-maintaining-rwh"
                              }
                            >
                              <i className="fa fa-twitter" aria-hidden="true" />
                            </TwitterShareButton>

                            <WhatsappShareButton
                              url={
                                "https://www.rainyfilters.com/about-us/blogs/best-practice-for-maintaining-rwh"
                              }
                            >
                              <i className="fa fa-whatsapp" aria-hidden="true" />
                            </WhatsappShareButton>
                          </div>
                          <div className="col-md-6 mediabtn">
                            <button>
                              <a
                                href="/about-us/blogs/best-practice-for-maintaining-rwh"
                                target="_self"
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
      </Carousel>
      ;
    </Fragment>
  );
};

export default ImageSliderBLogNew;
