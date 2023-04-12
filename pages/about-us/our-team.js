import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import ImageSliderTeam from "../../components/ImageSliderTeam";
import ImageSliderTeam from "../../components/ImageSliderMultiTeam";

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

        <title>Rainyfilters - Experienced and Professional Team</title>
        <meta
          name="description"
          content="Our leadership team bring in diverse experience of over 20 years in the Rainwater Harvesting industry. This knowledge enables them to lead with integrity and fairness, thereby steering the company toward greater heights."
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/about-us/our-team"
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
          <div className="container-fluid banner enternal">
            <div className="hero-image enthroimg">
              <img src="../../static/images/ourTeam/ourExecutiveTeamBanner.png" />
              {/* <div className="hero-text entteamtxt">
                <h1>OUR EXECUTIVE TEAM</h1>
              </div> */}
            </div>
          </div>
          <div className="container-fluid groundwater_bg team">
            <div className="container">
              <h2 className="team-heading">
                EXPERIENCED AND PROFESSIONAL TEAM
              </h2>
              <p className="team-para">
                Our leadership team bring in diverse experience of over 2
                decades in the Rainwater Harvesting industry. This knowledge
                enables them to lead with integrity and fairness, thereby
                steering the company toward greater heights.
              </p>
            </div>

            <div className="container team-row-sec">
              <div className="row team-row">
                <div className="col-md-6">
                  <div>
                    <img src="../../static/images/ourTeam/Group1195.jpg" />
                  </div>
                  <div>
                    <h4 className="team-title">Michael Sadananda Baptist</h4>
                    <p className="team-desc">Co-founder & Director</p>
                    <div style={{ textAlign: "center" }}>
                      {/* <p>
												<i
													style={{paddingRight: 5}}
													className='fa fa-mobile'
													aria-hidden='true'
												/>
												+91 94480 76595
											</p> */}
                      <p>
                        <i
                          style={{ paddingRight: 5 }}
                          className="fa fa-envelope-o"
                          aria-hidden="true"
                        />
                        michael@rainyfilters.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img src="../../static/images/ourTeam/Group1235.png" />
                  </div>
                  <div>
                    <h4 className="team-title">Vijayaraj Shishodya</h4>
                    <p className="team-desc">Co-founder & Director</p>
                    {/* <p>
											<i
												style={{paddingRight: 5}}
												className='fa fa-mobile'
												aria-hidden='true'
											/>
											+91 94481 30524
										</p> */}
                    <p>
                      <i
                        style={{ paddingRight: 5 }}
                        className="fa fa-envelope-o"
                        aria-hidden="true"
                      />
                      vijayaraj@rainyfilters.com
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="row team-row"
                style={{ marginTop: "60px", marginTop: "60px" }}
              >
                <div className="col-md-6">
                  <div>
                    <img src="../../static/images/ourTeam/Group1196.jpg" />
                  </div>
                  <div>
                    <h4 className="team-title">Sunil Gilbert Baptist</h4>
                    <p className="team-desc">Co-founder & Director</p>
                    {/* <p>
											<i
												style={{paddingRight: 5}}
												className='fa fa-mobile'
												aria-hidden='true'
											/>
											+91 98809 76325
										</p> */}
                    <p>
                      <i
                        style={{ paddingRight: 5 }}
                        className="fa fa-envelope-o"
                        aria-hidden="true"
                      />
                      sunil@rainyfilters.com
                    </p>
                  </div>
                </div>
                {/* <div className="col-md-6">
									<div>
										<img src="../../static/images/ourTeam/Group1197.jpg" />
									</div>
									<div>
										<h4 className="team-title">Manoj Baptist</h4>
										<p className="team-desc">Director</p>
										<p>
											<i
												style={{paddingRight: 5}}
												className="fa fa-mobile"
												aria-hidden="true"
											/>
											+91 87221 54444
										</p>
										<p>
											<i
												style={{paddingRight: 5}}
												className="fa fa-envelope-o"
												aria-hidden="true"
											/>
											rainharvesting@gmail.com
										</p>
									</div>
								</div> */}
              </div>
            </div>
          </div>

          <ImageSliderTeam></ImageSliderTeam>

          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
