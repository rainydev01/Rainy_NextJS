import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";

const ImageSliderMulti = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Fragment>
      <div style={{ marginTop: "8%" }}></div>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        <div className="container-fluid award-image">
          <div className="container awrdimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/ourTeam/1.jpg"
            />
          </div>
        </div>
        <div className="container-fluid award-image">
          <div className="container awrdimgsec text-center ">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/ourTeam/2.jpg"
            />
          </div>
        </div>
        <div className="container-fluid award-image">
          <div className="container awrdimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/ourTeam/3.jpg"
            />
          </div>
        </div>
        <div className="container-fluid award-image">
          <div className="container awrdimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/ourTeam/4.jpg"
            />
          </div>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default ImageSliderMulti;
