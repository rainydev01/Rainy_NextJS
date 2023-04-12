import { Fragment } from "react";
import Head from "next/head";
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
          Rainyfilters - Rain water harvesting filter for home and commercial
          Buildings in India
        </title>
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/about-us/our-journey"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Rainyfilters is the leading rain water harvesting filter for home and commercial buildings in India. We have a wide range of rain water harvesting system products that are designed to meet the needs of our customers. Our products are easy to install and maintain, and are available at a competitive price."
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
          {/*<h1> Our Journey</h1>*/}
          <Header />
          <div className="container-fluid banner enternal">
            <div className="hero-image enthroimg">
              <img src="../../static/images/journey/ourJourneyBanner.png" />
              {/* <div className="hero-text enthrotxt jrny4">
                <h1 style={{ textAlign: "center" }}>OUR JOURNEY</h1>
              </div> */}
            </div>
          </div>
          <div className="container-fluid journeymain">
            <div className="container">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge danger">
                    <i className="glyphicon glyphicon-credit-card" />
                  </div>
                  <div className="timeline-badge right-drop">
                    <i className="glyphicon glyphicon-tint">
                      <span>2002</span>
                    </i>
                  </div>

                  <div className="timeline-panel">
                    <img src="../../static/images/ourJourney/2002photo.jpg" />
                    <div className="body-timmain">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          'Rainy' Research & Manufacturing Founded
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          The first experiments of indirect groundwater
                          recharge, as a method to solve water scarcity led to
                          the invention of ‘Injection Well Technology’. This was
                          tested on the founders’ farm and resulted in
                          successful borewell recharge and continous water
                          yield. Thus, FLRWH was born and the news of the
                          success story spread far and wide.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container-fluid"
            style={{
              backgroundImage: "url(/static/images/halfdropbg.png)",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <ul className="timeline">
                <li className="timeline-inverted">
                  <div className="timeline-badge warning">
                    <i className="glyphicon glyphicon-credit-card" />
                  </div>
                  <div className="timeline-badge left-drop">
                    <i className="glyphicon glyphicon-tint">
                      <span>2003</span>
                    </i>
                  </div>
                  <div className="timeline-panel right-imghis">
                    <img src="../../static/images/ourJourney/2003.jpg" />
                    <div className="body-timmain">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          First Turnkey Project
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Our first major project was carried out with IFFCO for
                          the benefit of farmers in Kolar. Through this
                          initiative, 650 borewells were successfully recharged.
                          While this turnkey project was underway, we saw an
                          increase in demand for rooftop rainwater harvesting.
                          To cater to this demand we introduced SS304 candle
                          type rainwater harvesting filter.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container-fluid"
            style={{
              backgroundImage: "url(/static/images/singledroprightbg.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
            }}
          >
            <div className="container">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge danger">
                    <i className="glyphicon glyphicon-credit-card" />
                  </div>
                  <div className="timeline-badge right-drop">
                    <i className="glyphicon glyphicon-tint">
                      <span>2004</span>
                    </i>
                  </div>
                  <div className="timeline-panel">
                    <img src="../../static/images/ourJourney/2004.jpg" />
                    <div className="body-timmain">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Expansion of Network</h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          In order to cater to a larger customer base and with a
                          broader mission to conserve water, we enabled a large
                          dealership network across the globe. Currently we have
                          expanded to over 131 dealers across India, and export
                          our filters to over 9 countries and we are continuing
                          to grow.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="container-fluid"
            style={{
              backgroundImage: "url(/static/images/singledropbg.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom left",
            }}
          >
            <div className="container">
              <ul className="timeline">
                <li className="timeline-inverted">
                  <div className="timeline-badge danger">
                    <i className="glyphicon glyphicon-credit-card" />
                  </div>
                  <div className="timeline-badge left-drop">
                    <i className="glyphicon glyphicon-tint">
                      <span>2005</span>
                    </i>
                  </div>
                  <div className="timeline-panel right-imghis">
                    <img src="../../static/images/ourJourney/20051.jpg" />
                    <div className="body-timmain">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          Launch of 'Rainy' Filters
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Conventional RWH filters available in the market had
                          multiple drawbacks including clogging & frequent
                          maintenance. To overcome these obstacles, a highly
                          efficient, vertical inlet RWH filter with open ended
                          drain outlet was discovered. This was our first
                          attempt at unconventional rooftop RWH filters.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge danger">
                    <i className="glyphicon glyphicon-credit-card" />
                  </div>
                  <div className="timeline-badge right-drop">
                    <i className="glyphicon glyphicon-tint">
                      <span>2007</span>
                    </i>
                  </div>
                  <div className="timeline-panel">
                    <img src="../../static/images/ourJourney/20071.jpg" />
                    <div className="body-timmain">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          Self-Cleaning 'Rainy' RWH Filter Launched
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          After rigorous R&D, we developed a new model of
                          'Rainy' filters, which possessed horizontal inlet with
                          self-cleaning mechanism. This made the filter more
                          efficient and two models to suit different rooftop
                          areas were launched.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid">
            <div className="container">
              <ul className="timeline">
                <li className="timeline-inverted">
                  <div className="timeline-badge danger">
                    <i className="glyphicon glyphicon-credit-card" />
                  </div>
                  <div className="timeline-badge left-drop">
                    <i className="glyphicon glyphicon-tint">
                      <span>2011</span>
                    </i>
                  </div>
                  <div className="timeline-panel right-imghis">
                    <img src="../../static/images/ourJourney/journeyFour.jpg" />
                    <div className="body-timmain">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          Four New Models of Dual Intensity 'Rainy' Filters
                          Introduced
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          To cater to growing demands for cost effective
                          filters, we introduced 4 new models of 'Rainy'
                          Filters. An added advantage was the development of
                          dual intensity mechanism with auto flush out, which
                          enabled high efficiency filtration for variable
                          intensity of rainfall.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid rainyresearchnm">
            <div className="container">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge danger">
                    <i className="glyphicon glyphicon-credit-card" />
                  </div>
                  <div className="timeline-badge right-drop">
                    <i className="glyphicon glyphicon-tint">
                      <span>2016</span>
                    </i>
                  </div>
                  <div className="timeline-panel">
                    <img src="../../static/images/ourJourney/2016.jpg" />
                    <div className="body-timmain">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          'Rainy' Research & Manufacturing
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          We established our in house research & manufacturing
                          site at Hadihalli in Chikmagalur. This houses state of
                          the art hydraulic testing labs, live demonstration
                          facility, education centre and manufacturing unit. A
                          unique, completely sustainable facility dedicated to
                          rain water conservation and innovation to mitigate
                          climate change.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid fl80rooftop">
            <div className="container">
              <ul className="timeline">
                <li className="timeline-inverted">
                  <div className="timeline-badge danger">
                    <i className="glyphicon glyphicon-credit-card" />
                  </div>
                  <div className="timeline-badge left-drop">
                    <i className="glyphicon glyphicon-tint">
                      <span>2020</span>
                    </i>
                  </div>
                  <div className="timeline-panel right-imghis">
                    <img src="../../static/images/ourJourney/2020.jpg" />
                    <div className="body-timmain">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          New products launched, FL-80 and FL-150
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          As a result of rigorous R&D and unique manufacturing
                          techniques, we achieved superior price-performance
                          ratio. FL-80 and FL-150 were launched, these filters
                          are Cost-effective while delivering strong performance
                          and promising durability. The new filters paved a way
                          for high-quality products at affordable prices, making
                          it an instant success.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid rainyresearchnm">
            <div className="container">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge danger">
                    <i className="glyphicon glyphicon-credit-card" />
                  </div>
                  <div className="timeline-badge right-drop">
                    <i className="glyphicon glyphicon-tint">
                      <span>2022</span>
                    </i>
                  </div>
                  <div className="timeline-panel">
                    <img src="../../static/images/ourJourney/2022.png" />
                    <div className="body-timmain">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          Segmented Concrete Rings Launched{" "}
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Innovative segmented concrete rings were introduced to
                          replace the conventional concrete rings. Segmented
                          rings created a revolution in the construction
                          industry by enabling ease of transport and handling. A
                          production plant was set up featuring high –tech
                          machinery for significantly improving quality while
                          ensuring high production speed.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-fluid" style={{ paddingBottom: "60px" }}>
            <div className="container">
              <ul className="timeline">
                <li className="timeline-inverted">
                  <div className="timeline-panel right-imghis">
                    <div className="ourjourneycontinue">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          Our Journey Continues...
                        </h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
