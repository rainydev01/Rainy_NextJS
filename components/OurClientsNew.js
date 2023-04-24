import React, { Component, Fragment } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow-right-awards onlyteamr"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow-left-awards onlyteaml"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Fragment>
        <div style={{ marginTop: "8%" }}>
          <Slider {...settings}>
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
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
            <div className="container-fluid clients-image">
              <div className="container cliimgsec text-center">
                <img
                  className="rounded mx-auto d-block"
                  src="../static/images/clients/1.png"
                />
              </div>
            </div>
          </Slider>
        </div>
      </Fragment>
    );
  }
}
