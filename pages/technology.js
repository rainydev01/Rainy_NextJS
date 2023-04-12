import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-168445645-1"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
														  window.dataLayer = window.dataLayer || [];
  														  function gtag(){dataLayer.push(arguments);}
  														  gtag('js', new Date());
															gtag('config', 'UA-168445645-1');
        `,
          }}
        />

        <title>
          Rain water harvesting techniques in India | V-Wire Technology and
          Design | Rainyfilters
        </title>
        <link rel="canonical" href="https://www.rainyfilters.com/technology" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="India is a land of rain and floods. And yet, every year we face water shortages. The need of the hour is to adopt rain water harvesting techniques to save and store water. V-Wire Technology and Design has come up with an innovative solution – the Rainyfilters."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Open+Sans&family=Raleway&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: function googleTranslateElementInit() {
              /* eslint-disable no-new */
              new window.google.translate.TranslateElement(
                {
                  pageLanguage: "pt",
                },
                "google_translate_element"
              );
            },
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '587685655184685');
fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=587685655184685&ev=PageView&noscript=1"
/>`,
          }}
        />
      </Head>
      <main>
        <div className="App">
          <Header />

          <div className="container-fluid banner enternal">
            <div className="hero-image enthroimg">
              <img src="../static/images/technology/ourInnovativeTechnologyBanner.png" />
              {/* <div className='hero-text techbnnrtxt'>
								<h1 style={{color: 'white'}}>
									OUR INNOVATIVE
									<br />
									TECHNOLOGY
								</h1>
							</div> */}
            </div>
          </div>

          <div className="container-fluid techbgmain">
            <div className="container">
              <div className="techhedng">
                <h2 className="tech-heading">
                  KEY TECHNOLOGY & INNOVATION HIGHLIGHTS
                </h2>
                <p className="techpara">
                  Completely Indigenous and Patented Technology for Dual
                  Intensity Rainwater Harvesting Filters called 'Rainy'. For
                  groundwater recharging, our innovation uses an injection well
                  equipped with "V-Wire Screens" that enables replenishment of
                  groundwater source.
                </p>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="techlimg">
                    <img src="../static/images/technology/filterCrossSectionImage.jpg" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="techpointslst">
                    <ul>
                      <li>
                        <img
                          style={{
                            height: 25,
                            width: "auto",
                            paddingRight: 15,
                          }}
                          src="../static/images/elements/Path262.png"
                          alt="drop"
                        />
                        Rainwater is one of the purest source of water with less
                        then 50mg/ litre of Total Dissolved Solids (TDS).
                      </li>
                      {/* <li>
												<img
													style={{height: 25, width: "auto", paddingRight: 15}}
													src="../static/images/elements/Path262.png"
													alt="drop"
												/>
												Rainwater is one of the purest source of water with
												less then 50mg/ litre of total Dissolved Solids (TDS).
											</li> */}
                      <li>
                        <img
                          style={{
                            height: 25,
                            width: "auto",
                            paddingRight: 15,
                          }}
                          src="../static/images/elements/Path262.png"
                          alt="drop"
                        />
                        Minimalistic, easy-to-install and easy to maintain
                        Products
                      </li>
                      <li>
                        <img
                          style={{
                            height: 25,
                            width: "auto",
                            paddingRight: 15,
                          }}
                          src="../static/images/elements/Path262.png"
                          alt="drop"
                        />
                        Reduction of Carbon Footprint and Recharge water source
                        to avail clean water for consumption.
                      </li>
                    </ul>

                    <div className="groundwaterstxt">
                      <button
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        Read More{" "}
                        <i class="fa fa-angle-right" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
						Launch demo modal
					</button> */}

          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Key Technology & Innovation Highlights
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      <img
                        style={{ height: 25, width: "auto", paddingRight: 15 }}
                        src="../static/images/elements/Path262.png"
                        alt="drop"
                      />
                      Indirectly reduces power consumed in pumping and checks
                      overexploitation of groundwater by establishing water
                      neutrality.
                    </li>
                    <li style={{ fontSize: 14 }}>
                      <img
                        style={{ height: 25, width: "auto", paddingRight: 15 }}
                        src="../static/images/elements/Path262.png"
                        alt="drop"
                      />
                      A team of professionals with over 20+ years of hands on
                      experience in the RWH industry enabling cutting edge
                      innovation of RWH solutions
                    </li>
                    <li style={{ fontSize: 14 }}>
                      <img
                        style={{ height: 25, width: "auto", paddingRight: 15 }}
                        src="../static/images/elements/Path262.png"
                        alt="drop"
                      />
                      A state of the art R&D facility for continuous innovation
                      and ongoing training of our qualified staff
                    </li>
                    <li style={{ fontSize: 14 }}>
                      <img
                        style={{ height: 25, width: "auto", paddingRight: 15 }}
                        src="../static/images/elements/Path262.png"
                        alt="drop"
                      />
                      Live Demonstration vehicles on RWH are deployed all over
                      the country to spread awareness and show a glimpse of the
                      varied benefits that RWH has in water conservation
                    </li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid techcntrbg">
            <h2 style={{ textAlign: "center" }}>'RAINY' FILTERS</h2>
          </div>

          <div
            className="container-fluid techbgmain"
            style={{ paddingTop: "50px" }}
          >
            <div className="container">
              <div className="row">
                <div className="downloadsec">
                  <div id="accordion">
                    <div className="techaccrdn">
                      <div className="card-header" id="heading-1">
                        <h5 className="mb-0 mb0diff">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-11"
                            aria-expanded="false"
                            aria-controls="collapse-1"
                          >
                            Working Principle
                            <span className="mb-span mbspndiff">
                              Principles & Overview
                            </span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-11"
                        className="collapse"
                        data-parent="#accordion"
                        aria-labelledby="heading-1"
                      >
                        <div className="card-body">
                          <div className="row techacrsec">
                            <div className="col-md-12">
                              <div className="techpointslst">
                                <p
                                  style={{
                                    fontSize: 14,
                                    fontFamily: "Visby Round CF Heavy",
                                  }}
                                >
                                  When the rainwater along with dirt & debris
                                  flows by gravity through the downtake pipes,
                                  it enters into the filter and starts rotating
                                  in anticlockwise direction at the periphery of
                                  the upper housing, this enables it to flow
                                  into the SS-304 filter element placed in the
                                  lower housing in angular motion at specific
                                  speed & velocity, which creates cohesive force
                                  at low intensity & centrifugal force at high
                                  intensity of rainfall. In both situations,
                                  involving low & high intensity of rainfall,
                                  the working principle of the filter based on
                                  cohesive & centrifugal force respectively,
                                  aids the filter element to flush out dirt &
                                  debris automatically. The water then passes
                                  through the drain outlet and simultaneously
                                  diverts clean water into the sump/ recharging
                                  well through the clean water outlet, which can
                                  be used for reutilization or recharging of
                                  groundwater source.
                                </p>
                                {/* <ul>
																	<li>
																		<img
																			style={{
																				height: 25,
																				width: 'auto',
																				paddingRight: 15,
																			}}
																			src='../static/images/elements/Path262.png'
																			alt='drop'
																		/>
																		When the rainwater along with dirt & debris
																		flows by gravity through the downtake pipes,
																		it enters into the filter and starts
																		rotating in anticlockwise direction at the
																		periphery of the upper housing.
																	</li>
																	<li>
																		<img
																			style={{
																				height: 25,
																				width: 'auto',
																				paddingRight: 15,
																			}}
																			src='../static/images/elements/Path262.png'
																			alt='drop'
																		/>
																		This enables it to flow into the SS-304
																		filter element placed in the lower housing
																		in angular motion at specific speed &
																		velocity, which creates cohesive force at
																		low intensity & centrifugal force at high
																		intensity of rainfall.
																	</li>
																	<li>
																		<img
																			style={{
																				height: 25,
																				width: 'auto',
																				paddingRight: 15,
																			}}
																			src='../static/images/elements/Path262.png'
																			alt='drop'
																		/>
																		In both situations, involving low & high
																		intensity of rainfall, the working principle
																		of the filter based on cohesive &
																		centrifugal force respectively, aids the
																		filter element to flush out dirt & debris
																		automatically.
																	</li>
																	<li>
																		<img
																			style={{
																				height: 25,
																				width: 'auto',
																				paddingRight: 15,
																			}}
																			src='../static/images/elements/Path262.png'
																			alt='drop'
																		/>
																		The water then passes through the drain
																		outlet and simultaneously diverts clean
																		water into the sump/ recharging well through
																		the clean water outlet, which can be used
																		for reutilization or recharging of
																		groundwater source.
																	</li>
																</ul> */}
                              </div>
                            </div>
                            {/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="techaccrdn">
                      <div className="card-header" id="heading-2">
                        <h5 className="mb-0 mb0diff">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-12"
                            aria-expanded="false"
                            aria-controls="collapse-2"
                          >
                            Special Features
                            <span className="mb-span mbspndiff">
                              What makes 'Rainy' unique
                            </span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-12"
                        className="collapse"
                        data-parent="#accordion"
                        aria-labelledby="heading-2"
                      >
                        <div className="card-body">
                          <div className="row techacrsec">
                            <div className="col-md-12">
                              <div className="techpointslst">
                                <ul>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Dual Intensity Filters works on the
                                    principle of Cohesive & Centrifugal force.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    The open drain design does not allow
                                    stagnation of water and dirt particles.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Works on Gravitation force (No external
                                    energy required).
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Cost effective and affordable.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Compact in size and wall mounted.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Inbuilt self-cleaning mechanism.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Automatic flush out of dirt and debris.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    No consumables required.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Flexibility in pipe connection to any angle.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Tough UV stabilized high density
                                    polyethylene housing.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Filter Element SS-304 Multi-Surface Screen
                                    food grade.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    All the material used are food grade and
                                    recyclable.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Filter Pipe connections can be turned up to
                                    360 Degrees allowing it to suit the given
                                    site conditions.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Simple in connection, which any local
                                    plumber can easily install.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    The filter efficiency remains unchanged even
                                    with the variation of intensity of rainfall.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    The filters do not have any moving parts;
                                    there is no wear & tear of the filter
                                    allowing for long life span.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Technology works on the Gravitational
                                    Principle so saves power (reduces the
                                    pumping of water from distant places &
                                    depths).
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Swirling movement of water is formed while
                                    ‘Rainy’ filters are under operation, this
                                    leads to aeration of water. Thus, increases
                                    the water quality.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="techaccrdn">
                      <div className="card-header" id="heading-3">
                        <h5 className="mb-0 mb0diff">
                          <a
                            // className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-13"
                            aria-expanded="false"
                            aria-controls="collapse-3"
                          >
                            Advantages
                            <span className="mb-span mbspndiff">
                              How 'Rainy' can be used to conserve water
                            </span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-13"
                        className="collapse"
                        data-parent="#accordion"
                        aria-labelledby="heading-3"
                      >
                        <div className="card-body">
                          <div className="row techacrsec">
                            <div className="col-md-12">
                              <div className="techpointslst">
                                <ul>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    By storing water in the sump and
                                    reutilizing, around 35% of the annual
                                    requirement of water in a household can be
                                    met. Thereby a considerable amount on the
                                    water and power bill can be saved.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Dependency on water tankers, groundwater and
                                    corporation water can also be much reduced
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    All materials used in this Technology are
                                    eco-friendly and recyclable
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Reduces significant carbon foot print
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Technology works on the Gravitational
                                    Principle and reduces the pumping of water
                                    from distant places & depths
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Checks overexploitation of groundwater
                                    source.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Prevents water logging in low lying areas.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    For an average rainfall of 800 MM per year
                                    over a rooftop of 250 Sq.m, 'Rainy' Filter
                                    can harvest average 2,00,000 litres of
                                    precious filtered water.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid techcntrbg techcntrbgto">
            <h3 style={{ textAlign: "center" }}>GROUNDWATER RECHARGING</h3>
          </div>

          <div
            className="container-fluid techbgmain"
            style={{ paddingTop: "50px" }}
          >
            <div className="container">
              <div className="row">
                <div className="downloadsec">
                  <div id="accordion1">
                    <div className="techaccrdn">
                      <div className="card-header" id="heading-2">
                        <h5 className="mb-0 mb0diff">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-22"
                            aria-expanded="false"
                            aria-controls="collapse-2"
                          >
                            V-Wire Technology
                            <span className="mb-span mbspndiff">
                              Design and Technique
                            </span>
                          </a>
                        </h5>
                      </div>

                      <div
                        id="collapse-22"
                        className="collapse"
                        data-parent="#accordion1"
                        aria-labelledby="heading-2"
                      >
                        <div className="card-body">
                          <div className="row techacrsec">
                            {/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
                            <div className="col-md-12">
                              <div className="techpointslst">
                                <h5>
                                  FL-V-WIRE INJECTION WELL TECHNOLOGY for runoff
                                  rainwater harvesting and recharge.
                                </h5>
                                <h6>Objectives:</h6>
                                <p
                                  style={{
                                    fontFamily: "Visby Round CF Heavy",
                                    fontSize: 14,
                                  }}
                                >
                                  To develop a Point Source Artificial
                                  Groundwater Recharge structure which can
                                  recuperate dried bore wells within a very
                                  short timeframe employing an enhanced rate of
                                  recharge capturing the surface runoffs.
                                </p>
                                <p
                                  style={{
                                    fontFamily: "Visby Round CF Heavy",
                                    fontSize: 14,
                                  }}
                                >
                                  The FL V-Wire injection well technology
                                  invented by Farmland Rainwater Harvesting
                                  Systems in the year 2002 was significantly
                                  upgraded in the year 2007 due to constant
                                  research & development, both at the state of
                                  the art Hydraulic Research & Development Lab
                                  and at the field level. This technology is
                                  unique in many ways. It uses Gravitational
                                  Energy and the use of eco-friendly materials
                                  having a long-life span. The technology has
                                  gained wide spread acceptance by various
                                  Government Organizations in the State of
                                  Karnataka in Districts and Taluks which are
                                  highly drought prone, because of the positive
                                  results obtained in enhancing the water table
                                  in severely depleted areas. Hence, this
                                  technology has found wide acceptance in
                                  various Central and State Government sponsored
                                  sustainable schemes in providing water
                                  security for drinking and agriculture to the
                                  rural community in the drought-prone areas in
                                  many states of India. Because of the success
                                  obtained at the government level, the
                                  technology also gained ground in the private
                                  sector.
                                </p>
                                <p
                                  style={{
                                    fontFamily: "Visby Round CF Heavy",
                                    fontSize: 14,
                                  }}
                                >
                                  The system consists of a silt trap unit, a
                                  recharge well (5 to 6 meters with 20%
                                  filtration media consisting of crushed stone,
                                  gravels, coarse sand, activated carbon and
                                  charcoal; and the rest for storage of water)
                                  and a recharging bore (20 to 60 meters) at the
                                  bottom of the recharge well. The rain water is
                                  led through a water channel and first reaches
                                  the silt trap, which allows for silt to settle
                                  down in the chamber. The overflow water is led
                                  into the Injection Well fitted with the FL
                                  V-Wire filter unit through a horizontally
                                  connected pipe. It then passes through
                                  multilayer of filtration media placed at the
                                  top of the Injection Well.
                                </p>
                                <p
                                  style={{
                                    fontFamily: "Visby Round CF Heavy",
                                    fontSize: 14,
                                  }}
                                >
                                  The water accumulates below the filter media
                                  in a specially designed storage well, which
                                  creates a water column. The percolator pipe,
                                  attached to the non-clogging FL V-wire screen,
                                  is placed by boring through the permeable
                                  strata at higher depths of about 30 to 60
                                  meters below the ground level. The water then
                                  passes through the permeable strata by gravity
                                  and reaches the dry joints, cracks, weathered
                                  zone; and recharges the aquifer holding the
                                  groundwater. The water also gets filtered
                                  while passing through the permeable strata.
                                </p>
                                <img
                                  style={{ width: "auto" }}
                                  className="img-fluid"
                                  src="../static/images/technology/v-wire.jpg"
                                />
                                <h6>Benefits</h6>
                                <p
                                  style={{
                                    fontFamily: "Visby Round CF Heavy",
                                    fontSize: 14,
                                  }}
                                >
                                  Due to the installations of FL V-wire
                                  Injection Wells in many of the severely
                                  drought prone areas across the country, the
                                  groundwater table has significantly improved.
                                  The intervention through FL V-wire Injection
                                  Well technology led to hundreds of bore wells
                                  which had water tables more than 1000 feet
                                  below ground level being recharged to half
                                  their levels (450 to 500 feet). Due to acute
                                  shortage of power during the peak summer
                                  season, a vast majority of the farmers resort
                                  to diesel generators to pump out water. The
                                  energy requirement to pump out the water is
                                  directly proportional to the static head and
                                  quantum of water discharged, thereby
                                  significantly lowering the required pump
                                  capacity, with increase in water table and
                                  thus reduction in carbon emission.
                                </p>
                                <h6>Strengths</h6>
                                <p
                                  style={{
                                    fontFamily: "Visby Round CF Heavy",
                                    fontSize: 14,
                                  }}
                                >
                                  Farmland Rainwater Harvesting Systems is
                                  working closely with Government agencies and
                                  Private sectors on rejuvenation of the
                                  severely depleted bore wells in drought prone
                                  areas. Till now, it has undertaken more than
                                  20,000 installations of this technology. Many
                                  of these have been undertaken with the support
                                  of the Government under the National Rural
                                  Drinking Water Supply Programme - Suvarna Jala
                                  - and also through various Zilla Panchayats,
                                  Gram Panchayats, Municipalities, Urban and
                                  Rural Water Supply Boards; and Groundwater
                                  Development Agencies, Social Welfare
                                  Department, Industries, Corporate Sectors and
                                  others. The Groundwater Board of Bangalore is
                                  actively seeking their counsel in establishing
                                  a set of frameworks to develop relevant
                                  standards and benchmarks in the field of
                                  groundwater recharge. The implementation of FL
                                  V-wire technology has resulted in the
                                  rejuvenation of bore wells in peak summer
                                  months, thereby reducing the need for water
                                  supply through water tankers. In other
                                  instances, there is a remarkable improvement
                                  in the qualitative aspect of the water. The
                                  innovation provides twin benefits - it aids
                                  water recharge in dry and arid regions by
                                  addressing water requirements of a large
                                  section of society and also helps in avoiding
                                  new bore wells, need for tanker water and
                                  energy for water extraction. These help in
                                  obtaining a net positive carbon footprint and
                                  local community adaptation to water stress.
                                  The scalability of the innovation and its
                                  co-benefits has wider applicability in the
                                  context of climate change.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="techaccrdn">
                      <div className="card-header" id="heading-1">
                        <h5 className="mb-0 mb0diff">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-21"
                            aria-expanded="false"
                            aria-controls="collapse-1"
                          >
                            Salient Features
                            <span className="mb-span mbspndiff">
                              Scientific Solution
                            </span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-21"
                        className="collapse "
                        data-parent="#accordion1"
                        aria-labelledby="heading-1"
                      >
                        <div className="card-body">
                          <div className="row techacrsec">
                            {/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
                            <div className="col-md-12">
                              <div className="techpointslst">
                                <ul>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Unique Slot Structure: Owing to the unique
                                    design of the screen, which enables slots to
                                    be present horizontally and vertically there
                                    is continual flow without any interruption.
                                    Further, this ensures that there is
                                    sufficient open space for water to enter
                                    into this medium without much head loss due
                                    to friction. This system allows for the
                                    overall efficiency of the tube well to be
                                    improved.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Higher Filtration: Due to the slot-based
                                    approach of the v-wire technology, we are
                                    able to choose the size of the slots
                                    depending on the media around / in which it
                                    is going to be placed. This allows for high
                                    filtration of even the tiniest sand
                                    particles allowing for good control over
                                    particle infiltration thereby decreasing
                                    maintenance and increasing the life of the
                                    product.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Anti Clogging: The salient shape and
                                    structural design of the V-Wire screen
                                    ensures that no sand or other particles get
                                    clogged in the system. This unique V shape
                                    results in the screen having a long
                                    endurance with no maintenance.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Corrosion Free: High-grade material with
                                    anti-corrosive property is used to
                                    manufacture our screens and therefore
                                    assuring corrosion-free usage. This enables
                                    the longevity of the product.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="techaccrdn">
                      <div className="card-header" id="heading-3">
                        <h5 className="mb-0 mb0diff">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-23"
                            aria-expanded="false"
                            aria-controls="collapse-3"
                          >
                            Advantages
                            <span className="mb-span mbspndiff">
                              Benefits and Unique Features
                            </span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-23"
                        className="collapse"
                        data-parent="#accordion1"
                        aria-labelledby="heading-3"
                      >
                        <div className="card-body">
                          <div className="row techacrsec">
                            <div className="col-md-12">
                              <div className="techpointslst">
                                Technology Benefits:
                                <ul>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Due to the installations of the V- Wire
                                    Injection Well in many of the severely
                                    drought prone areas of Karnataka, the
                                    groundwater table has significantly
                                    improved.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    The intervention through V-Wire injection
                                    well technology led to hundreds of bore
                                    wells, which had water tables more than 1000
                                    feet below ground level being recharged to
                                    half their levels (450 to 500 feet).
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Reduces hardness , salinity and TDS contents
                                    in the groundwater sources.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Reduces the dependancy on water supply
                                    systems, the pumping of water from distant
                                    places, extraction of water from deeper
                                    depths and movement of water through
                                    tankers.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Excellent source of water both for drinking
                                    as well as agriculture and allied activities
                                    as the water is free from chemicals such as
                                    Fluoride and Chlorine, and so no dissolved
                                    salts and minerals from the soil.
                                  </li>
                                </ul>
                                Environmental Benefits:
                                <ul>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Recharge of groundwater, replenishes the
                                    deeper layers of the earth’s crust which in
                                    turn insulates the earth from rise in
                                    temperature, reducing global warming.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Rainwater can enhance limited ground
                                    resources. More importantly, with reduced
                                    drawing out of groundwater, low yield bore
                                    well and springs can last indefinitely.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Rainwater harvesting could significantly
                                    reduce water removal from rivers during
                                    critical summer months, ensuring reasonable
                                    water availability to support local
                                    ecosystems.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Seawater ingression can be checked in coast
                                    line.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Reduces surface runoff and loss of top soil,
                                    thereby avoids silting of ponds and lakes.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Groundwater recharging promotes water
                                    neutrality by diverting the rainwater into
                                    the earth’s strata, which otherwise would
                                    have been wasted.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    All materials used are Eco-friendly and
                                    recyclable.
                                  </li>
                                  <li>
                                    <img
                                      style={{
                                        height: 25,
                                        width: "auto",
                                        paddingRight: 15,
                                      }}
                                      src="../static/images/elements/Path262.png"
                                      alt="drop"
                                    />
                                    Adopting FL-V wire Technology, besides the
                                    existing bore well will help to sustain the
                                    yield of water for continuous use
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
