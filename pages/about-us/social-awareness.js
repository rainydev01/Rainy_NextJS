import { Fragment } from "react";
import Head from "next/head";

import Header from "../../components/Header";

import Footer from "../../components/Footer";

import ImageSlider from "../../components/ImageSliderMultiSocial";

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
          Helping Create a Social Awareness | Rainy Filters | Rainwater
          Harvesting Projects
        </title>
        <meta
          name="description"
          content="Have you ever considered how you can help make a difference in the world? There are many ways to get involved, but one easy way is to simply install a Rainy Filter on your rainwater harvesting system. By doing this, you can help to raise awareness about the importance of water conservation and also help to provide clean water for those in need. Learn more about how you can help make a difference today."
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/about-us/social-awareness"
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

          {/* <div className='container-fluid sawar'>
						<h1>SOCIAL AWARENESS</h1>
					</div> */}

          <div className="container-fluid banner enternal">
            <div className="hero-image enthroimg">
              <img src="../../static/images/socialAwareness/socialAwarenessBanner.png" />
              {/* <div className="hero-text inthemedia">
                <h1 style={{ textAlign: "center" }}>SOCIAL AWARENESS</h1>
              </div> */}
            </div>
          </div>

          <div className="container-fluid ">
            <div className="container ">
              <div className="row groundwatersec social-image2 mt-2">
                <div className="col-md-12 col-xs-12 col-lg-6  mt-2">
                  <div className="groundwatersimg ml-2">
                    <img
                      className="img-fluid"
                      src="../../static/images/socialAwareness/socialAwareness3.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-12 col-xs-12 col-lg-6 mt-2">
                  <div
                    className="groundwaterstxt "
                    style={{ paddingTop: "20px" }}
                  >
                    <h3 className="text-left">Social Awareness Initiatives</h3>
                    <p className="text-left">
                      We have a fleet of Mobile live demonstration units to
                      realise our mission of conserving every drop of rainwater.
                      These vehicles travel across India to demonstrate
                      rainwater harvesting. We have joined hands with the
                      Government of India under the JALA SHAKTHI ABHIYAN, to
                      spread awareness on water conservation by using these
                      units. In addition, some more benefits of this program
                      are:
                      <br />
                      <img
                        style={{ height: 25, width: "auto", paddingRight: 15 }}
                        src="../static/images/elements/Path262.png"
                        alt="drop"
                      />{" "}
                      Use of the mobile live demonstration unit for educational
                      purposes. Through this our experts provide informative
                      sessions on understanding not only the importance of rainw
                      ater harvesting, but also the methods used and the
                      outcomes. We firmly beleive that awareness and education
                      about rainwater harvesting will help shape a better
                      future.
                      <br />
                      <img
                        style={{ height: 25, width: "auto", paddingRight: 15 }}
                        src="../static/images/elements/Path262.png"
                        alt="drop"
                      />{" "}
                      The demonstration of rainwater harvesting using our mobile
                      units is done not only in schools, engineering colleges
                      and universities, but also in industrial exhibitions,
                      seminars, international and national expos, agricultural
                      expos, sustainability-based events etc. to echo the theme
                      of conservation of rainwater.
                      <br />
                      {/* &#9679; The educational sessions provided using the Mobile
											has proved to be effective in reaching out to young minds
											and motivating them to build a greener planet.
											<br /> */}
                      {/* <img
												style={{height: 25, width: "auto", paddingRight: 15}}
												src="../static/images/elements/Path262.png"
												alt="drop"
											/>{" "}
											We firmly beleive that awareness and education on
											rainwater harvesting will help shape a better future. */}
                    </p>

                    {/* <button>Read More</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ImageSlider></ImageSlider>

          <div className="container-fluid">
            <div className="container groundwaterSocial">
              <div
                style={{ marginTop: "8%" }}
                className="row groundwatersec social-image1 mb-4 text-center"
              >
                <div className="col-md-12 col-xs-12 col-lg-6 text-center ">
                  <div
                    className="groundwaterstxt ml-2"
                    style={{ paddingTop: "20px" }}
                  >
                    <h3 className="text-left">Social Responsibility</h3>
                    <p className="text-left">
                      Farmland Rainwater Harvesting Systems has setup its
                      Research and Manufacturing Plant in an area of 5 acres At
                      Hadihalli Village in Malalur Gram Panchayath limits of
                      Chikmagalur District- known for its Coffee Fragrance.
                      Using advanced and modern technology, the plant had been
                      conserving rain water drop by drop from the last three
                      years and has played a pivotal role in improving the
                      groundwater source. Our Company has never forgotten its
                      social responsibility at any point of time. Whenever any
                      calamities occurred in the country the Company feels proud
                      to say that it has fulfilled its responsibility with great
                      interest. It is known that COVID-19 pandemic wreaked havoc
                      in 2020 and affected all sectors. During this period
                      Farmland Rainwater Harvesting Systems, realizing its
                      responsibility, responded positively to problems faced by
                      the people.
                    </p>
                    <button data-toggle="modal" data-target="#socialAwareness">
                      Read More{" "}
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </button>
                    <div
                      style={{ zIndex: 9999999999 }}
                      className="modal fade bd-example-modal-lg"
                      id="socialAwareness"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-lg modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content ">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLongTitle"
                            >
                              Social Responsibility
                            </h5>
                            <button
                              style={{
                                color: "black",
                                background: "transparent",
                                border: "none",
                              }}
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Such a horrible situations arose that laborers who
                              migrated to other districts in search of jobs were
                              beset with disrupted life. They found it very
                              difficult to keep on their livelihood. At that
                              time Farmland Rainwater Harvesting Systems came to
                              the rescue of people who returned to KADEMAKKI
                              village. We united these families and motivated
                              them towards COMMUNITY FARMING. These 17 families
                              who are marginal farmers with one or two acres of
                              land holding had the problem of water for
                              cultivation. The Company which had stored
                              rainwater in the research plant, provided that
                              water through pipes and pump sets to irrigate over
                              50 acres of land free of cost. Now that drought
                              prone land is rejuvenated with green cover as the
                              farmers are growing vegetables and food crops to
                              sustain their income. The farmers are now quite
                              happy and are grateful to the company for timely
                              help. Apart from this, the Company has been
                              supplying free drinking water to villages in the
                              vicinity that faced drinking water crisis. During
                              COVID-19 lockdown hundreds of poor people faced
                              food problem. At that time the Company distributed
                              food kits to them. The journalists too struggled
                              hard during this critical period to keep the
                              pandemic under control. They were also given food
                              kits to help their families.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              style={{
                                color: "black",
                              }}
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
                  </div>
                </div>
                <div className="col-md-12 col-xs-12 col-lg-6 ">
                  <div className="groundwatersimg ml-2">
                    <img
                      className="img-fluid"
                      src="../../static/images/socialAwareness/socialAwareness2.jpg"
                    />
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
