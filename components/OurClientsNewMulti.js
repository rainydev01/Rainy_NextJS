import React, { Fragment, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageSliderMultiClients = () => {
  const [showPopup, setShowPopup] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const images = Array.from({ length: 23 }, (_, index) => (
    `../static/images/clients/${index + 1}.png`
  ));

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="container">
          <h2 className="clientsHome">Our Clients</h2>
        </div>
      </div>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        {images.map((image, index) => (
          <div className="clients-image" key={index}>
            <div className="cliimgsec text-center">
              <img
                className="rounded mx-auto d-block"
                src={image}
                alt={`Client ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Carousel>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={openPopup}
          style={{
            fontSize: "20px", 
            color: "#0971b7",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "10px 20px",
            borderRadius: "4px",
            textDecoration: "none", 
            fontfamily: "Visby Round CF Regular",
          }}
        >
          See More
        </button>
      </div>

      {/* Popup Component */}
      {showPopup && (
        <div className="client-popup"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closePopup}
        >
          <div
            style={{
              position: "relative",
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "90%",
              maxHeight: "80%",
              marginTop: "60px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              style={{
                position: "absolute",
                top: "-15px", 
                right: "15px", 
                background: "transparent",
                border: "none",
                fontSize: "40px", 
                cursor: "pointer",
                color: "#000",
              }}
            >
              &times;
            </button>
            <img
              src="../static/images/clients/our_clients-popup.jpeg"
              alt="Popup"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ImageSliderMultiClients;
