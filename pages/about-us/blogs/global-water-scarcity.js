import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import React from "react";
import { LivejournalIcon } from "react-share";

export default function GlobalWaterScarcity() {
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
        <title>Global Water Scarcity</title>
        <meta
          name="description"
          content="Learn how water harvesting can help combat global warming and its devastating impacts. Discover the effects of climate change on water resources and the environment, and find out how you can take action to reduce your carbon footprint and make a positive impact on the planet."
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/about-us/blogs/global-water-scarcity"
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
          {/*<h1> Media</h1>*/}
          <Header />
          <div className="container-fluid banner enternal">
            <div className="hero-image enthroimg">
              <img
                src="../../../static/images/blogs/globalWaterScarcity/1.png"
                style={{}}
              />
              <div className="hero-text inthemedia">
                <h1 style={{ textAlign: "center" }}></h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="groundwater_bg team blue_underline">
              <p
                className="team-heading media-hdng blue_underline"
                style={{ textAlign: "center", font: "" }}
              >
                {/* STORIES , INSIGHTS , and ANNOUNCEMENTS FROM RAINY */}
              </p>
            </div>

            <div className="blog-content">
              <div className="blog-info">
                <h1>
                  How Rainwater Harvesting Can Solve Global Water Scarcity
                </h1>
                <p>
                  Every day that goes by, more and more water is becoming
                  scarce. The World Economic Forum identified the water crisis
                  as the fifth most dangerous global risk in terms of its
                  potential to affect society in January 2020, making it a
                  serious problem that needs to be addressed. It's noteworthy
                  that proper water management is the main issue rather than
                  scarcity. There is a current water crisis, according to the
                  World Water Council. However, the problem is not that there
                  isn't enough water to meet our requirements. The inadequate
                  management of water is the crisis, and both the environment
                  and billions of people suffer greatly.
                </p>
              </div>

              <div className="blog-info">
                <h5>A Glance of global water crisis</h5>
                <ul style={{ listStyle: "Bullet" }}>
                  <li>
                    According to UN-Water, countries with water shortages are
                    home to 2.3 billion people.
                  </li>
                  <li>
                    According to UNICEF, 1.42 billion people, including 450
                    million children, live in areas with high or extremely high
                    water vulnerability.
                  </li>
                  <li>
                    Around 785 million individuals do not have access to basic
                    water services.
                  </li>
                  <li>
                    According to the WHO, 884 million people do not have access
                    to clean drinking water.
                  </li>
                  <li>
                    At least one month of the year, two-thirds of the world's
                    population experiences acute water scarcity.
                  </li>
                  <li>
                    The World Water Institute predicts that by 2030, severe
                    water scarcity could force 700 million people to leave their
                    homes.
                  </li>
                  <li>
                    3.2 billion people reside in agricultural regions that
                    experience severe water scarcity or shortages.
                  </li>
                  <li>
                    Asia is home to over 73% of those who experience water
                    shortages.
                  </li>
                  <li>
                    {" "}
                    The world's water crisis is a problem for women: women and
                    girls are predicted to spend 200 million hours a day lugging
                    water, which UNICEF considers "a tremendous waste of time."
                  </li>
                  <li>
                    Lack of access to clean water and sanitary facilities can
                    contribute to diarrhea, which kills 2,195 children per day,
                    more than AIDS, malaria, and measles combined.
                  </li>
                </ul>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/globalWaterScarcity/2.jpg"></img>
                </div>
                <p>
                  A harmonious coexistence of natural cycles and the available
                  natural resources is essential for sustainability. The largest
                  and most accessible resource now being wasted, rain, needs to
                  be utilized in order to accomplish this goal and safeguard the
                  already existing reservoirs, rivers, aquifers, and ecosystems
                  from further devastation. The important thing to remember is
                  that rainwater harvesting does not require any energy or
                  natural resources; on the contrary, it aids in the
                  preservation of water, a resource that is both necessary and
                  quickly running out. Rainwater harvesting is a time-honored
                  idea that is easy to use and adaptable. It is just the process
                  of gathering rainwater and storing it for later use. The
                  various forms that rainwater harvesting systems can take range
                  from simple rain buckets to more complex setups with pumps,
                  tanks, and purifying systems.
                </p>
                <p>
                  Any technology that collects rainwater is suitable for reuse.
                  It can be used for the majority of tasks except ingestion
                  without filtration or purification. It is suitable for eating
                  once it has gone through the purifying procedure. Rainfall on
                  impervious hard surfaces like roads, buildings, and roofs in
                  metropolitan areas causes floods, which present a new set of
                  difficulties. This makes rainwater collection even more
                  necessary and beneficial.
                </p>
                <p>
                  Government regulations to promote rainwater collection in more
                  and more cities are being driven by urban flooding on the one
                  hand and a growing water deficit on the other.
                </p>
                <p>
                  India is the nation where, during the intense monsoons, 1,000
                  litres or even more of water can be collected. Approximately
                  87,000 rain harvesting pits have recently been built by the
                  government in Kerala, a state in the southern United States.
                  These pits are expected to endure for up to five years with no
                  upkeep.
                </p>
                <p>
                  By 2030, it is planned to significantly minimize sewage
                  discharges into nearby rivers. The realization that rainwater
                  harvesting systems must be an integral part of infrastructure
                  is spreading around the globe slowly but steadily. No matter
                  their complexity, all rainwater collection systems need these
                  five essential parts.
                </p>
              </div>
              <div className="blog-info">
                <h5>Rainwater Harvesting</h5>
                <p>
                  In South Asia and other countries , rainwater harvesting has
                  been practiced for many thousands of years as one of the
                  simplest and earliest means of water self-sufficiency. These
                  days, the lack of high-quality water is a major source of
                  worry.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/globalWaterScarcity/3.jpg"></img>
                </div>
                <h5>There are two major techniques of rainwater harvesting</h5>
                <ul>
                  <li>Rooftop Rainwater Harvesting</li>
                  <p>
                    Rooftop Rain Water Harvesting is the technique through which
                    rain water is collected from the roof catchments and stored
                    in reservoirs. By using these artificial recharge
                    techniques, collected rainwater can be stored in subsurface
                    groundwater reservoirs to meet the needs of the household
                    through tank storage. It can supply water for cattle,
                    farming, and ordinary household needs. Urban areas are the
                    best places for rooftop rainwater harvesting as it collects
                    storm runoff using the recharge pit, recharge trench,
                    recharge well, and recharge well.
                  </p>
                  <li>Groundwater recharge</li>
                  <p>
                    Water travels downward from surface water to groundwater
                    during the hydrologic process known as groundwater recharge.
                    The primary way that water enters an aquifer is through
                    recharge. The aquifer also functions as a mechanism for
                    distribution. The extra rainwater can then be used to
                    recharge the groundwater system using artificial recharge of
                    groundwater methods to replenish the groundwater aquifer. In
                    rural locations, rainwater can be captured using the
                    following methods: gully plug, contour bund, dug well
                    recharge, percolation tank, check dam, cement plug, or Nala
                    bund, and recharge shaft.
                  </p>
                </ul>
                <h5>Fundamental Components of Rainwater Harvesting:</h5>
                <ol>
                  <li>Catchment</li>
                  <p>
                    the surface to collect rainwater. It could be a paved
                    surface, a rooftop, or a landscaped area. The catchment's
                    surface area determines how much water you can harvest.
                  </p>
                  <li>Gutters and conduit Pipes</li>
                  <p>
                    The water must be directed towards the storage tank by them.
                    Half-round pipes constructed of galvanized iron (GI), steel,
                    aluminum, and u - PVC are the most often used types, with
                    GI, steel, and aluminum being the preferred materials.
                    Rain's slightly acidic nature can dissolve lead and other
                    heavy metals found in gutter solder, poisoning the water
                    supply.
                  </p>
                  <li>Filters and flush devices</li>
                  <p>
                    Purchasing the right rainwater filter system is essential.
                    The rain filter system needs to be capable of successfully
                    removing dangerous and polluting substances. The one-stop
                    solution for all the aforementioned new technologies and
                    techniques is offered by Rainy Filters, which operates out
                    of Bangalore and serves all of India's states. It is
                    affordable, user-friendly, tiny, simple to handle, and
                    simple to install.
                  </p>
                  <p>
                    Its "Rainy" Dual Intensity Rain Water Harvesting Filter
                    Technology is entirely indigenous and patented. It has
                    well-maintained systems and roof-top water harvesting
                    technology.
                  </p>
                  <p>
                    Our invention allows groundwater recharge by using an
                    injection well with "V-Wire injection well technology" that
                    allows groundwater recharge. A first-flush valve flushes out
                    the first spell of rain, which carries relatively more
                    toxins from the catchment surface and air.
                  </p>
                  <li>Storage tanks</li>
                  <p>
                    an essential part of the system. They can be stacked below
                    ground, above ground, or somewhere in between, depending on
                    the available area. Concrete, polyethylene, and galvanised
                    steel are often utilised materials for these tanks. If the
                    tank is above ground, precautions must be taken to stop
                    algae growth.
                  </p>
                  <div className="blogImg hero-image enthroimg">
                    <img src="../../../static/images/blogs/globalWaterScarcity/4.png"></img>
                  </div>
                  <li>Delivery systems</li>
                  <p>
                    Piping systems transport the filtered and stored rainwater
                    to its final destination. The pipes used for this function
                    are made of the same material as conduit pipes. The greatest
                    choice to reliably provide high-quality water throughout
                    time is to use u-PVC pipes.
                  </p>
                  <p>
                    It is important to exercise caution when selecting the
                    components for a rainwater harvesting system when building
                    one or integrating one into a facility. It is vital to pick
                    the correct materials. The decision made at this point will
                    determine how well the solution works and produces the
                    desired outcomes. If done properly, rainwater harvesting can
                    help the world overcome its water shortage and enable us to
                    leave a more beautiful planet for future generations.
                  </p>
                </ol>
                <h5>Conclusion</h5>
                <p>
                  Rain Water harvesting is the most efficient and eco-friendly
                  technique to reduce water scarcity. It is the collection and
                  storage of rain, rather than allowing it to run off, and can
                  be used for household works, watering gardens, livestock,
                  irrigation, and domestic uses. Rainwater harvesting methods
                  can also reduce global warming and improve the hydrological
                  cycle on Earth.
                </p>
              </div>
            </div>
          </div>
          {/* {newsArticle} */}

          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
