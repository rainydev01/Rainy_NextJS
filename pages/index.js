import { Fragment, useState } from "react";
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
import CustomerSaying from "../components/CustomerSaying";
import Popup from "../components/Popup";
import { IoMdClose } from "react-icons/io";




const popupStyle = {
  position: 'fixed',
  top: '20px',
  right: '0px',
  transform: 'translateX(-50%)',
  backgroundColor: '#98FB98',
  padding: '10px 20px',
  border: '1px solid #90EE90',
  borderRadius: '14px',
  boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
  zIndex: 1001000000000,
};

const popupStylerror = {
  position: 'fixed',
  top: '20px',
  right: '0px',
  transform: 'translateX(-50%)',
  backgroundColor: '#F4A460',
  padding: '10px 20px',
  border: '1px solid #D2691E',
  borderRadius: '14px',
  boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
  zIndex: 1001000000000,
};

const closeButtonStyle = {
  position: 'absolute',
  top: '5px',
  right: '10px',
  cursor: 'pointer',
  paddingBottom: '20px',
};

const textdata = {
  padding: '10px',
}

export default function Home() {
  const [isOpenPop, setisOpenPop] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false)
  const closePopup = () => {
    setisOpenPop(false);
  }
  const closePopuperror = () => {
    setErrorPopup(false);
  }
  setTimeout(() => {
    setisOpenPop(false);
    setErrorPopup(false);
  }, 3000);



  return (
    <Fragment>
      <Popup setisOpenPop={setisOpenPop} setErrorPopup={setErrorPopup} />

      {isOpenPop && (
        <div style={popupStyle}>
          <span style={closeButtonStyle} onClick={closePopup}>
            <IoMdClose size={22} />
          </span>
          <p style={textdata}>
            Thanks for writing to us, we will get back to you shortly
          </p>
        </div>
      )}

      {errorPopup && (
        <div style={popupStylerror}>
          <span style={closeButtonStyle} onClick={closePopuperror}>
            <IoMdClose size={22} />
          </span>
          <p style={textdata}>
            {" "}
            Oh snap! Something went wrong. Please drop an email at
            farmland_rhs@yahoo.co.in
          </p>
        </div>
      )}

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

        <title>Harvesting System India | Install At Home | Consultants</title>
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
          content="Are you looking for a rain water harvesting system in India for installing at home? We are a rainwater harvesting company provides rain water harvesting consultants services."
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
fbq('init', '342523378416057');
fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=342523378416057&ev=PageView&noscript=1"
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
          <CustomerSaying />
          <ImageSliderMultiClients />
          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
