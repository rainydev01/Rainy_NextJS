import React, {Fragment, useEffect} from "react";

const Footer = () => {
	useEffect(() => {
		window.googleTranslateElementInit = googleTranslateElementInit;
	}, []);
	return (
		<Fragment>
			<div className="container-fluid footer-main">
				<div className="container">
					<div>
						<div className="col-md-4 ">
							<div className="footer-one">
								<img src="../static/images/logo/Wlogo.png" alt="Footer Logo" />
								<p>
									Farmland Rainwater Harvesting System No 648, Ground Floor,
									11th cross, 7th Block, Jaya Nagar, Bengaluru, Karnataka -
									560082.
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer-two">
								<h5>Contact US</h5>
								<p>
									<a href="https://api.whatsapp.com/send?phone=+918951831967&text=%20Hello, I wanted to purchase Rainy Filter">
										<i className="fa fa-whatsapp" aria-hidden="true" />
									</a>
									+91 94480 76595
								</p>
								<p>
									<i
										className="fa fa-volume-control-phone"
										aria-hidden="true"
									/>{" "}
									+91 94481 30524
								</p>
								<p>
									<i
										className="fa fa-volume-control-phone"
										aria-hidden="true"
									/>{" "}
									+91 94494 43232
								</p>
								<p>
									<i className="fa fa-envelope-o" aria-hidden="true" />{" "}
									farmland_rhs@yahoo.co.in
								</p>
							</div>
						</div>
						<div className="col-md-4 text-center">
							<div className="footer-three">
								<h5>Follow Us</h5>
								<p>
									<a
										href="https://www.instagram.com/rainy_filters02/"
										target="_blank"
									>
										<i className="fa fa-instagram" aria-hidden="true" />
									</a>
									<a
										href="https://www.facebook.com/rainy.filters"
										target="_blank"
									>
										<i className="fa fa-facebook-official" aria-hidden="true" />
									</a>
									<a
										href="https://www.linkedin.com/in/rainy-filters-a640b11a3/"
										target="_blank"
									>
										<i className="fa fa-linkedin-square" aria-hidden="true" />
									</a>
								</p>

								<div>
									<button>
										{" "}
										<a href="/contact-us/dealers">Dealers</a>{" "}
									</button>
								</div>
								<div>
									<button>
										{" "}
										<a href="/contact-us/enquire">Enquire</a>{" "}
									</button>
								</div>

								{/* <div id="google_translate_element"></div> */}

								<script
									type="text/javascript"
									src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
								/>
								<div id="google_translate_element"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid copyright-main">
				<div className="container">
					<ul>
						<li>
							<a href="# "> Terms & Conditions </a>|
						</li>
						<li>
							<a href="# "> Privacy Policy </a>|
						</li>
						<li>
							<a href="# "> Copyright 2020 </a>
						</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
};

export default Footer;
