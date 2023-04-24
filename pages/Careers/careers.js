import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WorkCulture from "../Careers/workCulture";
import OpenPostionsSlider from "./openPositions";
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
          Join Our Team | Exciting Career Opportunities at Rainyfilters{" "}
        </title>
        <meta
          name="description"
          content="Explore career opportunities at Rainyfilters and become part of our mission to provide innovative solutions for rainwater harvesting and groundwater recharge. We offer a range of challenging roles for talented professionals looking to make a positive impact on the environment. Join us today and help shape a more sustainable future!"
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/Careers/careers"
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
              <img src="../../static/images/career/careerPageBanner.png" />
            </div>
          </div>

          <div
            className="container-fluid groundwater_bg team"
            style={{ marginBottom: "-50px" }}
          >
            <div className="container">
              <h2 className="team-heading"></h2>
              <p className="team-para">
                Our company is involved in providing end-to-end rainwater
                harvesting solutions since 2002. We are involved in manufacture
                and supply of RainyFL- range of rooftop rainwater harvesting
                filters and we undertake groundwater recharging projects pan
                India through our unique 'V'-Wire injection well technology. We
                have a network of 130 dealers across India and we export our
                filters to 14 countries globally. We build scientifically
                engineered systems of Rainwater Harvesting, which enables
                customers with economical, high quality and easy to maintain
                products. Our research facility is equipped with Hydraulic
                Testing Lab dedicated to developing innovative rainwater
                harvesting solutions.
              </p>
            </div>
          </div>
          <WorkCulture></WorkCulture>

          <div className="container-fluid groundwater_bg team" style={{}}>
            <div className="container">
              <OpenPostionsSlider />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </Fragment>
  );
}
