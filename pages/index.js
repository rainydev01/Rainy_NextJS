import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Banner from "../components/Banner";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import RWHFilters from "../components/RWHFilters";
import FilterToSelect from "../components/FilterToSelect";
import GroundWaterRecharging from "../components/GroundWaterRecharging";
import OurClients from "../components/OurClientsMulti";

import MultiCarousel from "../components/OurClientsNew";
import Slider from "react-slick";
import ImageSliderMultiClients from "../components/OurClientsNewMulti";
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
          Rainyfilters - Rainwater harvesting system in India | Company |
          Consultants | Services
        </title>
        <link rel="canonical" href="https://www.rainyfilters.com/" />
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
          content="Are you looking for a rain water harvesting system in India? We are a rainwater harvesting company that provides rain water harvesting consultants and services. We can help you install a rainwater harvesting system in your home or business. Contact us today for a free consultation."
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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Farmland Rainwater Harvesting systems",
              alternateName: "Rainy",
              url: "http://rainyfilters.com/",
              logo: "",
              sameAs: [
                " https://www.facebook.com/Rainyfilters2002",
                "https://twitter.com/rainy_filters02",
                "https://www.instagram.com/rainy_filters02/",
                "https://www.youtube.com/channel/UCmGOEYld3MLeJJ3KtZt0NzA",
                "https://www.linkedin.com/company/rainy",
                "https://www.indiamart.com/farmlandrainwaterharvestingsystems/",
                "http://www.rainyfilters.com/",
              ],
            }),
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
          <Banner />
          <WhatWeDo />
          <AboutUs />
          <RWHFilters />
          <FilterToSelect />
          <GroundWaterRecharging />
          <ImageSliderMultiClients />
          {/* <ViedoView />  */}
          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
