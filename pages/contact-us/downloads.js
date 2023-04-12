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
        <title>Download Our Product Information Brochures | Rainyfilters</title>
        <meta
          name="description"
          content="Access our comprehensive range of product information brochures for our innovative rainwater harvesting and groundwater recharge solutions. Download our 'Rainy' product catalogue, instructions manual, and detailed installation guide for 'Rainy' filters. Also, explore our case studies on groundwater recharging and learn about the impact of our solutions. Start your download now and discover how we can help you save water and protect the environment."
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/contact-us/downloads"
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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

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
              <img src="../../static/images/downloads/DownloadsBanner.png" />
              <div className="hero-text dwnldbnnrtxt">
                <h1>Downloads</h1>
              </div>
            </div>
          </div>

          <div className="container-fluid dnldbg">
            <div className="container">
              <div className="row">
                <div className="downloadsec">
                  <div id="accordion">
                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-1">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-1"
                            aria-expanded="false"
                            aria-controls="collapse-1"
                            style={{ color: "#58b8ef" }}
                          >
                            Brochures
                            <span className="mb-span">
                              View all the product info Brochures here
                            </span>
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-1"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-1"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-2">
                                <a
                                  href="../../static/pdf/rainyNewBrochure.pdf"
                                  target="_blank"
                                >
                                  <i
                                    className="fa fa-file-pdf-o fa-3x"
                                    aria-hidden="true"
                                  ></i>
                                </a>

                                <p>
                                  Rainy <br></br> brochure{" "}
                                </p>
                              </div>
                              <div className="col-md-2">
                                <a
                                  href="../../static/pdf/rainyNewLitreture.pdf"
                                  target="_blank"
                                >
                                  <i
                                    className="fa fa-file-pdf-o fa-3x"
                                    aria-hidden="true"
                                  ></i>
                                </a>

                                <p>
                                  Rainy Technical <br></br> Literature{" "}
                                </p>
                              </div>
                              <div className="col-md-2">
                                <a
                                  href="../../static/pdf/rainyPushNLockHdpePipeingSystem.pdf"
                                  target="_blank"
                                >
                                  <i
                                    className="fa fa-file-pdf-o fa-3x"
                                    aria-hidden="true"
                                  ></i>
                                </a>

                                <p>'Rainy' Push and lock HDPE Pipeing System</p>
                              </div>
                              <div className="col-md-4"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-2">
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-2"
                            aria-expanded="false"
                            aria-controls="collapse-2"
                            style={{ color: "#58b8ef" }}
                          >
                            'Rainy' Product Catalogue
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-2"
                        className="collapse"
                        data-parent="#accordion"
                        aria-labelledby="heading-2"
                      >
                        <div className="card-body">
                          {/* Lorum ipsom is a dummy text, Here is a text is only
													for test. */}
                          {/* <div className="container-fluid">
														<div className="row">
															<div className="col-md-2">
																<a
																	href="../../static/pdf/FL-80UserManual.pdf"
																	target="_blank"
																>
																	<i
																		className="fa fa-file-pdf-o fa-3x"
																		aria-hidden="true"
																	></i>
																</a>

																<p>
																	FL 80 <br></br> User Manual{" "}
																</p>
															</div>
															<div className="col-md-2"></div>
															<div className="col-md-4"></div>
														</div>
													</div> */}
                        </div>
                      </div>
                    </div>
                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-3">
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-3"
                            aria-expanded="false"
                            aria-controls="collapse-3"
                            style={{ color: "#58b8ef" }}
                          >
                            Instructions Manual
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-3"
                        className="collapse"
                        data-parent="#accordion"
                        aria-labelledby="heading-3"
                      >
                        <div className="card-body">
                          {/* Lorum ipsom is a dummy text, Here is a text is only
													for test. */}
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-2">
                                <a
                                  href="../../static/pdf/rainyUserGuideFl-80.pdf"
                                  target="_blank"
                                >
                                  <i
                                    className="fa fa-file-pdf-o fa-3x"
                                    aria-hidden="true"
                                  ></i>
                                </a>

                                <p>
                                  FL 80 <br></br> User Manual{" "}
                                </p>
                              </div>
                              <div className="col-md-2">
                                <a
                                  href="../../static/pdf/rainyUserGuideFl-150.pdf"
                                  target="_blank"
                                >
                                  <i
                                    className="fa fa-file-pdf-o fa-3x"
                                    aria-hidden="true"
                                  ></i>
                                </a>

                                <p>
                                  FL 150 <br></br> User Manual{" "}
                                </p>
                              </div>
                              <div className="col-md-2">
                                <a
                                  href="../../static/pdf/rainyUserGuideFl-250.pdf"
                                  target="_blank"
                                >
                                  <i
                                    className="fa fa-file-pdf-o fa-3x"
                                    aria-hidden="true"
                                  ></i>
                                </a>

                                <p>
                                  FL 250 <br></br> User Manual{" "}
                                </p>
                              </div>
                              <div className="col-md-2">
                                <a
                                  href="../../static/pdf/rainyUserGuideFl-300NFL-500.pdf"
                                  target="_blank"
                                >
                                  <i
                                    className="fa fa-file-pdf-o fa-3x"
                                    aria-hidden="true"
                                  ></i>
                                </a>

                                <p>
                                  FL 300 & FL 500 <br></br> User Manual{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-2">
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-5"
                            aria-expanded="false"
                            aria-controls="collapse-2"
                            style={{ color: "#58b8ef" }}
                          >
                            ‘Rainy’ Filters Detailed Installation Guide
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-5"
                        className="collapse"
                        data-parent="#accordion"
                        aria-labelledby="heading-2"
                      >
                        <div className="card-body">
                          {/* Lorum ipsom is a dummy text, Here is a text is only
													for test. */}
                          {/* <div className="container-fluid">
														<div className="row">
															<div className="col-md-2">
																<a
																	href="../../static/pdf/FL-80UserManual.pdf"
																	target="_blank"
																>
																	<i
																		className="fa fa-file-pdf-o fa-3x"
																		aria-hidden="true"
																	></i>
																</a>

																<p>
																	FL 80 <br></br> User Manual{" "}
																</p>
															</div>
															<div className="col-md-2"></div>
															<div className="col-md-4"></div>
														</div>
													</div> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="acrdinbrdr"
                      style={{ borderBottom: "2px solid #58b8ef" }}
                    >
                      <div className="card-header" id="heading-2">
                        <h5 className="mb-0">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-4"
                            aria-expanded="false"
                            aria-controls="collapse-2"
                            style={{ color: "#58b8ef" }}
                          >
                            Case Studies On Groundwater Recharging
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-4"
                        className="collapse"
                        data-parent="#accordion"
                        aria-labelledby="heading-2"
                      >
                        <div className="card-body">
                          {/* Lorum ipsom is a dummy text, Here is a text is only
													for test. */}
                          {/* <div className="container-fluid">
														<div className="row">
															<div className="col-md-2">
																<a
																	href="../../static/pdf/FL-80UserManual.pdf"
																	target="_blank"
																>
																	<i
																		className="fa fa-file-pdf-o fa-3x"
																		aria-hidden="true"
																	></i>
																</a>

																<p>
																	FL 80 <br></br> User Manual{" "}
																</p>
															</div>
															<div className="col-md-2"></div>
															<div className="col-md-4"></div>
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
          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
