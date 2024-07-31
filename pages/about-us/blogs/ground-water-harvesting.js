import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import React from "react";

export default function Ground_Water_Harvesting()
{

    return(
    
    <Fragment>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168445645-1" ></script>
  
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

            <title>Ground Water Harvesting | Rainy</title>
	        <meta name="description" content="Rainy brings you effective groundwater harvesting techniques. Preserve precious water resources and create a sustainable future with our innovative solutions."/>
            <link rel="canonical" href="https://www.rainyfilters.com/about-us/blogs/ground-water-harvesting"/>
	        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        </Head>
        <main>
            <div className="App">
                {/*<h1> Media</h1>*/}
                <Header />
                <div className="container-fluid banner enternal">
                    <div className="hero-image enthroimg">
                        {/*<img src="../../../static/images/blogs/rainwaterHarvestingInDifferetCountriesBackground.png" style={{}} />*/}
                        <div className="hero-text inthemedia">
                            <h1 style={{ textAlign: "center" }}></h1>
                        </div>
                    </div>
                </div>
  
                <div className="container">
                    <div className="groundwater_bg team blue_underline">
                        <p className="team-heading media-hdng blue_underline" style={{ textAlign: "center", font: "" }} >
                        {/* STORIES , INSIGHTS , and ANNOUNCEMENTS FROM RAINY */}
                        </p>
                    </div>
  
                    <div className="blog-content">
                        <div className="blog-info">
                            <h1>Start Ground Water Harvesting Today with Rainy!</h1>
                            <p>
                            Ground water harvesting is among the best techniques to conserve water resources while ensuring that the communities have sufficient access to a reliable source of water. So, if you are seeking a professional company specialising in <strong>ground water harvesting</strong>, we at Rainy could be your destination. Our wide range of services helps businesses, individuals, and municipalities to collect, conserve, and use ground water efficiently.
                            </p>

                            <h2>Use Our Ground Water Recharge Technology to Replenish the Water Table</h2>
                            <p>
                            At Rainy, one of our prominent services includes ground water recharging technology. It helps to restore drinking water borewells via a 'V' wire technology. It renews the groundwater source while replenishing the water. Rainwater runoff is directed through a channel into a silt trap, then to an injection well, where it undergoes filtration using several media before entering a specifically designed storage well. The storage well features dual V-Wire screens connected to a percolator pipe that do not clog. The filtered water is then allowed to percolate through the earth's strata, ultimately replenishing the water table and recharging the groundwater source.
                            </p>
  
                            

                            <h3>What Else Do We Offer?</h3>
                            <p>
                            Besides offering <strong>ground water harvesting</strong> and recharge systems, we also provide consultation services to our clients to help them assess water quantity and quality, develop sustainable groundwater management plans, and navigate regulatory requirements. We collaborate with clients like individuals, government, or non-profit organisations to develop and implement sustainable ground water harvesting techniques. 
                            </p>

                            

                            <h3>Consult Our Professionals for A Professional Service</h3>
                            <p>
                            At Rainy, our mission involves improving and maintaining the ground water level in the years to come. Our team focuses on ensuring that you have access to a reliable source of water using advanced technology and scientific methods to collect and conserve groundwater at your location.                             
                            </p>

                            <p>Our group of competent and knowledgeable experts has implemented various projects successfully, and our journey continues. So, if you, too, want to play your part in overcoming the water scarcity situations of today through <a href="https://www.rainyfilters.com/">ground water harvesting</a>, give us a call or mail us to learn about our services and let us serve you better.</p>
                  
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