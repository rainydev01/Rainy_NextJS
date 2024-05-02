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
                  				<img src="../static/images/blogs/water_treatment_cartridge_filters_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/water-treatment-cartridge-filters" target="_self" >
										            Water Treatment Cartridge Filters for Your Rainwater Harvesting Systems
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Rainwater harvesting systems have gained huge attention these days, thanks to increased regulations of stormwater runoff and more investments in building sustainable...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/water-treatment-cartridge-filters" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/water-treatment-cartridge-filters" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/water-treatment-cartridge-filters" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/water-treatment-cartridge-filters" target="_self" >
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
                  				<img src="../static/images/blogs/rainwater_harvesting_in_tamilnadu_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/rainwater-harvesting-in-tamil-nadu" target="_self" >
										            Different Ways of Rainwater Harvesting in Tamil Nadu
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Collection, storage, conveyance, and purification of rainwater running off from parks, rooftops, open grounds, and roads for later use is called...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-in-tamil-nadu" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-in-tamil-nadu" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-in-tamil-nadu" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/rainwater-harvesting-in-tamil-nadu" target="_self" >
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
                  				<img src="../static/images/blogs/rainwater_harvesting_in_bangalore_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/rainwater-harvesting-in-bangalore" target="_self" >
										            Understand the Different Techniques of Rainwater Harvesting in Bangalore
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          As the world is facing the challenges of climate change, especially the scarcity of rain in many areas, rainwater conservation has become important to creating...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-in-bangalore" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-in-bangalore" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-in-bangalore" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/rainwater-harvesting-in-bangalore" target="_self" >
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
                  				<img src="../static/images/blogs/rainwater_harvesting_in_kerala_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/rainwater-harvesting-in-kerala" target="_self" >
										            Everything You Need to Know about Rainwater Harvesting in Kerala
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Rainwater harvesting in Kerala involves collecting and storing rainwater that runs off from parks, open grounds, roads, and rooftops. The method helps store...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-in-kerala" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-in-kerala" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rainwater-harvesting-in-kerala" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/rainwater-harvesting-in-kerala" target="_self" >
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
                  				<img src="../static/images/blogs/groundwater_recharge_in_bangalore_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/groundwater-recharge-in-bangalore" target="_self" >
										            Groundwater Recharge in Bangalore- Its Significance and Scalability
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Groundwater, which accounts for 30% of the earth’s surface water, requires proper management and conservation considering large-scale aquifer...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/groundwater-recharge-in-bangalore" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/groundwater-recharge-in-bangalore" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/groundwater-recharge-in-bangalore" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/groundwater-recharge-in-bangalore" target="_self" >
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
                  				<img src="../static/images/blogs/groundwater_recharge_in_kerala_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/groundwater-recharge-in-kerala" target="_self" >
										            Different Methods Used for Groundwater Recharge in Kerala
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Groundwater or water beneath the Earth’s surface in the fractures and pores of sediments and rocks sustains life on Earth. It is a major resource for domestic, agricultural...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/groundwater-recharge-in-kerala" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/groundwater-recharge-in-kerala" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/groundwater-recharge-in-kerala" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/groundwater-recharge-in-kerala" target="_self" >
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
                  				<img src="../static/images/blogs/groundwater_recharge_in_tamil_nadu_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/groundwater-recharge-in-tamil-nadu" target="_self" >
										            Groundwater Recharge in Tamil Nadu: Advantages of the System
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Groundwater is of immense importance for human beings, serving as a major source of freshwater and used for industrial and agricultural purposes. Thermal energy from groundwater...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/groundwater-recharge-in-tamil-nadu" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/groundwater-recharge-in-tamil-nadu" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/groundwater-recharge-in-tamil-nadu" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/groundwater-recharge-in-tamil-nadu" target="_self" >
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
                  				<img src="../static/images/blogs/rooftop_rainwater_harvesting_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/rooftop-rainwater-harvesting-a-brief-guide" target="_self" >
										            Rooftop Rainwater Harvesting: A Brief Guide
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          The increase in water scarcity in urban areas is a serious indication of depleting groundwater reserves. It denotes an immediate need to amplify the measures...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rooftop-rainwater-harvesting-a-brief-guide" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rooftop-rainwater-harvesting-a-brief-guide" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/rooftop-rainwater-harvesting-a-brief-guide" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/rooftop-rainwater-harvesting-a-brief-guide" target="_self" >
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
                  				<img src="../static/images/blogs/harmony_of_tradition_and_innovation_inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/harmony-of-tradition-and-innovation" target="_self" >
										            Harmony of Tradition and Innovation: Exploring Rainwater Harvesting Systems
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Rainwater harvesting is a process of conserving rainwater which includes collecting, storing and conveying and purifying the rainwater which falls on the rooftops...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/harmony-of-tradition-and-innovation" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/harmony-of-tradition-and-innovation" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/harmony-of-tradition-and-innovation" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/harmony-of-tradition-and-innovation" target="_self" >
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
                  				<img src="../static/images/blogs/effective_techniques_to_recharge_groundwater_in_India_inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/effective-techniques-to-recharge-groundwater-in-India" target="_self" >
										            Effective Techniques to Recharge Groundwater in India
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Water is crucial for life to continue. In developing countries like India, where some remote regions still suffer from water scarcity, we should proactively invest ...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/effective-techniques-to-recharge-groundwater-in-India" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/effective-techniques-to-recharge-groundwater-in-India" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/effective-techniques-to-recharge-groundwater-in-India" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/effective-techniques-to-recharge-groundwater-in-India" target="_self" >
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
                  				<img src="../static/images/blogs/drops_barrels_guide_water_barrels_for_rainwater_inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/drops-barrels-guide-water-barrels-for-rainwater" target="_self" >
										            From Drops to Barrels: A Guide to Water Barrels for Rainwater
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Harvesting rainwater is a clever way to save water. Rainwater harvesting is a process of collecting, storing and utilizing it for various purposes. As the water scarcity ...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/drops-barrels-guide-water-barrels-for-rainwater" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/drops-barrels-guide-water-barrels-for-rainwater" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/drops-barrels-guide-water-barrels-for-rainwater" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/drops-barrels-guide-water-barrels-for-rainwater" target="_self" >
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
                  				<img src="../static/images/blogs/answering_the_call_to_save_water_save_earth_inner3.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/answering-the-call-to-save-water-save-earth" target="_self" >
										            Preserving Our Planet: Answering the Call to Save Water, Save Earth
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Water is life, it sustains all the living things that exist on our planet. Despite of its vast availability, fresh water is very limited. It is a non-renewable ...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/answering-the-call-to-save-water-save-earth" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/answering-the-call-to-save-water-save-earth" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/answering-the-call-to-save-water-save-earth" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/answering-the-call-to-save-water-save-earth" target="_self" >
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
                  				<img src="../static/images/blogs/exploring_the_water_harvesting_process_inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/exploring-the-water-harvesting-process" target="_self" >
										            Unlocking Sustainable Solutions: Exploring the Water Harvesting Process
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Water is a nature’s gift, and it is our responsibility to conserve it. Water harvesting is a process of collecting rainwater from the catchment area and using ...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/exploring-the-water-harvesting-process" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/exploring-the-water-harvesting-process" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/exploring-the-water-harvesting-process" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/exploring-the-water-harvesting-process" target="_self" >
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
                  				<img src="../static/images/blogs/urgent_need_for_water_conservation_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/urgent-need-for-water-conservation" target="_self" >
										            The Urgent Need for Water Conservation: A Vital Need for Our Planet
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Water is the natural resource that sustains the earth. Despite of its importance, water scarcity is increasing due to the factors like increase in population ...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/urgent-need-for-water-conservation" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/urgent-need-for-water-conservation" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/urgent-need-for-water-conservation" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/urgent-need-for-water-conservation" target="_self" >
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
                  				<img src="../static/images/blogs/how_to_save_water_inner2.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/how-to-save-water" target="_self" >
										            How to save water? Your guide to everyday water conservation
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Water is the most important and valuable natural resource on earth. It sustains all life on earth. Water is essential for the survival of all living ...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/how-to-save-water" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/how-to-save-water" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/how-to-save-water" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/how-to-save-water" target="_self" >
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
                  				<img src="../static/images/blogs/harnessing_the_power_of_rainwater_harvesting_inner3.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/harnessing-the-power-of-rainwater-harvesting" target="_self" >
										            Save Water, Save Life: Harnessing the Power of Rainwater Harvesting
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Water is the essence of life; it is a finite resource that supports all the living beings on earth. As the global population increases and climate change worsens ...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/harnessing-the-power-of-rainwater-harvesting" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/harnessing-the-power-of-rainwater-harvesting" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/harnessing-the-power-of-rainwater-harvesting" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/harnessing-the-power-of-rainwater-harvesting" target="_self" >
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
                  				<img src="../static/images/blogs/highlighting_sustainable_practices_water_conservation_agriculture_inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/highlighting-sustainable-practices-water-conservation-agriculture" target="_self" >
										            Highlighting the Sustainable Practices of Water Conservation in Agriculture
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          A crucial topic that impacts both the sustainability of food production and the health of our world is ...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/highlighting-sustainable-practices-water-conservation-agriculture" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/highlighting-sustainable-practices-water-conservation-agriculture" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/highlighting-sustainable-practices-water-conservation-agriculture" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/highlighting-sustainable-practices-water-conservation-agriculture" target="_self" >
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
                  				<img src="../static/images/blogs/help_trees_grow_rainwater_harvesting_banner.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/help-trees-grow-rainwater-harvesting" target="_self" >
										            Help Trees Grow with Proper Rainwater Harvesting Techniques
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Since time immemorial, the role of trees in preserving ecological balance has been crucial. This ensures a healthy environment. However, the drastic changes...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/help-trees-grow-rainwater-harvesting" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/help-trees-grow-rainwater-harvesting" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/help-trees-grow-rainwater-harvesting" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/help-trees-grow-rainwater-harvesting" target="_self" >
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
                  				<img src="../static/images/blogs/borewell_recharge_for_home_inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/borewell-recharge-for-home" target="_self" >
										            A Comprеhеnsivе Guidе to Borеwеll Rеchargе and Rainwatеr Harvеsting at Homе
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          In thе facе of incrеasing watеr scarcity, it is еssеntial to еxplorе innovativе and long-tеrm watеr managеmеnt stratеgiеs. Borеwеll rеcharging combinеd...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/borewell-recharge-for-home" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/borewell-recharge-for-home" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/borewell-recharge-for-home" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/borewell-recharge-for-home" target="_self" >
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
                  				<img src="../static/images/blogs/raining_solution_water_secure_future_inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/raining-solution-water-secure-future" target="_self" >
										            Raining Solutions: International Best Practices in Rainwater Harvesting for a Water-Secure Future
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          In order to protect our planet's most precious resources, creative and sustainable solutions are nееdеd to the growing problem of watеr shortage...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/raining-solution-water-secure-future" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/raining-solution-water-secure-future" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/raining-solution-water-secure-future" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/raining-solution-water-secure-future" target="_self" >
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
                  				<img src="../static/images/blogs/ensuring_clean_safe_rainwater_proper_filtration_inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/ensuring-clean-and-safe-rainwater-with-proper-filtration" target="_self" >
										            Ensuring Clean and Safe Rainwater with Proper Filtration
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Rainwater is a precious resource that can be collected, cleaned, and used for a variety of purposes. It can also be used for drinking, but only after a thorough...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/ensuring-clean-and-safe-rainwater-with-proper-filtration" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/ensuring-clean-and-safe-rainwater-with-proper-filtration" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/ensuring-clean-and-safe-rainwater-with-proper-filtration" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/ensuring-clean-and-safe-rainwater-with-proper-filtration" target="_self" >
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
                  				<img src="../static/images/blogs/effect_of_water_pollution_inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/effect-of-water-pollution" target="_self" >
										            Harnessing Rainwater Harvesting: A Solution to Combat Water Pollution
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Water is essential for life; it is a precious resource that supports living creatures to survive on earth. Unfortunately, most of the world's water bodies...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/effect-of-water-pollution" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/effect-of-water-pollution" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/effect-of-water-pollution" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/effect-of-water-pollution" target="_self" >
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
                  				<img src="../static/images/blogs/save-rain-water-10-ways-banner.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/save-rain-water-10-ways" target="_self" >
										            10 Ways to Save Rain Water
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          It's that time of the year when the heavens start pouring in and you start thinking of conserving this precious water. If you live in an area that gets lots...
                            </p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/save-rain-water-10-ways" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/save-rain-water-10-ways" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/save-rain-water-10-ways" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/save-rain-water-10-ways" target="_self" >
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
                  				<img src="../static/images/blogs/world-of-rainwater-harvesting-inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/world-of-rainwater-harvesting" target="_self" >
										            Harvesting The skies: Introducing the World of Rainwater Harvesting
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Rainwater, the solution of life, it is a precious resource that sustains every living thing on our planet. It is the essence of existence, yet it is a finite...
                      				</p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/world-of-rainwater-harvesting" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/world-of-rainwater-harvesting" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/world-of-rainwater-harvesting" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/world-of-rainwater-harvesting" target="_self" >
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
                  				<img src="../static/images/blogs/harvesting-hope-the-art-of-rainwater-conservation-inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/harvesting-hope-the-art-of-rainwater-conservation" target="_self" >
										            Harvesting Hope: The Art of Rainwater Conservation
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Rainwater, the essence of life, it is a gift from the heavens that has nurtured the earth till now. But we often take it granted, the significance of rainwater conservation...
                      				</p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/harvesting-hope-the-art-of-rainwater-conservation" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/harvesting-hope-the-art-of-rainwater-conservation" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/harvesting-hope-the-art-of-rainwater-conservation" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/harvesting-hope-the-art-of-rainwater-conservation" target="_self" >
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
                  				<img src="../static/images/blogs/piezometer-is-used-to-measure-inner1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/piezometers-the-underground-detectives-saving-the-world" target="_self" >
										            Piezometers: The Underground Detectives Saving the world
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          In this universe of technology, there are some hidden gems, silently working under the earth’s surface, revealing the secrets of our environment. Meet the piezometers...
                      				</p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/piezometers-the-underground-detectives-saving-the-world" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/piezometers-the-underground-detectives-saving-the-world" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/piezometers-the-underground-detectives-saving-the-world" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/piezometers-the-underground-detectives-saving-the-world" target="_self" >
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
                  				<img src="../static/images/blogs/what-is-a-water-harvesting-system-inner1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/what-is-a-water-harvesting-system" target="_self" >
										            What is A Water Harvesting System and Why Is It Important?
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          To produce water for irrigation right away or to store for later use in above-ground ponds or aquifers, water harvesting involves collecting runoff from rain storms from a catchment...
                      				</p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/what-is-a-water-harvesting-system" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/what-is-a-water-harvesting-system" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/what-is-a-water-harvesting-system" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/what-is-a-water-harvesting-system" target="_self" >
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
                  				<img src="../static/images/blogs/preserving-the-planet-drop-by-drop-inner-1.png" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/preserving-the-planet-drop-by-drop" target="_self" >
										            Preserving the Planet Drop by Drop: The Importance of Rainwater Harvesting
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          In today's world, where the challenge of not water scarcity is a big concern and the health of our environment is in danger, the practice of rainwater harvestingemerges as a source of hope....
                      				</p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/preserving-the-planet-drop-by-drop" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/preserving-the-planet-drop-by-drop" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/preserving-the-planet-drop-by-drop" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/preserving-the-planet-drop-by-drop" target="_self" >
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
                  				<img src="../static/images/blogs/water-next-important-environmental-target-india-inner-1.jpg" style={{ height: "196px", }} />
                			</div>
                			<div className="mdiacont">
                  				<div className="grndtext">
                    				<h3>
                      					<a href="/about-us/blogs/water-next-important-environmental-target-india" target="_self" >
										            Water Should be the Next Important Environmental Target for India
                        				<br />
                      					</a>
                    				</h3>
                    				
                            <p style={{ textAlign: "left", color: "#4c3f43", fontSize: "13px", fontWeight: "500", letterSpacing: "0.5px", }} >
									          Environmental protection, climate change control, reducing emissions and carbon footprint, etc., continue to be the top concerns around the world. However, water is another vital aspect we should not ignore....
                      				</p>

                    				<div className="col-md-12 mdiasocial">
                      					<div className="col-md-6 mediasocial">
                        					<FacebookShareButton url={ "https://www.rainyfilters.com/about-us/blogs/water-next-important-environmental-target-india" } >
                          						<i className="fa fa-facebook" aria-hidden="true" />
                        					</FacebookShareButton>

                        					<TwitterShareButton url={ "https://www.rainyfilters.com/about-us/blogs/water-next-important-environmental-target-india" } >
                          						<i className="fa fa-twitter" aria-hidden="true" />
                        					</TwitterShareButton>

                        					<WhatsappShareButton url={ "https://www.rainyfilters.com/about-us/blogs/water-next-important-environmental-target-india" } >
                          						<i className="fa fa-whatsapp" aria-hidden="true" />
                        					</WhatsappShareButton>
                      					</div>
                      					<div className="col-md-6 mediabtn">
                        					<button>
                          						<a href="/about-us/blogs/water-next-important-environmental-target-india" target="_self" >
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
                            <img src="../static/images/blogs/save-rain-water-with-techniques/img1.jpg" style={{ height: "196px", }} />
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
              </div>
          </div>

          <div>
              <div className="container media-main">        
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
              </div>
          
              <div className="container media-main" style={{ marginTop: "10vh" }} >
              
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
              </div>
          </div>

          <div>
              <div className="container media-main">    
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
              </div>
                                
              <div className="container media-main" style={{ marginTop: "10vh" }} >
          
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
              </div>
          </div>

          <div>
              <div className="container media-main">    
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
              </div>

              <div className="container media-main" style={{ marginTop: "10vh" }} >
               
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
