import React, { Fragment } from "react";
import Header from "../../components/Header";
import Head from "next/dist/next-server/lib/head";
import Footer from "../../components/Footer";
const faq = () => {
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

        <title>Frequently asked questions</title>
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
          {/*<h1> Media</h1>*/}
          <Header />

          <div className="container-fluid banner enternal">
            <div className="hero-image enthroimg">
              <img src="../../static/images/faq/QANDA.png" />
              {/* <div className="hero-text inthemedia">
                <h1 style={{ textAlign: "center" }}>IN THE MEDIA</h1>
              </div> */}
            </div>
          </div>
          {/* <div className="container">
            <div className="groundwater_bg team blue_underline">
              <h2 className="team-heading media-hdng blue_underline">
                How can we help you?
              </h2>
            </div>
          </div> */}
          <div
            className="container-fluid dnldbg"
            style={{
              backgroundImage: "url(../static/images/faq/faqBack1.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              marginTop: "-100px",
            }}
          >
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
                            What is rainwater harvesting?
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
                              <div className="col-md-14">
                                <p>
                                  Rainwater harvesting is the process of
                                  collection and re-utilisation of rainwater
                                  that falls on rooftops, paved areas,
                                  landscapes and other surfaces. The harvested
                                  water is used for various purposes and not
                                  limited to irrigation, flushing toilets, and
                                  washing clothes. Rainwater harvesting helps to
                                  conserve water, promotes sustainability,
                                  ensures equitable water-use and reduces
                                  dependency on secondary water sources.
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
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-2"
                            aria-expanded="false"
                            aria-controls="collapse-2"
                            style={{ color: "#58b8ef" }}
                          >
                            What are the benefits of rainwater harvesting?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-2"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-2"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Rainwater harvesting has many benefits, such
                                  as:
                                </p>
                                <ul style={{ listStyleType: "square" }}>
                                  <li>
                                    Conserves water and reduces dependency on
                                    secondary water sources
                                  </li>
                                  <li>
                                    Reduces storm water runoff, which can cause
                                    erosion, flooding, and water pollution
                                  </li>
                                  <li>
                                    Provides a reliable and sustainable source
                                    of water for non-potable uses like
                                    irrigation and toilet flushing
                                  </li>
                                  <li>
                                    Processing with basic household filters can
                                    bring the rainwater to potable level
                                  </li>
                                  <li>
                                    Reduces water bills for homes and businesses
                                    that use rainwater harvesting systems
                                  </li>
                                  <li>
                                    Saves energy required for pumping from long
                                    distances
                                  </li>
                                  <li>
                                    Reduces greenhouse gasses released during
                                    transportation of water with tankers
                                  </li>
                                  <li>
                                    Dilution effect of rainwater improves water
                                    quality in general
                                  </li>
                                  <li>
                                    Can help mitigate the effects of drought and
                                    water scarcity
                                  </li>
                                  <li>
                                    Can be an important tool in addressing
                                    global water issues such as virtual water
                                    trade and water security.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-3">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-3"
                            aria-expanded="false"
                            aria-controls="collapse-3"
                            style={{ color: "#58b8ef" }}
                          >
                            Is rainwater safe to drink?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-3"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-3"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Rainwater is considered as one of the purest
                                  form of water with &lt;50 TDS. It is only when
                                  it mixes with atmospheric and surface
                                  impurities, the water gets mixed. Although
                                  rainwater is generally regarded as safe for
                                  human consumption, it may contain contaminants
                                  and pollutants that can be harmful to human
                                  health. Therefore, it is essential to treat
                                  rainwater prior to consumption, either by
                                  boiling it or by simple filtration.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-4">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-4"
                            aria-expanded="false"
                            aria-controls="collapse-4"
                            style={{ color: "#58b8ef" }}
                          >
                            What services does Rainy provide?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-4"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-4"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Rainy Research and Manufacturing provides
                                  end-to-end rainwater harvesting solutions. The
                                  services include consulting, system design,
                                  installation, and maintenance services to
                                  residential and commercial properties. We can
                                  evaluate your property, design a custom
                                  rainwater harvesting system according to your
                                  specifications, install the system, and
                                  provide ongoing maintenance and support.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-5">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-5"
                            aria-expanded="false"
                            aria-controls="collapse-5"
                            style={{ color: "#58b8ef" }}
                          >
                            How much does a rainwater harvesting system cost?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-5"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-5"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  The price of a rainwater harvesting system can
                                  vary based on the system&#39;s size,
                                  complexity, and local labour and material
                                  costs. However, the initial expenses of
                                  installing a rainwater collection system can
                                  be offset by long-term savings on water bills
                                  and reduce dependency on conventional water
                                  sources.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-6">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-6"
                            aria-expanded="false"
                            aria-controls="collapse-6"
                            style={{ color: "#58b8ef" }}
                          >
                            What types of rainwater harvesting systems are
                            available?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-6"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-6"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  There are several types of rainwater
                                  harvesting systems, including:
                                </p>
                                <ul style={{ listStyleType: "square" }}>
                                  <li>
                                    Rooftop catchment systems, which collect
                                    rainwater from rooftops and direct it into
                                    storage tanks
                                  </li>
                                  <li>
                                    Surface catchment systems, which collect
                                    rainwater from paved areas and direct it
                                    into storage tanks or infiltration basins
                                  </li>
                                  <li>
                                    Green roof systems, which use vegetation and
                                    soil to capture and store rainwater on
                                    rooftops
                                  </li>
                                  <li>
                                    Rain gardens, which use plants and soil to
                                    capture and absorb rainwater in landscaped
                                    areas However, rooftop rainwater harvesting
                                    is considered to be the most efficient and
                                    simple method.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-7">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-7"
                            aria-expanded="false"
                            aria-controls="collapse-7"
                            style={{ color: "#58b8ef" }}
                          >
                            How much rainwater can I collect?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-7"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-7"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  The amount of rainwater you can collect
                                  depends on several factors, including the size
                                  of your catchment area (e.g., a roof or paved
                                  area), the amount of rainfall in your area,
                                  and the size of your storage tank. Rainy
                                  filters can help you calculate how much
                                  rainwater you can collect based on your
                                  specific site and needs. For instance, for 110
                                  Sq M roofed household, in a city like
                                  Bangalore-India, it is possible to collect
                                  about 100,000 Liters of rainwater annually.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-8">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-8"
                            aria-expanded="false"
                            aria-controls="collapse-8"
                            style={{ color: "#58b8ef" }}
                          >
                            How often should I maintain my rainwater harvesting
                            system?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-8"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-8"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Regular inspection and maintenance should be
                                  performed on conventional rainwater harvesting
                                  systems to ensure their functionality and
                                  prevent problems such as clogs, stagnation and
                                  contamination. However, Rainy filters do not
                                  require routine maintenance because they are
                                  self-cleaning and auto-flushing systems.
                                  Nevertheless, we recommend inspecting your
                                  system at least once a year and performing
                                  routine maintenance such as gutter cleaning,
                                  filter inspection, and storage tank flushing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-9">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-9"
                            aria-expanded="false"
                            aria-controls="collapse-9"
                            style={{ color: "#58b8ef" }}
                          >
                            Can I use rainwater for drinking or cooking?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-9"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-9"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Treated rainwater can be used for drinking,
                                  cooking, and non-potable applications such as
                                  irrigation, cleaning and toilet flushing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-10">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-10"
                            aria-expanded="false"
                            aria-controls="collapse-10"
                            style={{ color: "#58b8ef" }}
                          >
                            How can I get started with a rainwater harvesting
                            system?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-10"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-10"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  If you are interested in installing a
                                  rainwater harvesting system, contact Rainy
                                  filters to schedule a consultation. We can
                                  evaluate your site, design a custom system,
                                  and provide installation and maintenance
                                  services to help you conserve water and rely
                                  less on conventional water sources.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-11">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-11"
                            aria-expanded="false"
                            aria-controls="collapse-11"
                            style={{ color: "#58b8ef" }}
                          >
                            What is rainwater filter?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-11"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-11"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  A rainwater filter is a device designed to
                                  remove impurities and contaminants from
                                  rainwater before it is collected and stored
                                  for later use. Rainwater can pick up various
                                  pollutants and debris as it falls through the
                                  atmosphere and lands on roofs or other
                                  surfaces, making it unsuitable for drinking or
                                  other uses without proper treatment.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-12">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-12"
                            aria-expanded="false"
                            aria-controls="collapse-12"
                            style={{ color: "#58b8ef" }}
                          >
                            How does a Rainy filter work?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-12"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-12"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Rainy filters work on dual working principles
                                  depending on the intensity of the rain. During
                                  periods of light rainfall, it relies on
                                  &quot;cohesive force,&quot; and during periods
                                  of heavy rainfall the filter automatically
                                  switches over to &quot;centrifugal
                                  force&quot;. These filters require no external
                                  energy; they rely solely on gravity.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-13">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-13"
                            aria-expanded="false"
                            aria-controls="collapse-13"
                            style={{ color: "#58b8ef" }}
                          >
                            What filter is best for rainwater harvesting?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-13"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-13"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  It is recommended to purchase self-cleaning
                                  filters to avoid frequent manul maintenance
                                  and to look for high-efficiency filters. Here
                                  at Rainy, we have designed a cost-effective,
                                  self-cleaning, dual-intensity filter that
                                  operates at a high level of efficiency.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-14">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-14"
                            aria-expanded="false"
                            aria-controls="collapse-14"
                            style={{ color: "#58b8ef" }}
                          >
                            What is meant by Dual intensity filter?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-14"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-14"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Dual intensity indicates that the filter is
                                  designed to handle any intensity of
                                  precipitation, from light to heavy. Both low-
                                  and high-intensity rain is effectively
                                  filtered by dual intensity Rainy filters.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-15">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-15"
                            aria-expanded="false"
                            aria-controls="collapse-15"
                            style={{ color: "#58b8ef" }}
                          >
                            What is non-clogging filter?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-15"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-15"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-15">
                                <p>
                                  A non-clogging filter is a type of filtration
                                  system designed to prevent blockages or clogs
                                  caused by the accumulation of contaminants or
                                  debris. The Rainy filter assembly is an
                                  open-ended system without a gate valve at the
                                  drain outlet that prevents water and solid
                                  particle stagnation by continuously flushing
                                  out dirt and debris.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-16">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-16"
                            aria-expanded="false"
                            aria-controls="collapse-16"
                            style={{ color: "#58b8ef" }}
                          >
                            What is V-wire injection well technology?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-16"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-16"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Rainy’s &quot;V-Wire injection well
                                  tecnology&quot; is a highly accepted modern
                                  method of surface run-off rainwater harvesting
                                  that works at very high efficiency in
                                  recharging the groundwater. It eliminates
                                  conventional filtration systems and saves
                                  precious space, construction costs, and
                                  construction time for the filtration tank.
                                  Scientific Design makes cleaning very easy and
                                  saves maintenance costs. Above all, injection
                                  wells are known for giving faster results
                                  without hampering the aquifer.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-17">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-17"
                            aria-expanded="false"
                            aria-controls="collapse-17"
                            style={{ color: "#58b8ef" }}
                          >
                            What is an injection well for groundwater recharge?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-17"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-17"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  An injection well for groundwater recharge is
                                  a type of well that is used to inject treated
                                  surface rainwater into an aquifer for the
                                  purpose of replenishing or augmenting
                                  groundwater supplies. The injection process is
                                  a method of indirect point source recharge
                                  that promotes lateral water retention in the
                                  earth strata.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-18">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-18"
                            aria-expanded="false"
                            aria-controls="collapse-18"
                            style={{ color: "#58b8ef" }}
                          >
                            What is groundwater recharge?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-18"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-18"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Groundwater is not an unlimited resource.
                                  Groundwater recharge refers to the process by
                                  which water is added to an aquifer, the
                                  natural underground reservoir that stores
                                  groundwater. This can occur through various
                                  natural and artificial means, such as
                                  precipitation, surface water runoff, and
                                  intentional injection of water into the
                                  ground.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-19">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-19"
                            aria-expanded="false"
                            aria-controls="collapse-19"
                            style={{ color: "#58b8ef" }}
                          >
                            What is Rooftop rainwater harvesting?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-19"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-19"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Rooftop rainwater harvesting is the practice
                                  of collecting and storing rainwater that falls
                                  on rooftops for later use. This involves
                                  capturing rainwater from rooftops and
                                  directing it into a storage system such as a
                                  tank, cistern, or underground reservoir after
                                  passing it through a filter apparatus. Rooftop
                                  rainwater harvesting systems typically include
                                  a gutter system to collect rainwater from the
                                  roof and downspouts or pipes to channel the
                                  water to a storage tank. The collected water
                                  is then treated and filtered as needed for its
                                  intended use.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="acrdinbrdr">
                      <div className="card-header" id="heading-20">
                        <h5 className="mb-0">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-20"
                            aria-expanded="false"
                            aria-controls="collapse-20"
                            style={{ color: "#58b8ef" }}
                          >
                            How to install RAINY Filters?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapse-20"
                        className="collapse "
                        data-parent="#accordion"
                        aria-labelledby="heading-20"
                      >
                        <div className="card-body">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-14">
                                <p>
                                  Rainy filters are simple to install and are
                                  wall mountable units. 360-degree union
                                  rotation capability make Rainy filter suitable
                                  for any site conditions. It can be easily wall
                                  mounted, self-installable with easy to
                                  understand instructions make it user friendly
                                  or any local plumber with minimal experience
                                  is sufficient for installing.
                                </p>
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
    </Fragment>
  );
};

export default faq;
