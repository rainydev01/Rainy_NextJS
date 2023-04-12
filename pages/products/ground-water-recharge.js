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
          Artificial recharge of groundwater | groundwater recharge system -
          Rainyfilters
        </title>
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/products/ground-water-recharge"
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
          content="Looking for an artificial groundwater recharge system? Rainyfilters is one of the best rain water harvesting companies in India. We offer a wide range of products and services to help you recharge your groundwater levels. Contact us today for a free consultation."
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
              <img src="../../static/images/groundWater/groundWaterRechargeBanner.png" />
              {/* <div className='hero-text rnyfltrs'>
								<h1>GROUNDWATER RECHARGING</h1>
							</div> */}
            </div>
          </div>

          <div className="container-fluid wthothding wrechargmain">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="rainyfilterimg"
                    style={{ float: "right", marginRight: "45px" }}
                  >
                    <img src="../../static/images/groundWater/IMG_9341.png" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="techpointslst wrechrg">
                    <p>
                      Groundwater recharging is done using V-Wire Injection Well
                      Technology. This modern methodology uses V-Wire Screens
                      for filtration. This works on gravitational force and does
                      not require any energy, making it durable with a long life
                      span.
                    </p>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="rnyfltrbtn">
                          <Link href="/contact-us/enquire">
                            <a>
                              <button id="rnenq">
                                Enquire Now{" "}
                                <i
                                  style={{ padding: 5 }}
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                />
                              </button>
                            </a>
                          </Link>
                        </div>
                      </div>
                      {/* <div class="col-md-6">
												<div className="rnyfltrbtn">
													<button id="rnrdmr">
														Technical Specifications
														<i
															style={{paddingLeft: 5}}
															class="fa fa-angle-right"
															aria-hidden="true"
														/>
													</button>
												</div>
											</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid wthothding"
            style={{ paddingTop: "30px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="gr3">
                    <img
                      style={{ borderRadius: 20 }}
                      className="img-fluid"
                      src="../../static/images/groundWater/small1.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="gr3">
                    <img
                      style={{ borderRadius: 20 }}
                      className="img-fluid"
                      src="../../static/images/groundWater/small2.png"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="gr3">
                    <img
                      style={{ borderRadius: 20 }}
                      className="img-fluid"
                      src="../../static/images/groundWater/small3.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="m-5">
                    <img
                      className="img-fluid"
                      src="../../static/images/groundWater/inj.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="wrechrgngtbl">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td style={{ width: "40%" }} className="borderRight">
                        Suitable up to area:
                      </td>
                      <td>
                        1 to 8 acres, depends on the terrain and Earth strata
                      </td>
                    </tr>
                    <tr>
                      <td className="borderRight">
                        Max: Intensity of Rainfall:
                      </td>
                      <td>12.5 - 75 mm/hr</td>
                    </tr>
                    <tr>
                      <td className="borderRight">Working Principle :</td>
                      <td>Gravitational Water Column Pressure</td>
                    </tr>
                    <tr>
                      <td className="borderRight">Operating Pressure:</td>
                      <td>0.05-0.6 kg/ cm2</td>
                    </tr>
                    <tr>
                      <td className="borderRight">Percolation Capacity:</td>
                      <td>25000 to 50000 liters in 24 hours</td>
                    </tr>

                    <tr>
                      <td className="borderRight">
                        Filter Unit for Injection:
                      </td>
                      <td>SS-304 V-Wire Screen</td>
                    </tr>
                    <tr>
                      <td className="borderRight">Slot Size:</td>
                      <td>0.75mm</td>
                    </tr>
                    <tr>
                      <td className="borderRight">
                        Discharge Capacity of V-Wire:
                      </td>
                      <td>5-20 Liters per second</td>
                    </tr>
                    <tr>
                      <td className="borderRight">Percolator Pipe: </td>
                      <td>
                        140 mm HDPE pipe with 8 mm spirally perforated holes at
                        30 mm intervals
                      </td>
                    </tr>
                    <tr>
                      <td className="borderRight">
                        Diameter of Injection Well:
                      </td>
                      <td>1350 to 2100 mm</td>
                    </tr>
                    <tr>
                      <td className="borderRight">Depth of Injection Well:</td>
                      <td>5 to 6 m</td>
                    </tr>
                    <tr>
                      <td className="borderRight">
                        Diameter of Recharging Bore:
                      </td>
                      <td>225 mm</td>
                    </tr>
                    <tr>
                      <td className="borderRight">
                        Depth of the Recharging Bore:
                      </td>
                      <td>20 to 60 m depending on the permeable layer</td>
                    </tr>
                    <tr>
                      <td className="borderRight">
                        Diameter of the SILT Trap Unit:
                      </td>
                      <td>1000 to 1350 mm</td>
                    </tr>
                    <tr>
                      <td className="borderRight">
                        Depth of the SILT Trap Unit:
                      </td>
                      <td>1 to 3 m</td>
                    </tr>
                    <tr>
                      <td className="borderRight">
                        Diameter of the Filter Unit in Silt Trap:
                      </td>
                      <td>
                        SS-304 Horizontal Mount – 150 to 200 mm, Slot Size: 3 mm
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                    Click here for Case studies on Groundwater Recharging{" "}
                  </a>
                </Link>
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>
          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
