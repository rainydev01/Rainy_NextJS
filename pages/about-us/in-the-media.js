import { Fragment, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider1 from "../../components/SliderNews1";
import Slider2 from "../../components/SliderNews2";
import Slider3 from "../../components/SliderNews3";
import ImageSlider from "../../components/ImageSlider";
import ImageSlider1 from "../../components/ImageSliderMulti";

import ImageSliderArticles from "../../components/ImageSliderForArticles";

export default function Home() {
  const [currentArticle, setCurrentArticle] = useState(1);

  const changeToArticle1 = () => {
    setCurrentArticle(1);
  };

  const changeToArticle2 = () => {
    setCurrentArticle(2);
  };
  const changeToArticle3 = () => {
    setCurrentArticle(3);
  };

  let newsArticle = <Slider1 article2={changeToArticle2} />;

  if (currentArticle === 1) {
    newsArticle = <Slider1 article2={changeToArticle2} />;
  }
  if (currentArticle === 2) {
    newsArticle = (
      <Slider2 article1={changeToArticle1} article3={changeToArticle3} />
    );
  }
  if (currentArticle === 3) {
    newsArticle = <Slider3 article2={changeToArticle2} />;
  }

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
          Articles and Media Coverage talking about Rainy Filters | Rainwater
          Filters
        </title>
        <meta
          name="description"
          content="Articles and Media Coverage talking about Rainy Filters | Rainwater Filters
Learn more about the latest news and updates on Rainy Filters by reading our articles and media coverage! Stay updated on the newest tips and information on how to use our products to efficiently and effectively filter rainwater for your home or business."
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/about-us/in-the-media"
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
              <img src="../../static/images/media/inTheMediaBanner.png" />
              {/* <div className="hero-text inthemedia">
                <h1 style={{ textAlign: "center" }}>IN THE MEDIA</h1>
              </div> */}
            </div>
          </div>
          <div className="container" />
          <div className="container">
            <div className="groundwater_bg team blue_underline">
              <h2 className="team-heading media-hdng blue_underline">
                MEDIA COVERAGE & ARTICLES
              </h2>
            </div>
          </div>
          {/* {newsArticle} */}

          <ImageSliderArticles></ImageSliderArticles>

          {/* <ImageSlider /> */}
          <ImageSlider1></ImageSlider1>
          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
