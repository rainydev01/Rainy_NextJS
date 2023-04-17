import { Fragment, useState } from "react";
import Head from "next/head";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Slider1 from "../../../components/SliderNews1";
import Slider2 from "../../../components/SliderNews2";
import Slider3 from "../../../components/SliderNews3";

import ImageSliderBLogNew from "../../../components/imageSliderBlogNew";

// const SliderSwitcher = ({currentArticle, changeToArticle}) => {

//     switch (currentArticle) {
//         case 1:

//             return <Slider1

//         default:
//             break;
//     }
// }

export default function Blogs() {
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
          Blogs about rain water rainwater harvesting filters, benefits and
          usages, advantages, more
        </title>
        <meta
          name="description"
          content="Get all the information you need to know about rain water harvesting and how it can benefit you. We have a wide range of articles discussing the advantages and disadvantages of rain water harvesting, as well as tips on how to get started. Check us out today to see how rain water harvesting can change your life."
        />
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/about-us/blogs"
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
              <img src="../../static/images/blogs/blogsPageBanner.png" />
              {/* <div className="hero-text inthemedia">
                <h1 style={{ textAlign: "center" }}>BLOG</h1>
              </div> */}
            </div>
          </div>

          <div className="container">
            <div className="groundwater_bg team blue_underline">
              <h3
                className="team-heading media-hdng blue_underline"
                style={{ textAlign: "center", marginTop: "45px" }}
              >
                STORIES , INSIGHTS ,AND ANNOUNCEMENTS FROM 'RAINY'
              </h3>
            </div>
          </div>
          {/* {newsArticle} */}

          <ImageSliderBLogNew />
          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
