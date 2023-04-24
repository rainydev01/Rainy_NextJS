import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="test container-fluid main-header">
        <div className="row">
          <input type="checkbox" className="menu-toggle" id="menu-toggle" />
          <div className="mobile-bar">
            <a href="/">
              <img
                src="/images/logo/Logo_Main.png"
                className="moblogo img-fluid"
              />
            </a>

            <label htmlFor="menu-toggle" className="menu-icon">
              <span></span>
            </label>
          </div>

          <header className="header container">
            <a className="navbar-brand" href="/" style={{ padding: "0px" }}>
              <img
                className="img-fluid img-short"
                src="/images/logo/Logo_Main.png"
              />
            </a>
            <nav>
              <ul>
                <li>
                  <a href="/">
                    <a>Home</a>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    About Us
                  </a>
                  <div className="dropdown-menu dropdown-menu-tip-nw">
                    <a href="/about-us/our-journey" className="dropdown-item">
                      Our Journey
                    </a>
                    <a href="/about-us/in-the-media" className="dropdown-item">
                      In The Media
                    </a>
                    <a href="/about-us/our-team" className="dropdown-item">
                      Our Team
                    </a>
                    <a
                      href="/about-us/social-awareness"
                      className="dropdown-item"
                    >
                      Social Awareness
                    </a>
                    <a href="/about-us/blogs" className="dropdown-item">
                      Blog
                    </a>
                  </div>
                </li>

                <li>
                  <a href="/technology">Technology</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Products
                  </a>
                  <div className="dropdown-menu dropdown-menu-tip-nw">
                    <a href="/products/rainy-filters" className="dropdown-item">
                      Rainy Filters
                    </a>
                    <a
                      href="/products/ground-water-recharge"
                      className="dropdown-item"
                    >
                      Groundwater Recharge
                    </a>
                    <a
                      href="/products/systems-and-solutions"
                      className="dropdown-item"
                    >
                      Systems & Solutions
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Gallery
                  </a>
                  <div className="dropdown-menu dropdown-menu-tip-nw">
                    <a href="/Gallery/gallery" className="dropdown-item">
                      Photo Gallery
                    </a>
                    <a href="/Gallery/videoGallery" className="dropdown-item">
                      Video Gallery
                    </a>
                  </div>
                  {/* <a href="/gallery"> Gallery</a> */}
                </li>
                <li>
                  <a href="/Careers/careers">
                    <a>Careers</a>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle diffcolormenu"
                    data-toggle="dropdown"
                  >
                    Contact us
                  </a>
                  <div className="dropdown-menu dropdown-menu-tip-nw">
                    <a href="/contact-us/enquire" className="dropdown-item">
                      Enquire
                    </a>
                    <a href="/contact-us/faq" className="dropdown-item">
                      FAQ
                    </a>
                    <a href="/contact-us/downloads" className="dropdown-item">
                      Downloads
                    </a>
                  </div>
                </li>
                <li>
                  <img
                    style={{ paddingLeft: "1.5em", cursor: "pointer" }}
                    data-toggle="modal"
                    data-target="#googleAnalytics"
                    src="/images/logo/globe.png"
                  ></img>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <div
        className="modal fade"
        id="googleAnalytics"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content variableMargin">
            <div
              className="modal-header"
              style={{ display: "flex", margin: "auto", border: "none" }}
            >
              <h5 className="modal-title" id="exampleModalLongTitle">
                Translate
              </h5>
            </div>
            <div
              style={{ display: "flex", margin: "auto", border: "none" }}
              className="modal-body"
            >
              <script
                type="text/javascript"
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
              />
              <div id="google_translate_element"></div>
            </div>
            <div
              style={{ display: "flex", margin: "auto", border: "none" }}
              className="modal-footer"
            >
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
