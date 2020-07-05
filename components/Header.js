import React, { Fragment } from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<Fragment>
			<div className="container-fluid test main-header">
				<input type="checkbox" className="menu-toggle" id="menu-toggle" />
				<div className="mobile-bar">
					<label htmlFor="menu-toggle" className="menu-icon">
						<span />
					</label>
				</div>

				<div className="container">
					<header className="header">
						<a className="navbar-brand" href="/" style={{ padding: '0px' }}>
							<img src="../static/images/logo/logo.png" />
						</a>
						<nav>
							<ul>
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
									<a href="#" className="dropdown-toggle" data-toggle="dropdown">
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
									</div>
								</li>
								<li>
									<a href="/technology">Technology</a>
								</li>
								<li>
									<a href="#" className="dropdown-toggle" data-toggle="dropdown">
										Products
									</a>
									<div className="dropdown-menu dropdown-menu-tip-nw">
										<a href="/products/rainy-filters" className="dropdown-item">
											Rainy Filters
										</a>
										<a href="/products/ground-water-recharge" className="dropdown-item">
											Groundwater Recharge
										</a>
										<a href="/products/systems-and-solutions" className="dropdown-item">
											Systems & Solutions
										</a>
									</div>
								</li>
								<li>
									<a href="/gallery">Gallery</a>
								</li>
								<li>
									<a href="#" className="dropdown-toggle diffcolormenu" data-toggle="dropdown">
										Contact us
									</a>
									<div className="dropdown-menu dropdown-menu-tip-nw">
										<a href="/contact-us/enquire" className="dropdown-item">
											Enquire
										</a>
										<a href="/contact-us/dealers" className="dropdown-item">
											Dealers
										</a>
										<a href="/contact-us/downloads" className="dropdown-item">
											Downloads
										</a>
									</div>
								</li>
							</ul>
						</nav>
					</header>
				</div>
			</div>
		</Fragment>
	);
};

export default Header;
