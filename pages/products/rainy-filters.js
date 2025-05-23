import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
          Roof top rain water harvesting system | Rooftop rainwater -
          Rainyfilters
        </title>
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/products/rainy-filters"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <meta
          name="description"
          content="Looking for a roof top rain water harvesting system? We have the best roof top rain water harvesting system for you. Our system is easy to install and is maintenance free. It is also eco-friendly and will help you save money on your water bill. Read more about our products here."
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" />
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
fbq('init', '342523378416057');
fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=342523378416057&ev=PageView&noscript=1"
/>`,
          }}
        />
      </Head>
      <main>
        <div className="App">
          <Header />
          <div className="container-fluid banner enternal">
            <div className="hero-image enthroimg">
              <img src="../../static/images/products/rainyFiltersBanner.png" alt="rainy water filter" />
              {/* <div className="hero-text rnyfltrs">
                <h1>'RAINY' FILTERS</h1>
              </div> */}
            </div>
          </div>

          <div className="container-fluid">
            <div className="container">
              <h2 class="whtdowdo">'RAINY' FILTERS</h2>
              <div className="row m-0">
                <div className="">
                  <br />
                  <br />
                  <h2 className="fl80">FL-80</h2>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "black",
                    }}
                  >
                    This open ended filter has auto flush out feature enabling
                    self cleaning, with unique working principle. FL-80 is
                    suitable for upto 120 sq.m rooftop area.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="rainyfilterimg">
                    <img src="../../static/images/products/FL_80-min.png" alt="rainwater harvesting  in india" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="techpointslst">
                    <table className="table table-striped  table-bordered ">
                      <tbody>
                        <tr>
                          <td style={{ width: "40%" }} className="borderRight">
                            Suitable for Area
                          </td>
                          <td>Upto 120 SQMTRS</td>
                        </tr>

                        <tr>
                          <td className="borderRight">Intensity of Rainfall</td>
                          <td>5 mm/Hour to 75 mm/Hour</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Type</td>
                          <td>Open ended, Non-clog</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Working Principle</td>
                          <td>Cohesive Force & Centrifugal Force</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Operating Pressure</td>
                          <td> 1 foot of Gravity Head (0.060kg/cm2)</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Max Discharge at (CWO)
                          </td>
                          <td>120 Liters per minute</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Element</td>
                          <td>SS-304 Multi-Surface Screen - Food Grade</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Mesh Size</td>
                          <td>250 Microns</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Inlet Size</td>
                          <td>90 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Clean Water Outlet size (CWO)
                          </td>
                          <td>63 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Drain Outlet size</td>
                          <td>90 MM</td>
                        </tr>

                        <tr>
                          <td className="borderRight">Filter Housing</td>
                          <td>UV Stabilized - HDPE</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Efficiency</td>
                          <td>Above 90%*</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Source of Power</td>
                          <td>Gravity</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container-fluid">
                      <div className="yellowbtn-row">
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <button
                              data-toggle="modal"
                              data-target="#fl80Dimension"
                            >
                              Overall <br></br>Dimension
                            </button>
                          </div>
                        </div>
                        {/* <div className="col-md-4">
													<div className="yellowbtn mt-1">
														<button
															data-toggle="modal"
															data-target="#fl80Installation"
														>
															On Site Installation
														</button>
													</div>
												</div> */}
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us/enquire"
                            >
                              <button>
                                Enquire <br /> Now
                              </button>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://shop.rainyfilters.com/products/rainy-fl-80-auto-self-cleaning-rainwater-harvesting-filter-pack-suitable-for-area-upto-1300-square-feet"
                            >
                              <button >
                                Buy <br />
                                Online
                              </button>
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://amzn.eu/d/5MzsYHB"
                            >
                              <button >
                                Buy on<br />
                                Amazon
                              </button>
                            </a>
                          </div>
                        </div>
                        {/* <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us"
                            >
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="fl80Dimension"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    FL-80 - Overall Dimension
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img
                    src="../../static/images/filters/FL-80.png"
                    className="img-fluid"
                    alt="FL-100"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div
						className="modal fade"
						id="fl80Installation"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div className="modal-dialog modal-dialog-centered" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLongTitle">
										FL-80 - On Site Installation
									</h5>
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">...</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div> */}

          <div className="container-fluid fl100">
            <div className="container">
              <div className="row m-0">
                <div className="">
                  <h2 className="fl80">FL-150</h2>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "black",
                    }}
                  >
                    This open ended filter has auto flush out feature enabling
                    self cleaning with unique working principle. FL-150 is
                    suitable for 120 to 180 sq.m rooftop area.
                  </p>
                </div>
                <div className="col-md-8">
                  <div className="techpointslst">
                    <table className="table table-striped  table-bordered ">
                      <tbody>
                        <tr>
                          <td style={{ width: "40%" }} className="borderRight">
                            Suitable for Area
                          </td>
                          <td>Upto 180 SQMTRS</td>
                        </tr>

                        <tr>
                          <td className="borderRight">Intensity of Rainfall</td>
                          <td>5 mm/Hour to 75 mm/Hour</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Type</td>
                          <td>Open ended, Non-clog</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Working Principle</td>
                          <td>Cohesive Force & Centrifugal Force</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Operating Pressure</td>
                          <td> 1 foot of Gravity Head (0.060kg/cm2)</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Max Discharge at (CWO)
                          </td>
                          <td>180 Liters per minute</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Element</td>
                          <td>SS-304 Multi-Surface Screen - Food Grade</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Mesh Size</td>
                          <td>250 Microns</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Inlet size</td>
                          <td>90 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Clean Water Outlet size (CWO)
                          </td>
                          <td>75 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Drain Outlet size</td>
                          <td>90 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Housing</td>
                          <td>UV Stabilized - HDPE</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Efficiency</td>
                          <td>Above 90%*</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Source of Power</td>
                          <td>Gravity</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container-fluid">
                      <div className="yellowbtn-row">
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <button
                              data-toggle="modal"
                              data-target="#fl100Dimension"
                              style={{width: "140px", height:"55px"}}>
                              Overall <br></br> Dimension
                            </button>
                          </div>
                        </div>
                        {/* <div className="col-md-4">
													<div className="yellowbtn mt-1">
														<button
															data-toggle="modal"
															data-target="#fl100Installation"
														>
															On Site Installation
														</button>
													</div>
												</div> */}
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us/enquire"
                            >
                              <button> Enquire <br /> Now </button>
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://shop.rainyfilters.com/products/rainy-fl-150-auto-self-cleaning-rainwater-harvesting-filter-suitable-for-area-upto-1900-square-feet"
                            >
                              <button> Buy <br /> Online </button>
                            </a>
                          </div>
                        </div>
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://amzn.eu/d/9CsFRjN"
                            >
                              <button> Buy on<br /> Amazon </button>
                            </a>
                          </div>
                        </div>
                        {/* <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us"
                            >
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="rainyfilterimg">
                    <img src="../../static/images/products/FL_150-min.png" alt="rain harvesting" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade "
            id="fl100Dimension"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    FL-150 - Overall Dimension
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img
                    src="../../static/images/filters/FL-150.png"
                    className="img-fluid"
                    alt="FL-100"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="fl100Installation"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    FL-150 - On Site Installation
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid fl200fltr">
            <div className="container">
              <div className="row m-0">
                <div className="">
                  <h2 className="fl80">FL-250</h2>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "black",
                    }}
                  >
                    This open ended filter has auto flush out feature enabling
                    self cleaning with unique working principle. FL-250 is
                    suitable for 180 to 250 sq.m rooftop area.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="rainyfilterimg">
                    <img src="../../static/images/products/FL_200-min.png" alt="rainwater filter for home" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="techpointslst">
                    <table className="table table-striped  table-bordered ">
                      <tbody>
                        <tr>
                          <td style={{ width: "40%" }} className="borderRight">
                            Suitable for Area
                          </td>
                          <td> Upto 250 SQMTRS</td>
                        </tr>

                        <tr>
                          <td className="borderRight">Intensity of Rainfall</td>
                          <td>5mm/Hour to 75 mm/Hour</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Type</td>
                          <td>Open ended, Non-clog</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Working Principle</td>
                          <td>Cohesive Force & Centrifugal Force</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Operating Pressure</td>
                          <td> 1 foot of Gravity Head (0.060kg/cm2)</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Max Discharge at (CWO)
                          </td>
                          <td>250 Liters per minute</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Element</td>
                          <td>SS-304 Multi-Surface Screen -Food Grade</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Mesh Size</td>
                          <td>250 Microns</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Inlet size</td>
                          <td>110 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Clean Water Outlet size (CWO)
                          </td>
                          <td>90 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Drain Outlet size</td>
                          <td>90 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Housing</td>
                          <td>UV Stabilized - HDPE</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Efficiency</td>
                          <td>Above 90%*</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Source of Power</td>
                          <td>Gravity</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container-fluid">
                      <div className="yellowbtn-row">
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <button
                              data-toggle="modal"
                              data-target="#fl200Dimension"
                            >
                              Overall <br></br> Dimension
                            </button>
                          </div>
                        </div>
                        {/* <div className="col-md-4">
													<div className="yellowbtn mt-1">
														<button
															data-toggle="modal"
															data-target="#fl200Installation"
														>
															On Site Installation
														</button>
													</div>
												</div> */}
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us/enquire"
                            >
                              <button>
                                Enquire <br /> Now
                              </button>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://shop.rainyfilters.com/products/rainy-fl-250-auto-self-cleaning-rainwater-harvesting-filter-suitable-for-area-upto-2700-square-feet"
                            >
                              <button>
                                Buy <br />
                                Online
                              </button>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://amzn.eu/d/6cvKWmm"
                            >
                              <button >
                                Buy on<br />
                                Amazon
                              </button>
                            </a>
                          </div>
                        </div>
                        {/* <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us"
                            >
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="fl200Dimension"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                    FL-250 - Overall Dimension
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img
                    src="../../static/images/filters/FL_250.jpeg"
                    className="img-fluid"
                    alt="FL-250"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="fl200Installation"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    FL-250 - On Site Installation
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid fl100">
            <div className="container">
              <div className="row m-0">
                <div className="">
                  <h2 className="fl80">FL-350</h2>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "black",
                    }}
                  >
                    This open ended filter has auto flush out feature enabling
                    self cleaning with unique working principle. FL-350 is
                    suitable for 225 to 375 sq.m rooftop area.
                  </p>
                </div>
                <div className="col-md-8">
                  <div className="techpointslst">
                    <table className="table table-striped  table-bordered ">
                      <tbody>
                        <tr>
                          <td style={{ width: "40%" }} className="borderRight">
                            Suitable for Area
                          </td>
                          <td> Upto 375 SQMTRS</td>
                        </tr>

                        <tr>
                          <td className="borderRight">Intensity of Rainfall</td>
                          <td>5 mm/Hour to 75 mm/Hour</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Type</td>
                          <td>Open ended, Non-clog</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Working Principle</td>
                          <td>Cohesive Force & Centrifugal Force</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Operating Pressure</td>
                          <td> 1 foot of Gravity Head (0.060kg/cm2)</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Max Discharge at (CWO)
                          </td>
                          <td>360 Liters per minute</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Element</td>
                          <td>SS-304 Multi-Surface Screen - Food Grade</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Mesh Size</td>
                          <td>250 Microns</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Inlet size</td>
                          <td>110 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Clean Water Outlet size (CWO)
                          </td>
                          <td>110 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Drain Outlet size</td>
                          <td>90 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Housing</td>
                          <td>UV Stabilized - HDPE</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Efficiency</td>
                          <td>Above 90%*</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Source of Power</td>
                          <td>Gravity</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container-fluid">
                      <div className="yellowbtn-row">
                        <div>
                          <div className="yellowbtn mt-1">
                            <button
                              data-toggle="modal"
                              data-target="#fl300Dimension"
                            >
                              Overall <br></br> Dimension
                            </button>
                          </div>
                        </div>
                        {/* <div className="col-md-4">
													<div className="yellowbtn mt-1">
														<button
															data-toggle="modal"
															data-target="#fl300Installation"
														>
															On Site Installation
														</button>
													</div>
												</div> */}
                        <div>
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us/enquire"
                            >
                              <button>
                                Enquire <br /> Now
                              </button>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://shop.rainyfilters.com/products/rainy-fl-350-auto-self-cleaning-rainwater-harvesting-filter-suitable-for-area-upto-3800-square-feet"
                            >
                              <button>
                                Buy <br />
                                Online
                              </button>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://amzn.eu/d/ai9ifcn"
                            >
                              <button >
                                Buy on<br />
                                Amazon
                              </button>
                            </a>
                          </div>
                        </div>
                        {/* <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us"
                            >
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="rainyfilterimg">
                    <img src="../../static/images/products/FL_350-min1.png" alt="rain water harvesting images"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="fl300Dimension"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    FL-350 - Overall Dimension
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img
                    src="../../static/images/filters/FL_350.jpeg"
                    className="img-fluid"
                    alt="FL-350"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="fl300Installation"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    FL-350 - On Site Installation
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid fl500fltr">
            <div className="container">
              <div className="row m-0">
                <div className="">
                  <h2 className="fl80">FL-500</h2>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "black",
                    }}
                  >
                    This open ended filter has auto flush out feature enabling
                    self cleaning with unique working principle. FL-500 is
                    suitable for 350 to 500 sq.m rooftop area.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="rainyfilterimg">
                    <img src="../../static/images/products/FL_500-min.png" alt="rain water harvesting filter" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="techpointslst">
                    <table className="table table-striped  table-bordered ">
                      <tbody>
                        <tr>
                          <td style={{ width: "40%" }} className="borderRight">
                            Suitable for Area
                          </td>
                          <td> Upto 500 SQMTRS</td>
                        </tr>

                        <tr>
                          <td className="borderRight">Intensity of Rainfall</td>
                          <td>5 mm/Hour to 75 mm/Hour</td>
                        </tr>

                        <tr>
                          <td className="borderRight">Filter Type</td>
                          <td>Open ended, Non-clog</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Working Principle</td>
                          <td>Cohesive Force & Centrifugal force</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Operating Pressure</td>
                          <td> 1 foot of Gravity Head (0.060kg/cm2)</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Max Discharge at (CWO)
                          </td>
                          <td>480 Liters per minute</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Element</td>
                          <td>SS-304 Multi-Surface Screen - Food Grade</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Mesh Size</td>
                          <td>250 Microns</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Inlet size</td>
                          <td>110 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">
                            Clean Water Outlet size (CWO)
                          </td>
                          <td>110 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Drain Outlet size</td>
                          <td>110 MM</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Housing</td>
                          <td>UV Stabilized - HDPE</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Filter Efficiency</td>
                          <td>Above 90%*</td>
                        </tr>
                        <tr>
                          <td className="borderRight">Source of Power</td>
                          <td>Gravity</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container-fluid">
                      <div className="yellowbtn-row">
                        <div>
                          <div className="yellowbtn mt-1">
                            <button
                              data-toggle="modal"
                              data-target="#fl500Dimension"
                            >
                              Overall <br></br> Dimension
                            </button>
                          </div>
                        </div>
                        {/* <div className="col-md-4">
													<div className="yellowbtn mt-1">
														<button
															data-toggle="modal"
															data-target="#fl500Installation"
														>
															On Site Installation
														</button>
													</div>
												</div> */}
                        <div className="">
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us/enquire"
                            >
                              <button>
                                Enquire <br /> Now
                              </button>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://shop.rainyfilters.com/products/rainy-fl-500-auto-self-cleaning-rainwater-harvesting-filter-suitable-for-area-upto-5400-square-feet"
                            >
                              <button>
                                Buy <br />
                                Online
                              </button>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              target="_blank"
                              href="https://amzn.eu/d/bAYUYrB"
                            >
                              <button >
                                Buy on<br />
                                Amazon
                              </button>
                            </a>
                          </div>
                        </div>
                        {/* <div>
                          <div className="yellowbtn mt-1">
                            <a
                              style={{
                                fontFamily: "Visby Round CF Heavy",
                                fontSize: 16,
                              }}
                              href="/contact-us"
                            >
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="fl500Dimension"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    FL-500 - Overall Dimension
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img
                    src="../../static/images/filters/fl-500.png"
                    className="img-fluid"
                    alt="FL-500"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="fl500Installation"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    FL-500 - On Site Installation
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center">
              <p style={{ fontSize: 16 }}>
                <Link href="/contact-us/downloads">
                  <a style={{ fontSize: "16px" }}>
                    {" "}
                    Click here for detailed installation guide{" "}
                  </a>
                </Link>
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>

          <Footer />
        </div>
      </main>

    <div className="hero-image">

    <a href={`tel: ${+919996664458}`} target='_blank' className='phone-img'><img src='../static/images/phone.png' alt='phone' /></a>

      <a className="whatsapp-img" 
  href="https://wa.me/919996664458"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="../static/images/homepage/whatsapp.png" alt="whatsapp"/>
</a>
</div>

      <footer />
    </Fragment>
  );
}
