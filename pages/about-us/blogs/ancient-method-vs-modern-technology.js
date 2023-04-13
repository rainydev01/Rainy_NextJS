import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import React from "react";

export default function TraditionalVsNewMethods() {
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
        <title>Ancient Method VS Modern Technology</title>
        <meta
          name="description"
          content="Discover the best methods of traditional rainwater harvesting that have been practised for centuries and modern techniques to collect and conserve rainwater. Learn about kund, khadin, taanka, jhalara, and eri as traditional methods and recharging borewells, rain barrels, Rain Pod, Rain Drops, Rooftop Rainwater Harvesting Filters, Groundwater Recharging, and Systems & Solutions as contemporary techniques. Explore how Rainy Filters offers a complete and innovative solution for dual-intensity rainwater harvesting filters, rooftop rainwater harvesting filters, groundwater recharging, and end-to-end Rainwater Harvesting solutions for your facility."
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/about-us/blogs/ancient-method-vs-modern-technology"
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
                src="../../../static/images/blogs/ancientVsModernBackground.png "
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
                <h1>Rainwater Harvesting Traditional and Contemporary</h1>
                <p>
                  Rainwater harvesting is one of the simplest and oldest methods
                  of self-supply of water which been used in South Asia and
                  other countries for many thousands of years. Now a days,
                  scarcity of good quality water has become a significant cause
                  of concern.
                </p>
                <p>
                  The Rainwater Harvesting System is one of the best methods
                  practised and followed to support the conservation of water.
                  It is collection and storage of rain, rather than allowing it
                  to run off. Rainwater, which is pure in form and of good
                  quality, can be used for watering gardens, washing,
                  cleaning, bathing, cooking, livestock, irrigation, and
                  domestic uses.
                </p>
              </div>

              <div className="blog-info">
                <h2>Traditional methods of Rainwater Harvesting</h2>
                <h4>1.Khadin(Rajasthan)</h4>
                <p>
                  A Khadin is an ingenious construction designed to harvest
                  surface runoff water for agriculture. It is also called
                  a dhora. The khadin system is based on the principle of
                  harvesting rainwater on farmland and subsequent use of this
                  water-saturated land for crop production.
                </p>
                <p>
                  It is First designed by in western Rajasthan in the 15th
                  century, its main feature is a very long (100-300 m) earthen
                  embankment built across the lower hill slopes lying below
                  gravelly uplands.
                </p>

                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/ancientVsModernPictures/Khadin.jpg"></img>
                </div>

                <h4>2. Kund (Rajasthan and Gujarat)</h4>
                <p>
                  A Kund is a saucer-shaped catchment area that gently slope
                  towards the central circular underground well. Its main
                  purpose is to harvest rainwater for drinking. Kunds dot the
                  sandier tracts of western Rajasthan and Gujarat.
                  Traditionally, these well-pits were covered in disinfectant
                  lime and ash.
                </p>

                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/ancientVsModernPictures/kund.jpg"></img>
                </div>

                <h4>3. Taanka</h4>
                <p>
                  Taanka (small tank) is a traditional rainwater harvesting
                  technique indigenous to the Thar desert region of Rajasthan
                  (Bikaner). A Taanka is a cylindrical paved underground pit
                  into which rainwater from rooftops, courtyards or artificially
                  prepared catchments flows. Once the taanka is completely
                  filled, the water stored in it can last throughout the dry
                  season and is sufficient for a family of 5-6 members for
                  drinking. In this way, the people of Bikaner were able to meet
                  their water requirements.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/ancientVsModernPictures/taanka.jpg"></img>
                </div>

                <h4>4. Jhalara </h4>
                <p>
                  Jhalaras are typically rectangular-shaped step wells with
                  three or four tiered sides. The steps were constructed in
                  stages.
                </p>
                <p>
                  Jhalaras were man-made tanks found in Rajasthan and Gujarat
                  that were built to conserve rainwater and ensure an easy and
                  consistent supply of water for religious rites, royal
                  ceremonies, and community use such as bathing and religious
                  rites.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/ancientVsModernPictures/jalhara.jpg"></img>
                </div>

                <h4>5. Eri (Tamil Nadu)</h4>
                <p>
                  The Eri (tank) system of Tamil Nadu is one of the oldest water
                  management systems in India. It played several important roles
                  in maintaining ecological harmony as flood-control systems,
                  preventing soil erosion and wastage of runoff during periods
                  of heavy rainfall, and recharging the groundwater in the
                  surrounding areas. Without Eris, paddy cultivation of Tamil
                  Nadu would have been impossible. The Eri system is mostly
                  present in all ancient temples of Tamil Nadu.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/ancientVsModernPictures/eri.jpg"></img>
                </div>
              </div>
              <div className="blog-info">
                <h3 style={{ margin: "20px" }}>
                  Modern Rainwater Harvesting Techniques
                </h3>
                <h4>1. Recharging Borewells and Tubewells</h4>
                <p>
                  Borewells and tubewells are typically recharged by underground
                  water. We can collect water to recharge the borewell by
                  connecting the rain drainage pipe to a filter that leads to
                  the borewell. The borewell water seeps through perforations in
                  the walls and replenishes the ground water. And everyone
                  around you eventually uses that ground water.
                </p>
                <h4>2. Rain Barrel</h4>
                <p>
                  The Rain Barrel is one of the simplest ways to collect
                  rainwater. You simply attach the Rain barrel to the outlet of
                  your rain drainage pipe. There aren't many specifications for
                  a Rain Barrel. We must properly cover the Rain barrel so that
                  it does not serve as a breeding ground for mosquitoes or other
                  insects.
                </p>
                <h4>Rain pod – A rainwater harvesting barrel</h4>
                <p>
                  The Rain Pod allows you to collect rainwater with its unique
                  design and features. It works similarly to a Rain barrel in
                  that the Rain Pod collects water in a large tank and stands
                  taller than a man, reaching to cover a large area around it
                  and sprinkling it with water using nothing but gravity.
                </p>
                <h4>Rain Drops - Cheap rainwater harvesting system</h4>
                <p>
                  The Rain Drops system enables people to attach standard
                  plastic bottles to an existing gutter system that has been
                  installed to drain water from the roof. The water that flows
                  through the gutter is thus collected in the bottles. Once the
                  system is set up with a sufficient number of bottles, it can
                  provide you with water for gardening and even hand washing.
                </p>
                <h4 style={{ margin: "20px" }}>Rainy filters</h4>
                <p>
                  Rainy Filters is operating from Bangalore to all the states in
                  India and it is the one-pack solution for all the
                  above-mentioned new technologies and methods. It is
                  inexpensive, small, user-friendly, easy to handle, and simple
                  to install. Rainy is a completely indigenous and
                  patent-protected technology for dual-intensity rainwater
                  harvesting filters. It employs roof-top water harvesting
                  method, as well as well-maintained systems and solutions. For
                  groundwater recharge, our innovation employs an injection well
                  outfitted with "V-Wire Screens," which allow for replenishment
                  of the groundwater source.
                </p>
                <h4 style={{ margin: "20px" }}>
                  Rooftop Rainwater Harvesting Filters
                </h4>
                <p>
                  Rainy's Dual Intensity filters work at high efficiency
                  regardless of the intensity of rainfall and have self-cleaning
                  abilities. At nominal prices, rainy’s filters are global
                  market leaders in Rooftop Rainwater Harvesting.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/ancientVsModernPictures/ancVsMod1.jpg"></img>
                </div>
                <h4 style={{ margin: "20px" }}>Groundwater Recharging</h4>
                <p>
                  Rainy has developed a new method of groundwater recharge,
                  called 'V-wire injection well' technology. This allows for the
                  replenishment of the groundwater table, reducing water
                  scarcity.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/ancientVsModernPictures/ancVsMod2.jpg"></img>
                </div>
                <h4 style={{ margin: "20px" }}>Systems & Solutions</h4>
                <p>
                  Rainy provides a Custom made solution to suit your building or
                  campus. Rainy’s expert engineers will help from design to
                  execution of end-to-end Rainwater Harvesting solutions for
                  your facility.
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/ancientVsModernPictures/ancVsMod3.jpg"></img>
                </div>
                <h4 style={{ margin: "20px" }}>
                  Key Technology & Innovation Highlights of Rainy Filters
                </h4>
                <p>
                  <li>
                    {" "}
                    It indirectly reduces power consumed in pumping and checks
                    over-exploitation of groundwater by establishing water
                    neutrality.
                  </li>
                </p>
                <p>
                  <li>
                    • A team of professionals with over 20 years of hands-on
                    experience in the RWH industry enables cutting-edge
                    continuous innovation in RWH solutions.
                  </li>
                </p>
                <p>
                  <li>
                    • Rainy filter’s Live Demonstration vehicles on RWH are
                    deployed all over the country to spread awareness and show a
                    glimpse of the varied benefits that RWH has in water
                    conservation..
                  </li>
                </p>
                <div className="blogImg hero-image enthroimg">
                  <img src="../../../static/images/blogs/ancientVsModernPictures/liveDemo.png"></img>
                </div>
                <h4 style={{ margin: "20px" }}>
                  Advantages of Modern Rainwater Harvesting
                </h4>
                <p>
                  Harvesting rainwater can reduce erosion around downspouts and
                  in gardens. It can also control stormwater runoff and reduce
                  flooding.
                </p>
                <p>
                  Rainwater doesn’t produce scale and corrosion as hard water
                  does. Rainwater harvesting helps individuals save on their
                  water bills and the cost to supply mains and overall water
                  services can be substantially reduced when many people in one
                  community use rainwater.
                </p>
                <p>
                  Harvested rainwater reduces demand on ground water as
                  rainwater can be stored and then used during times of drought
                  and when the groundwater supplies are increasingly being
                  strained and depleted.
                </p>
                <p>
                  Rainwater is soft and can lessen the need for detergents when
                  washing clothes and dishes. Rainwater can also be used for
                  washing vehicles, bathing, and flushing toilets, and nearly
                  all cleaning that uses water.
                </p>
                <p>
                  Rainwater harvesting can also be used to improve plants and
                  gardens as it is generally free from several types of
                  pollutants and man-made contaminants. Rain is also free from
                  chlorination. Using clean and healthy rainwater for plants and
                  trees can save money on overall property maintenance and
                  landscaping needs.
                </p>
                <h4>Disadvantages of Traditional Rainwater Harvesting</h4>
                <p>
                  Digging deeper wells is not only expensive but can cause
                  environmental damage, such as collapsing the soil where the
                  water used to be. Rainfall is hard to predict, and throughout
                  the year (depending on where you are), you may experience
                  little or no rainfall. This means it’s not recommended to rely
                  solely on rainwater alone for all your water needs.
                </p>
                <p>
                  Depending on the system’s size and the methods used,
                  installing a rainwater harvesting system is expensive and
                  construction techniques and material cost also very expensive.
                  Rainwater harvesting systems necessitate regular maintenance
                  and upkeep because tanks, jhalara, and kunds are larger in
                  area and size in traditional methods. Furthermore, they are
                  vulnerable to rodents, algae growth, and insects.
                </p>
                <p>
                  The barrels or tanks can only hold limited water. So, during a
                  very heavy downpour or storm, and once the catchment is full,
                  the system may not be able to hold all the rainwater. The
                  excess rainwater overflows and then ends up going into drains
                  and rivers anyway.
                </p>
                <p>
                  Certain chemicals, insects, dirt, or animal droppings leach
                  into the reserved water. If you use the harvested water to
                  water your garden, these substances can harm the plants or
                  your lawn. It is critical to keep this in mind when installing
                  a rainwater harvesting system.
                </p>
                <h5>Conclusion:</h5>
                <p>
                  Rainwater harvesting is the most efficient and eco-friendly
                  technique to reduce water scarcity. It is the collection and
                  storage of rain, rather than allowing it to run off and can be
                  used for household works, watering gardens, livestock,
                  irrigation, and domestic uses. Water Harvesting can also
                  reduce Global Warming and improves the hydrological cycle on
                  earth.
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
