import { Fragment, useState, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from "react-photo-gallery";

import Carousel, { Modal, ModalGateway } from "react-images";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [selectedView, setSelectedView] = useState(1);

  let gallerySelectedComponent = null;
  let basicCSS = "btn btn-default filter-button";

  const onChange = (value) => {
    setSelectedView(parseInt(value));
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: "../static/images/galleryNew/Apartment.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/BorewellRings.JPG",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/Expansionofnetwork.JPG",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/GovtBuilding.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/GroundWaterRecharing.JPG",
      width: 4,
      height: 3,
    },
    // {
    // 	src: "../static/images/galleryNew/Image91.png",
    // 	width: 4,
    // 	height: 3,
    // },
    {
      src: "../static/images/galleryNew/IndependentHouse.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/Industries.JPG",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/InternationalVisitors.JPG",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/ITSector.JPG",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/LiveDemoTruck.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/R _ D.JPG",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/RooftopRWH.JPG",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/Schools.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/SystemsandSolutions.JPG",
      width: 4,
      height: 3,
    },
    {
      src: "../static/images/galleryNew/WithDignitaries.JPG",
      width: 4,
      height: 3,
    },
  ];

  let basicCSS1 = "btn btn-default filter-button ";
  let basicCSS2 = "btn btn-default filter-button ";
  let basicCSS3 = "btn btn-default filter-button ";
  let basicCSS4 = "btn btn-default filter-button ";
  let basicCSS5 = "btn btn-default filter-button ";
  let basicCSS6 = "btn btn-default filter-button ";
  let basicCSS7 = "btn btn-default filter-button ";
  let basicCSS8 = "btn btn-default filter-button ";
  let basicCSS9 = "btn btn-default filter-button ";
  let basicCSS10 = "btn btn-default filter-button ";
  let basicCSS11 = "btn btn-default filter-button ";
  let basicCSS12 = "btn btn-default filter-button ";
  let basicCSS13 = "btn btn-default filter-button ";
  let basicCSS14 = "btn btn-default filter-button ";
  let basicCSS15 = "btn btn-default filter-button ";

  //for all images

  if (selectedView === 1) {
    basicCSS1 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Fragment>
    );
  }

  // for Rooftp RWh

  if (selectedView === 2) {
    basicCSS2 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/RooftopRWH.JPG"
        />
      </Fragment>
    );
  }

  // for GWR
  if (selectedView === 3) {
    basicCSS3 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/GroundWaterRecharing.JPG"
        />
      </Fragment>
    );
  }

  // for Govt Buidld
  if (selectedView === 4) {
    basicCSS4 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/GovtBuilding.jpg"
        />
      </Fragment>
    );
  }

  // Borewell Rings
  if (selectedView === 5) {
    basicCSS5 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/BorewellRings.JPG"
        />
      </Fragment>
    );
  }

  //Schools
  if (selectedView === 6) {
    basicCSS6 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/Schools.jpg"
        />
      </Fragment>
    );
  }

  // for GWR Apartment
  if (selectedView === 7) {
    basicCSS7 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/Apartment.jpg"
        />
      </Fragment>
    );
  }

  //Houses
  if (selectedView === 8) {
    basicCSS8 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/IndependentHouse.jpg"
        />
      </Fragment>
    );
  }

  //industries
  if (selectedView === 9) {
    basicCSS9 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/Industries.JPG"
        />
      </Fragment>
    );
  }

  //digni
  if (selectedView === 10) {
    basicCSS10 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/WithDignitaries.JPG"
        />
      </Fragment>
    );
  }

  //RD
  if (selectedView === 11) {
    basicCSS11 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/R _ D.JPG"
        />
      </Fragment>
    );
  }

  // syst and soln
  if (selectedView === 12) {
    basicCSS12 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/SystemsandSolutions.JPG"
        />
      </Fragment>
    );
  }

  //Intl Vistors
  if (selectedView === 13) {
    basicCSS13 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/InternationalVisitors.JPG"
        />
      </Fragment>
    );
  }

  //Live demo truck
  if (selectedView === 14) {
    basicCSS14 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/LiveDemoTruck.jpg"
        />
      </Fragment>
    );
  }

  //IT sector
  if (selectedView === 15) {
    basicCSS15 = "btn btn-default filter-button filter-button-active";
    gallerySelectedComponent = (
      <Fragment>
        <img
          // style={{borderRadius: 20}}
          className=" center-block img-fluid"
          src="../static/images/galleryNew/ITSector.JPG"
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>
          Check our project gallery | rooftop rainwater harvesting system |
          groundwater recharge
        </title>
        <meta
          name="description"
          content="Our project gallery features some of our latest and greatest projects. From our rooftop rainwater harvesting system to our groundwater recharge, we're always working on something new. Check out our gallery to see what we've been up to lately"
        />
        <link rel="canonical" href="https://www.rainyfilters.com/gallery" />
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
              <img src="../static/images/galleryNew/galleryPageBanner.png" />
              {/* <div className='hero-text rnyfltrs gllryb'>
								<h1>GALLERY</h1>
							</div> */}
            </div>
          </div>

          <div className="container-fluid gallrymain">
            <div className="container glrycntnr">
              <div className="row">
                <div className="col text-center">
                  <div class="glrymnu" align="center">
                    <button
                      onClick={() => {
                        onChange(1);
                      }}
                      className={basicCSS1}
                      data-filter="all"
                      style={{ padding: "5px 45px" }}
                    >
                      All
                    </button>
                    <button
                      onClick={() => {
                        onChange(2);
                      }}
                      className={basicCSS2}
                      data-filter="hdpe"
                    >
                      Rooftop RWH
                    </button>
                    <button
                      onClick={() => {
                        onChange(3);
                      }}
                      className={basicCSS3}
                      data-filter="hdpe"
                    >
                      Groundwater Recharging
                    </button>
                    <button
                      onClick={() => {
                        onChange(4);
                      }}
                      className={basicCSS4}
                      data-filter="sprinkle"
                    >
                      Govt. Buildings
                    </button>
                    <button
                      onClick={() => {
                        onChange(5);
                      }}
                      className={basicCSS5}
                      data-filter="sprinkle"
                    >
                      Borewell Rigs
                    </button>
                    <button
                      onClick={() => {
                        onChange(6);
                      }}
                      className={basicCSS6}
                      data-filter="spray"
                    >
                      Schools
                    </button>
                    <button
                      onClick={() => {
                        onChange(7);
                      }}
                      className={basicCSS7}
                      data-filter="irrigation"
                    >
                      Apartments
                    </button>
                    <button
                      onClick={() => {
                        onChange(8);
                      }}
                      className={basicCSS8}
                      data-filter="irrigation"
                    >
                      Houses
                    </button>
                    <button
                      onClick={() => {
                        onChange(9);
                      }}
                      className={basicCSS9}
                      data-filter="irrigation"
                    >
                      Industries
                    </button>
                    <button
                      onClick={() => {
                        onChange(10);
                      }}
                      className={basicCSS10}
                      data-filter="irrigation"
                    >
                      With Dignitaries
                    </button>
                    <button
                      onClick={() => {
                        onChange(11);
                      }}
                      className={basicCSS11}
                      data-filter="irrigation"
                    >
                      R & D
                    </button>
                    <button
                      onClick={() => {
                        onChange(12);
                      }}
                      className={basicCSS12}
                      data-filter="irrigation"
                    >
                      Systems and Solutions
                    </button>
                    <button
                      onClick={() => {
                        onChange(13);
                      }}
                      className={basicCSS13}
                      data-filter="irrigation"
                    >
                      International Visitors
                    </button>
                    <button
                      onClick={() => {
                        onChange(14);
                      }}
                      className={basicCSS14}
                      data-filter="irrigation"
                    >
                      Live Mobile - Demo Vehicle
                    </button>
                    <button
                      onClick={() => {
                        onChange(15);
                      }}
                      className={basicCSS15}
                      data-filter="irrigation"
                    >
                      IT Sector
                    </button>
                  </div>
                  <br />
                  <br />

                  <div className="pl-4 pr-2">{gallerySelectedComponent}</div>
                </div>
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
