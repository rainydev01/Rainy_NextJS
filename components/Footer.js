import React, { Fragment } from 'react';

const Footer = () => {
	return (
		<Fragment>
			<div className="container-fluid footer-main">
				<div className="container">
					<div>
						<div className="col-md-4 ">
							<div className="footer-one">
								<img src="../static/images/logo/Wlogo.png" alt="Footer Logo" />
								<p>
									Farmland Rainwater Harvesting system No 648, Ground Flore, 11th cross, 7th block,
									jaya Nagar, Bengaluru, Karnataka - 560082.
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer-two">
								<h5>Contact US</h5>
								<p>
									<i className="fa fa-whatsapp" aria-hidden="true" /> +91 94480 76595
								</p>
								<p>
									<i className="fa fa-volume-control-phone" aria-hidden="true" /> +91 94481 30524
								</p>
								<p>
									<i className="fa fa-volume-control-phone" aria-hidden="true" /> +91 94494 43232
								</p>
								<p>
									<i className="fa fa-envelope-o" aria-hidden="true" /> farmland_rhs@yahoo.co.in
								</p>
							</div>
						</div>
						<div className="col-md-4 text-center">
							<div className="footer-three">
								<h5>Follow Us</h5>
								<p>
									<i className="fa fa-instagram" aria-hidden="true" />
									<i className="fa fa-facebook-official" aria-hidden="true" />
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</p>
								<div>
									<button>Dealers</button>
								</div>
								<div>
									<button>Enquiry</button>
								</div>
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
