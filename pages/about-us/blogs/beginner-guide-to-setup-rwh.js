import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import React from "react";

export default function BeginnerGuideToSetUp() {
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
        <title>Beginner Guide To Set Up RWH</title>

        <link
          rel="canonical"
          href="https://www.rainyfilters.com/about-us/blogs/beginner-guide-to-setup-rwh"
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
                src="../../../static/images/blogs/beginnerGuideToSettingUp/1.png "
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
              ></p>
            </div>

            <div className="blog-content">
              <div className="blog-info">
                <h1>
                  A Beginner's Guide to setting up a Rainwater Harvesting
                  System.
                </h1>
                <p>
                  Rainwater harvesting involves collecting and storing rainwater
                  for reuse rather than allowing it to flow and be absorbed into
                  the earth or channelled into drains, streams, or rivers. It is
                  one of the simplest ways to save home water while
                  simultaneously cutting your utility expenses. Harvesting
                  rainwater is a sensible and ecological decision, whether you
                  choose a custom-designed system or a basic rain barrel
                  collecting technique.
                </p>
                <p>
                  Rainwater collection is acquiring increased importance as the
                  effects of the climate crisis worsen and portions of the world
                  face drier and longer droughts, groundwater depletion, and
                  freshwater contamination from saltwater inundation. Rainwater
                  collection supplies fresh water in areas where water is
                  scarce, dirty, or only available seasonally. Moreover,
                  rainwater collection and storage can be a less expensive
                  alternative (compared to desalination or piping water over
                  great distances) to ensure safe, clean water for drinking,
                  residential use, gardening, livestock watering, and
                  agriculture.
                </p>
                <p>
                  While there are several modern rainwater collection methods,
                  rainwater collection is an old tradition. Anthropologists
                  think that the ability to catch and retain water accompanied
                  the rise of agriculture, particularly in arid regions.
                  Cisterns for storing rainwater were discovered in Neolithic
                  towns, and by 2500 BC, they could be found in what is now
                  Israel and the Greek island of Crete, as well as in the Roman
                  Empire, Istanbul, and even Venice.
                </p>
              </div>
              <div className="blog-info">
                <h5>Benefits of Harvesting Rainwater</h5>
                <p>
                  Rainwater has several advantages over municipal tap water in a
                  variety of applications.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/beginnerGuideToSettingUp/2.png"></img>
                </div>
                <ul style={{ listStyle: "bullet" }}>
                  <li>
                    Conservation: Water is a restricted resource in many world
                    regions, with demand exceeding availability. Utilizing
                    rainwater protects and conserves natural resources such as
                    rivers and streams while reducing demand for public
                    services.
                  </li>
                  <li>
                    Price: Rainwater is free. Complicated and potable systems
                    need substantial investment, resulting in a cheaper utility
                    cost for the ordinary homeowner.
                  </li>
                  <li>
                    Neutral pH: Because rainwater is gentle and neutral pH, it
                    is perfect for personal hygiene, washing, and cleaning. It
                    is less corrosive than hard water and can help equipment
                    last longer.
                  </li>
                  <li>
                    Pollutant-free: Rainwater contains no artificial chemicals
                    or toxins, making it healthier for plants. Unlike municipal
                    systems, it lacks disinfection by-products, salts, minerals,
                    and pollutants.
                  </li>
                  <li>
                    Reduces stormwater runoff: Because water is collected and
                    stored, less water is sent into storm drains, reducing
                    floods and the spread of groundwater contaminants.
                  </li>
                </ul>
              </div>

              <div className="blog-info">
                <h4>Types of Rainwater Collection</h4>
                <p>
                  The storage and distribution equipment required determines the
                  types of rainwater gathering. Collecting rainwater for
                  personal use is as simple as placing a bucket outside.
                </p>
                <h5>Rooftop rain water harvesting </h5>
                <p>
                  The rain that falls on top of the roof is collected using a
                  gutter and then diverted to a storage tank using a filter.
                  This approach is straightforward and an excellent starting
                  point for households that wish to capture rainwater for indoor
                  and outdoor activities such as watering plants, cleaning, and
                  personal hygiene.
                </p>
                <p>
                  A catch basin, such as a rain barrel, is installed beneath a
                  building downspout to collect and store rainwater.
                </p>
                <p>
                  'Rainy' Dual Intensity Filters operate efficiently regardless
                  of rainfall intensity and offer self-cleaning capabilities.
                  Our filters are industry leaders in rooftop rainwater
                  harvesting due to their low cost and high quality.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/beginnerGuideToSettingUp/3.png"></img>
                </div>
              </div>
              <div className="blog-info">
                <h5>Groundwater Recharge</h5>
                <p>
                  A groundwater recharge system collects rainfall runoff at
                  ground level. It is more complicated and necessitates the
                  initial construction of a storage tank (often a cistern or
                  reservoir), a pump, and distribution equipment such as pipes.
                </p>
                <p>
                  Rainy has invented a novel groundwater recharge method known
                  as the 'V-wire injection well' technology. This enables the
                  replenishment of the groundwater table at a very high speed
                  when compared to conventional groundwater recharge, reducing
                  water shortages.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/beginnerGuideToSettingUp/4.png"></img>
                </div>
              </div>
              <div className="bolg-info">
                <h5>How Much Water Can You Collect?</h5>
                <p>
                  If you want to install a rainwater collection system, follow
                  these simple steps: When acquiring a rainwater harvesting
                  system, you should assess your rainwater collecting capacity
                  since it will influence several aspects, including the size of
                  your rainwater tank. The Federal Energy Management Programme
                  calculates the total amount of water gathered by rainwater
                  collecting devices using the following formula: Catchment area
                  (roof floorspace) x monthly rainfall (inches) x conversion
                  factor (0.62) x collection factor (75%–90% to account for
                  system losses) With an average monthly rainfall of 3 inches
                  and a collection factor of 75%, the total water catchment for
                  a 1,000-square-foot roof would be: 1,000 3 x 0.62 x 75% =
                  1,395 litres each month, or 16,740 litres per year (minimum)
                  Rainwater harvesting potential is computed by multiplying your
                  catchment area (the surface area suitable to capture
                  rainwater) by your average yearly precipitation. For Example,
                  100 m2 (catchment area) x 1500mm per year (rainfall) = 150
                  m3.(Because of the high quantities of filth and oil, the
                  ground area is not deemed a suitable catchment.)
                </p>
              </div>
              <div className="bolg-info">
                <h5>How It Works: Capture, Store, Reuse</h5>
                <p>
                  The most basic rainwater harvesting systems involve a means of
                  collecting rain (which might be as simple as a house's roof),
                  a means of directing the water (such as a gutter and
                  downspout), and a location to store the water (like a barrel).
                  Water collected from a system this simple would only be
                  acceptable for basic applications like watering a garden, fire
                  suppression, or as grey water—like toilet bowl water—due to
                  the absence of filtering and sufficient storage.
                </p>
                <p>
                  A suitable storage tank (2,500 litres, 3,500 litres, 4,500
                  litres (standard and shallow profiles are available), plus
                  6,000 litres). Many people prefer shallow tanks because they
                  require less excavation and are easier to maintain. A more
                  elaborate system would contain a collecting system and
                  multiple layers of filters to keep dirt and debris out of the
                  water supply. Tanks should be designed to properly manage
                  overflow water and constructed of materials that will not
                  leach into the water and discourage bacteria development. That
                  container should then be connected to a control system that
                  may further filter the water for drinking-level purity if
                  necessary, or at least to a water level monitor. Lastly, a
                  pump to guide water, a flow metre, and a backflow prevention
                  system would be required, all of which would need to be
                  connected to a power supply.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/beginnerGuideToSettingUp/5.png"></img>
                </div>
                <p>
                  Rainwater harvesting system schematic showing hose roof
                  runoff, underground pipes, filtration, and collection in the
                  tank for household use.
                </p>
              </div>
              <div className="bolg-info">
                <h4>Harvested Rainwater uses</h4>
                <h5>Outdoor Uses:</h5>
                <ul style={{ listStyle: "bullet" }}>
                  <li>Gardens and landscaping</li>
                  <li>Swimming pools</li>
                  <li>Livestock water or dog washing </li>
                  <li>
                    Household duties like washing motor vehicles and cars etc.
                  </li>
                  <li>Water features such as bird baths or fountains</li>
                  <li>Fire suppression or emergency water</li>
                  <li>Cleaning buildings</li>
                </ul>
                <h5>Indoor Uses:</h5>
                <ul style={{ listStyle: "bullet" }}>
                  <li>Washing machine</li>
                  <li>Dishwasher</li>
                  <li>Hot tub, bath, or shower</li>
                  <li>Toilet Flushing</li>
                  <li>Utility sink</li>
                </ul>
              </div>
              <div className="blog-info">
                <h5>Conclusion</h5>
                <p>
                  The most efficient and advantageous way of water conservation
                  is rainwater gathering. The capacity of a rainwater collection
                  system to meet the demands of the site and its users
                  preferences determines its success. Rainy Filters offers the
                  greatest options for establishing rainwater collection
                  systems. Rainwater harvesting has various advantages and
                  applications; however, harvesting systems must be operational
                  and maintained to ensure water purity. Water must also be
                  washed and filtered before use.
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
