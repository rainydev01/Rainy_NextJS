import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import WhatWeDo from '../../components/WhatWeDo';
import Footer from '../../components/Footer';
import AboutUs from '../../components/AboutUs';
import RWHFilters from '../../components/RWHFilters';
import FilterToSelect from '../../components/FilterToSelect';
import GroundWaterRecharging from '../../components/GroundWaterRecharging';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Our Journey</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#ffffff" />
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossOrigin="anonymous"
				/>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
			</Head>
			<main>
				<div className="App">
					{/*<h1> Our Journey</h1>*/}
					<Header />
					<div className="container-fluid banner enternal">
						<div className="hero-image enthroimg">
							<img src="../../static/images/journey/Banner.png" />
							<div className="hero-text enthrotxt">
								<h1>OUR JOURNEY</h1>
							</div>
						</div>
					</div>
					<div className="container-fluid journeymain">
						<div className="container">
							<ul className="timeline">
								<li>
									<div class="timeline-badge danger">
										<i class="glyphicon glyphicon-credit-card" />
									</div>
									<div className="timeline-badge right-drop">
										<i className="glyphicon glyphicon-tint">
											<span>2002</span>
										</i>
									</div>

									<div className="timeline-panel">
										<img src="../../static/images/journey/Founded.png" />
										<div className="body-timmain">
											<div className="timeline-heading">
												<h4 className="timeline-title">
													Rainy Research & Manufacturing Founded
												</h4>
											</div>
											<div className="timeline-body">
												<p>
													The first experiments of indirect groundwater recharge, as a method
													to solve water scarcity led to the invention of ‘Injection Well
													Technology’. This was tested on the founders’ farm and resulted in
													successful borewell recharge and continous water yield. Thus, FLRWH
													was born and the news of the success story spread far and wide.
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div
						className="container-fluid"
						style={{ backgroundImage: 'url(/static/images/halfdropbg.png)', backgroundRepeat: 'no-repeat' }}
					>
						<div className="container">
							<ul className="timeline">
								<li className="timeline-inverted">
									<div className="timeline-badge warning">
										<i className="glyphicon glyphicon-credit-card" />
									</div>
									<div className="timeline-badge left-drop">
										<i className="glyphicon glyphicon-tint">
											<span>2003</span>
										</i>
									</div>
									<div className="timeline-panel right-imghis">
										<img src="../../static/images/journey/Turnkey.png" />
										<div className="body-timmain">
											<div className="timeline-heading">
												<h4 className="timeline-title">First Turnkey Project</h4>
											</div>
											<div className="timeline-body">
												<p>
													Our first major project was carried out with IFFCO Funding for the
													benefit of Farmers in Kolar.Through this 650 borewells were
													successfully recharged. Alongside our first turnkey bore-well
													project, there was an increase in the demand for rooftop rainwater
													harvesting as well. To cater to this SS304 candle type rainwater
													harvesting filter was introduced.
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div
						className="container-fluid"
						style={{
							backgroundImage: 'url(/static/images/singledroprightbg.png)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'bottom right'
						}}
					>
						<div className="container">
							<ul className="timeline">
								<li>
									<div className="timeline-badge danger">
										<i className="glyphicon glyphicon-credit-card" />
									</div>
									<div className="timeline-badge right-drop">
										<i className="glyphicon glyphicon-tint">
											<span>2004</span>
										</i>
									</div>
									<div className="timeline-panel">
										<img src="../../static/images/journey/Expansion.png" />
										<div className="body-timmain">
											<div className="timeline-heading">
												<h4 className="timeline-title">Expansion of Network</h4>
											</div>
											<div className="timeline-body">
												<p>
													In order to cater to a larger customer base and with a broader
													mission to conserve water, we enabled a large dealership network
													across the globe. Currently we have expanded to over 131 dealers
													across India, and export our filters to over 9 countries and we are
													continuing to grow.
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div
						className="container-fluid"
						style={{
							backgroundImage: 'url(/static/images/singledropbg.png)',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'bottom left'
						}}
					>
						<div className="container">
							<ul className="timeline">
								<li className="timeline-inverted">
									<div className="timeline-badge danger">
										<i className="glyphicon glyphicon-credit-card" />
									</div>
									<div className="timeline-badge left-drop">
										<i className="glyphicon glyphicon-tint">
											<span>2005</span>
										</i>
									</div>
									<div className="timeline-panel right-imghis">
										<img src="../../static/images/journey/LaunchRF.png" />
										<div className="body-timmain">
											<div className="timeline-heading">
												<h4 className="timeline-title">Launch of Rainy Filters</h4>
											</div>
											<div className="timeline-body">
												<p>
													Conventional RWH filters available in the market had multiple
													drawbacks including clogging & frequent maintenance. To overcome
													these obstacles, a highly efficient, vertical inlet RWH filter with
													open ended drain outlet was discovered. This was our first attempt
													at unconventional rooftop RWH filters.
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="container-fluid">
						<div className="container">
							<ul className="timeline">
								<li>
									<div className="timeline-badge danger">
										<i className="glyphicon glyphicon-credit-card" />
									</div>
									<div className="timeline-badge right-drop">
										<i className="glyphicon glyphicon-tint">
											<span>2007</span>
										</i>
									</div>
									<div className="timeline-panel">
										<img src="../../static/images/journey/Expansion.png" />
										<div className="body-timmain">
											<div className="timeline-heading">
												<h4 className="timeline-title">
													Self-Cleaning Rainy RWH Filter Launched
												</h4>
											</div>
											<div className="timeline-body">
												<p>
													After rigorous R&D, we developed a new model of Rainy filters, which
													possessed horizontal inlet with self-cleaning mechanism. This made
													the filter more efficient and two models to suit different rooftop
													areas were launched.
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="container-fluid">
						<div className="container">
							<ul className="timeline">
								<li className="timeline-inverted">
									<div className="timeline-badge danger">
										<i className="glyphicon glyphicon-credit-card" />
									</div>
									<div className="timeline-badge left-drop">
										<i className="glyphicon glyphicon-tint">
											<span>2011</span>
										</i>
									</div>
									<div className="timeline-panel right-imghis">
										<img src="../../static/images/journey/LaunchRF.png" />
										<div className="body-timmain">
											<div className="timeline-heading">
												<h4 className="timeline-title">
													Four New Models of Dual Intensity Rainy Filters Introduced
												</h4>
											</div>
											<div className="timeline-body">
												<p>
													To cater to growing demands for cost effective filters, we
													introduced 4 new models of Rainy Filters. An added advantage was the
													development of dual intensity mechanism with auto flush out, which
													enabled high efficiency filtration for variable intensity of
													rainfall.
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="container-fluid rainyresearchnm">
						<div className="container">
							<ul className="timeline">
								<li>
									<div className="timeline-badge danger">
										<i className="glyphicon glyphicon-credit-card" />
									</div>
									<div className="timeline-badge right-drop">
										<i className="glyphicon glyphicon-tint">
											<span>2016</span>
										</i>
									</div>
									<div className="timeline-panel">
										<img src="../../static/images/journey/Expansion.png" />
										<div className="body-timmain">
											<div className="timeline-heading">
												<h4 className="timeline-title">Rainy Research & Manufacturing</h4>
											</div>
											<div className="timeline-body">
												<p>
													We established our in house research & manufacturing site at
													Hadihalli in Chikmagalur. This houses state of the art hydraulic
													testing labs, live demonstration facility, education centre and
													manufacturing unit. A unique, completely sustainable facility
													dedicated to rain water conservation and innovation to mitigate
													climate change.
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="container-fluid fl80rooftop">
						<div className="container">
							<ul className="timeline">
								<li className="timeline-inverted">
									<div className="timeline-badge danger">
										<i className="glyphicon glyphicon-credit-card" />
									</div>
									<div className="timeline-badge left-drop">
										<i className="glyphicon glyphicon-tint">
											<span>2020</span>
										</i>
									</div>
									<div className="timeline-panel right-imghis">
										<img src="../../static/images/journey/LaunchRF.png" />
										<div className="body-timmain">
											<div className="timeline-heading">
												<h4 className="timeline-title">FL80 Rooftop RWH Filter Launched</h4>
											</div>
											<div className="timeline-body">
												<p>Txt to be updated.</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div className="container-fluid">
						<div className="container">
							<ul className="timeline">
								<li className="timeline-inverted">
									<div className="timeline-panel right-imghis">
										<div className="">
											<div className="timeline-heading">
												<h4 className="timeline-title">Our Journey Continues...</h4>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<Footer />
				</div>
			</main>

			<footer />
		</Fragment>
	);
}
