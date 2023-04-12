import React, { Fragment } from "react";
import Link from "next/link";

const WhatWeDo = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="container">
          <h2 className="whtdowdo">WHAT DO WE DO?</h2>
        </div>
      </div>

      <div className="container-fluid groundwater_bg_home">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="mt-1" style={{ textAlign: "right" }}>
                <img alt="logo" src="../static/images/homepage/1.jpg" />
              </div>
              <div className="grndtext">
                <h3 style={{ textAlign: "left" }}>
                  <Link href="/products/rainy-filters">
                    <a>Rooftop Rain Water Harvesting Filters</a>
                  </Link>
                </h3>
                <p
                  style={{
                    letterSpacing: "0.1px",
                    textAlign: "left",
                    color: "#000000d4",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                    fontFamily: "Visby Round CF Regular",
                  }}
                >
                  'Rainy' Dual Intensity filters work at high efficiency
                  regardless of the intensity of rainfall and have self-cleaning
                  abilities. At nominal prices, our filters are market leaders
                  in Rooftop Rain Water Harvesting.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mt-1">
                <img src="../static/images/homepage/3.jpg" />
              </div>
              <div className="grndtext">
                <h3 style={{ textAlign: "left", marginBottom: "46px" }}>
                  <Link href="/products/ground-water-recharge">
                    <a>Groundwater Recharging</a>
                  </Link>
                </h3>

                <p
                  style={{
                    letterSpacing: "0.1px",
                    textAlign: "left",
                    color: "#000000d4",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                    fontFamily: "Visby Round CF Regular",
                  }}
                >
                  We have developed a new method of groundwater recharge, called
                  'V-wire injection well' technology. This allows for the
                  groundwater table to be replenished and thus abate water
                  scarcity.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mt-1">
                <img alt="iamegs" src="../static/images/homepage/2.jpg" />
              </div>
              <div className="grndtext">
                <h3 style={{ textAlign: "left", marginBottom: "46px" }}>
                  <Link href="/products/systems-and-solutions">
                    <a>Systems & Solutions</a>
                  </Link>
                </h3>

                <p
                  style={{
                    letterSpacing: "0.1px",
                    textAlign: "left",
                    color: "#000000d4",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "26px",
                    fontFamily: "Visby Round CF Regular",
                  }}
                >
                  Custom made solutions to suit your building or campus. Our
                  expert engineers will help from design to execution of end to
                  end Rain Water Harvesting solutions for your facility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WhatWeDo;
