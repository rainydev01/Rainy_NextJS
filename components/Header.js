import React, { Fragment, useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import axios from 'axios'

const Header = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [iscontact, setiscontact] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  // console.log(showPopup, '=====================>')
  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  //handle Formdata functionality
  const handeFormdata = (v) => {
    let { name, value } = v.target
    setFormData({
      ...formData, [name]: value
    })
  }
  // submit contact enquiry functionality
  const handleSubmit = async (v) => {
    v.preventDefault();
    let emailToSend = { ...formData }
    try {
      if (Object.values(formData).every(v => v !== '')) {
        const respo = await axios.post("https://739o33ovd6.execute-api.ap-south-1.amazonaws.com/Production/", emailToSend)
        console.log(respo);
        setFormData({ name: '', phone: '', email: '', message: '' })
        setShowPopup(false)
      }
    } catch (error) {
      console.error(error.message)
    }
  }

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
                alt="Rainy"
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
                alt="Rainy"
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
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  // data-toggle="modal"
                  // data-target="#contactModal"
                  // onClick={() => { setShowPopup(true); setiscontact(true) }}
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
                <li >
                  <a href="https://www.rainyfilters.shop/" className="btn-shop">
                    Shop Now<BsCart />
                  </a>
                </li>
                <li>
                  <img
                    style={{ paddingLeft: "1.5em", cursor: "pointer" }}
                    data-toggle="modal"
                    data-target="#googleAnalytics"
                    src="/images/logo/globe.png"
                    alt="Globe"
                  ></img>
                </li>
                <li className="list-data-num">
                  <div className="search-num">
                    <MdLocalPhone />
                    <p><a href="tel:+919996664458">+91 99966-64458</a></p>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      {
        showPopup && (
          <div
            className="modal fade contact-modal-main"
            id="contactModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-contact" role="document">
              <div className="modal-content variableMargin" style={{ background: '#f0f9fd' }}>
                <img
                  src="/static/images/contact-form.png"
                  alt="contact-form"
                />
                <div className="contact-details">
                  <div
                    className="modal-header"
                    style={{ border: "none" }}
                  >
                    <h2 className="whtdowdo modal-head " style={{ width: '100%' }} id="exampleModalLongTitle">
                      {iscontact ? "Contact Us" : "RWH Consultancy"}
                    </h2>
                    <button onClick={() => { setShowPopup(false); setiscontact(false) }} className="btn-close"><IoClose /></button>
                  </div>
                  <div
                    style={{ border: "none" }}
                    className="modal-body"
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="fominpt">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          placeholder="Name:"
                          required
                          onChange={handeFormdata}
                        />
                      </div>
                      <div className="fominpt">
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          placeholder="Phone:"
                          required
                          onChange={handeFormdata}
                        />
                      </div>
                      <div className="fominpt">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          placeholder="Email id:"
                          required
                          onChange={handeFormdata}
                        />
                      </div>
                      <div className="fominpt frmmsg">
                        <input
                          type="textarea"
                          name="message"
                          value={formData.message}
                          placeholder="Message:"
                          required
                          onChange={handeFormdata}
                        />
                      </div>
                      <div className="fominpt frmbtn session-btn" style={{ display: 'flex', justifyContent: 'center' }}>
                        <input type="submit" name="Book a Free Session" value={iscontact ? "Submit" : "Book a Free Session"} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
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
    </Fragment >
  );
};

export default Header;
