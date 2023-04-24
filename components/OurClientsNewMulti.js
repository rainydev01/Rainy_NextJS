import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";

const ImageSliderMultiClients = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
      <div style={{ marginTop: "" }}></div>
      <div className="container-fluid">
        <div className="container">
          <h2 className="clientsHome">Our Clients</h2>
        </div>
      </div>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/1.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center ">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/2.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/3.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/4.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/5.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/6.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/7.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/8.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/9.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/10.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/11.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/12.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/13.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/14.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/15.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/16.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/17.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/18.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/19.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/20.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/21.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/22.png"
            />
          </div>
        </div>
        <div className="container-fluid clients-image">
          <div className="container cliimgsec text-center">
            <img
              className="rounded mx-auto d-block"
              src="../static/images/clients/23.png"
            />
          </div>
        </div>
      </Carousel>
      <div style={{ marginTop: "8%" }}></div>
    </Fragment>
  );
};

export default ImageSliderMultiClients;
