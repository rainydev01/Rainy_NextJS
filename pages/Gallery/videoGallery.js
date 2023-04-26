import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReactPlayer from "react-player";

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
          {" "}
          Check our video gallery | rooftop rainwater harvesting system |
          groundwater recharge
        </title>
        <meta
          name="description"
          content="Access our comprehensive range of product information brochures for our innovative rainwater harvesting and groundwater recharge solutions. Download our 'Rainy' product catalogue, instructions manual, and detailed installation guide for 'Rainy' filters. Also, explore our case studies on groundwater recharging and learn about the impact of our solutions. Start your download now and discover how we can help you save water and protect the environment."
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/contact-us/videoGallery"
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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

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
        <div className="videoGallery">
          <Header />{" "}
          <div className="container-fluid banner enternal">
            <div className="hero-image enthroimg"></div>
          </div>
          <div className="video-gallery-main-container">
            <div className="large-video-container">
              <div className="large-video">
                <ReactPlayer
                  width={"100%"}
                  height="500px"
                  url="https://www.youtube.com/watch?v=I4V0QiyKAYs&t"
                />
              </div>
            </div>
            <div className="small-video-container">
              <div className="small-video-small-screen-only small-video">
                <ReactPlayer
                  width={"100%"}
                  height="250px"
                  url="https://www.youtube.com/watch?v=I4V0QiyKAYs&t"
                />
              </div>
              <div className="small-video">
                {" "}
                <ReactPlayer
                  width={"100%"}
                  height={"250px"}
                  url="https://www.youtube.com/watch?v=ViNSf_wiM2E"
                />
              </div>
              <div className="small-video">
                {" "}
                <ReactPlayer
                  width={"100%"}
                  height="250px"
                  url="https://www.youtube.com/watch?v=jJx4_LeaM_0&t"
                />
              </div>
              <div className="small-video">
                {" "}
                <ReactPlayer
                  width={"100%"}
                  height="250px"
                  url="https://www.youtube.com/watch?v=gcD3UMdTs94"
                />
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
