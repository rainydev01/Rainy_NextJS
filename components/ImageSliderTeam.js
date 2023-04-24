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
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Fragment>
        <div style={{ marginTop: "8%" }}>
          <Slider {...settings}>
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
          </Slider>
        </div>
      </Fragment>
    );
  }
}
