import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import React from "react";

export default function GlobalWarming() {
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
        <title>How Water Harvesting Can Reduce Global Warming: An In-Depth Analysis | Rainyfilters</title>
	<meta name="description" content="Learn how water harvesting can help combat global warming and its devastating impacts. Discover the effects of climate change on water resources and the environment, and find out how you can take action to reduce your carbon footprint and make a positive impact on the planet."/>
        <link rel="canonical" href="https://www.rainyfilters.com/about-us/blogs/global-warming"/>
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
                src="../../static/images/blogs/globalWarmingBackground1.png"
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
                <h1>How Water Harvesting can reduce Global Warming ?</h1>
                <p>
                  Climate is associated with sun, oceans, wind, rain, snow,
                  forests, deserts, savannas, and human activity.<br></br>
                  Increase in temperature of the earth’s atmosphere because an
                  increased amount of the heat striking the earth from the sun
                  that is being trapped in the earth’s atmosphere and cannot be
                  radiated out into space is called global warming.<br></br>
                  Climate change cause droughts and floods and affect water
                  usage around the world. Global warming is one of the main
                  reasons that is contributing to this problem. Because of the
                  rise in temperature freshwater glaciers in some parts of the
                  earth begin to melt resulting in rising sea levels.<br></br>
                  Thetemperature change alters wind pattern that brings monsoons
                  causing drought, also unpredictable weather, water
                  availability, exacerbating water scarcity. <br></br>
                  Global warming, the amount of heat produced in the earth’s
                  atmosphere cause evaporation of water in larger amounts, this
                  would lead to heavy rainfall in upcoming years because of the
                  higher levels of atmospheric water vapor.The influence of
                  Climate change on precipitation fall has a great impact on
                  water cycle. Drastically affects the quantity and quality of
                  water that future generations need to sustain life on this
                  planet.
                </p>
              </div>

              <div className="blog-info">
                <ul>
                  <h1>Climate change impacts</h1>
                  <li>Sea level rise</li>
                  <p>
                    Human activity is the main factor that causes global
                    warming. Due to pollution caused by industries the emission
                    of carbon dioxide and greenhouse gas has raised the global
                    temperature, as a result glaciers meltdown rapidly causing
                    rise in sea level. This in turn elevates storm, increases
                    coastal erosion and brings hurricanes and typhoons in the
                    ocean.
                  </p>
                  <li>Droughts and heat waves</li>
                  <p>
                    Apart from downpours, droughts and a prolonged period of
                    abnormally hot weather will become common. Yet, hot, dry
                    places will get hotter and drier, and areas that once had
                    regular rainfall will become much hotter and arid.
                  </p>
                  <li>Changing ecosystems</li>
                  <p>
                    Temperature change, that is rise in temperature level have
                    effects on some staple crops. Farmers in temperate zones are
                    finding dry conditions which are difficult for crops such as
                    corn and wheat, and once prime growing zones are now
                    threatened. Migration takes place among animals and fish
                    species due to the temperature change in their own
                    environment. The fish species migrates longer distance in
                    the water.
                  </p>
                  <li>Reduced food security</li>
                  <p>
                    Global agriculture gets affected from global warming.
                    Productivity changes significantly due to temperature
                    change, different crops are grown at specific temperature
                    and when those temperatures change, it would bring changes
                    in productivity.
                  </p>
                  <li>Heavy rainfall and storms</li>
                  <p>
                    Heavy rainfall occurs due to higher level of atmospheric
                    water vapor, water evaporates in larger amounts, and this
                    would lead to heavy downpours. Torrential rain leading to
                    flooding will become more common. Hurricanes and typhoons
                    will be intense.
                  </p>
                  <li>Melting Ice</li>
                  <p>
                    In addition to industrial revolution, carbon dioxide and
                    other greenhouse gas emission human activities are the root
                    cause for melting of glaciers. The rise in global
                    temperature leads to increase of temperature even at poles
                    resulting in rapid melting, calving into the sea and
                    retreating to land with the rise of sea levels.
                  </p>
                </ul>
              </div>

              <div
                className="blogImg hero-image enthroimg"
                style={{ }}
              >
                <img src="../../../static/images/blogs/naturalGreenhouseEffect.jpg"></img>
              </div>

              <div className="content">
                <h1>Climate change and water</h1>
                <ul>
                  <li>
                    <p>
                      Extreme weather conditions and the change in the pattern
                      of water cycle makeit more difficult to access safe
                      drinking water.Nearly 450 million children do not have
                      enough water to meet their day to day needs.
                    </p>
                  </li>
                  <li>
                    <p>
                      Climate change aggravate water stress in areas where water
                      sources are limited, leading to a conflict.
                    </p>
                  </li>
                  <li>
                    <p>
                      Evaporation: Warm air holds more moisture than cool air as
                      a result the air will suck up more water from oceans,
                      lakes, soil and plants. This condition negatively affects
                      agriculture and drinking water.
                    </p>
                  </li>
                  <li>
                    <p>
                      Whenever there is heavy rainfall, flood, and
                      cyclonecontaminatesentire water supply. Increases the
                      vulnerability to children of diseases like cholera and
                      typhoid.
                    </p>
                  </li>
                  <li>
                    <p>
                      Contaminated water poses a huge threat. Temperature rise
                      could lead to multiplication of deadly pathogens in
                      freshwater, making the water dangerous for people to
                      drink.
                    </p>
                  </li>
                  <li>
                    <p>
                      Precipitation: Water that falls from the clouds towards
                      the ground, especially as rain or snow. This happens when
                      warm air cools down.Change in temperature brings a change
                      in precipitation which causes heavy rain and snowstorms.
                    </p>
                  </li>
                  <li>
                    <p>
                      The changes that happen in precipitation affect farmers
                      and natural ecosystem. Heavy precipitation leads to floods
                      or surface runoff and stream flow. It is a threat to human
                      life, agriculture and economy. The runoff causes soil
                      erosion, loss of nutrients in the soil.
                    </p>
                  </li>
                  <li>
                    <p>
                      Runoff deposit sediments and contaminants in water bodies
                      that cause harm to aquatic life and worsen conditions for
                      people to use lakes and streams for activities such as
                      fishing, swimming and other activities.
                    </p>
                  </li>
                  <li>
                    <p>
                      Temperature in the ocean drives atmospheric patterns and
                      alters ocean currents. Thus rainfall prediction on
                      upcoming years varies.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="blogImg hero-image enthroimg">
                <h3>Water cycle</h3>
                <img
                  src="../../../static/images/blogs/globalWarming.jpg"
                  style={{  }}
                ></img>
              </div>

              <div className="content">
                <h1>Water demand</h1>
                <ul>
                  <li>
                    <p>
                      Demand of water going beyond the available amount of water
                      at a certain period called water stress. Climate change
                      will lead to water shortage.
                    </p>
                  </li>
                  <li>
                    <p>
                      Climate change modifies the volume of water required to
                      satisfy everyday needs of human. Rise in temperature and
                      the rate of evaporation increases the demand for water in
                      some places.
                    </p>
                  </li>
                  <li>
                    <p>
                      Destruction of vegetation worsenssoil erosion and lowers
                      groundwater table and increase the demand for water and
                      food.
                    </p>
                  </li>
                  <li>
                    <p>
                      The need of energy for pumping, treatment, transportation
                      is been increased as the demand for water increases and
                      contributes to depletion of peat lands, the carbon sinks.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="content">
                <ul>
                  <h1>What can be done?</h1>
                  <li>
                    <p>
                      Every human could contribute to reduce the impact of
                      climate change by taking some measures such as gardening
                      in house, like fruits and vegetables or buying locally
                      grown vegetables and fruits, thereby to reduce the
                      transportation. Vehicles contribute more for the emission
                      of carbon dioxide to the atmosphere.
                    </p>
                  </li>
                  <li>
                    <p>
                      On a larger scale, if industries that use fossil fuels
                      switch to renewable energy to a cleaner energy sources
                      would become a major part for the betterment of our
                      planet.
                    </p>
                  </li>
                  <li>
                    <p>
                      Waste conversion that is conversion of waste to energy
                      source such as nutrients and biogas or biofuels.
                    </p>
                  </li>
                  <li>
                    <p>
                      Rainwater harvesting is useful in regions with uneven
                      rainfall distribution to build the capacity to recover
                      quickly from the damage and ensure supplies for dry
                      periods. There are several methods which include rooftop
                      capture for small-scale use and surface dams to slow
                      run-off to reduce soil erosion and increase groundwater
                      recharge or aquifer recharge.
                    </p>
                  </li>
                  <li>
                    <p>
                      In day to day activities each one of us could also
                      contribute in conserving water, by taking shorter showers,
                      fixing leaky plumbing, watering the lawn less often.
                    </p>
                  </li>
                  <li>
                    <p>
                      We can take a walk or ride a bike instead of driving a
                      car. Carpooling contributes a lot to reduction of emission
                      from vehicles
                    </p>
                  </li>
                  <li>
                    <p>
                      Improving carbon storage. Wetlands and coastal mangroves
                      are the natural barriers of flooding, erosion and weather
                      conditions which is effective and less expensive. Mangrove
                      soils can conceal three or four times more carbon than
                      terrestrial soils. The dense vegetation of the mangrove
                      helps regulate water flow and binds the soil in flood
                      plains, river banks and coastal lines. Protecting and
                      expanding these types of natural buffers plays a major
                      impact on climate change.
                    </p>
                  </li>
                  <li>
                    <p>
                      Groundwater recharge, water storage and efficient
                      irrigation systems, and improvising agriculture and
                      preventing water stress. Wind and solar power projects can
                      help, too, because they use less water than traditional
                      power plants.
                    </p>
                  </li>
                  <li>
                    <p>
                      In agricultural practices using smart conservation
                      techniques to reduce post-harvest losses and food waste,
                      improve organic matter to increase moisture retention in
                      the soil, drip irrigation.
                    </p>
                  </li>
                  <li>
                    <p>
                      Water recycling or water reclamation of water from a
                      variety of sources. Treated waste water or from other
                      sources can be used for irrigation, industrial and
                      municipal purposes, groundwater replenishment and
                      environmental restoration
                    </p>
                  </li>
                </ul>
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
