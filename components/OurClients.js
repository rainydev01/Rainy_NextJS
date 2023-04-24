import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow-right"
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow-left"
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
  );
}

export default class CustomArrows extends Component {
  render() {
    const images = [
      "../static/images/clients/1.png",
      "../static/images/clients/2.png",
      "../static/images/clients/3.png",
      "../static/images/clients/4.png",
      "../static/images/clients/5.png",
      "../static/images/clients/6.png",
      "../static/images/clients/7.png",
      "../static/images/clients/8.png",
      "../static/images/clients/9.png",
      "../static/images/clients/10.png",
      "../static/images/clients/11.png",
      "../static/images/clients/12.png",
      "../static/images/clients/13.png",
      "../static/images/clients/14.png",
      "../static/images/clients/15.png",
      "../static/images/clients/16.png",
      "../static/images/clients/17.png",
      "../static/images/clients/18.png",
      "../static/images/clients/19.png",
      "../static/images/clients/20.png",
      "../static/images/clients/21.png",
      "../static/images/clients/22.png",
      "../static/images/clients/23.png",
    ];
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
      ],
    };
    return (
      <div style={{ padding: 10, margin: 40 }}>
        <div className="container-fluid">
          <div className="container">
            <h2 className="clientsHome">Our Clients</h2>
          </div>
        </div>
        <Slider {...settings}>
          <div className="col-md-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="carousel"
                style={{ width: "50%", height: "50%", margin: "40px" }}
              />
            ))}
          </div>
        </Slider>
      </div>
    );
  }
}
