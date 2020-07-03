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
			</Head>
			<main>
				<div className="App">
					<h1> Our Journey</h1>
					<Header />
					<div className="container-fluid banner enternal">
						<div className="hero-image enthroimg">
							<img src="../../static/images/journey/Banner.png" />
							<div className="hero-text enthrotxt">
								<h1>OUR JOURNEY</h1>
							</div>
						</div>
					</div>
					<div className="container">
						<ul className="timeline">
							<li>
								<div className="timeline-badge">
									<i className="glyphicon glyphicon-check" />
								</div>
								<div className="timeline-badge right-drop">
									<i className="glyphicon glyphicon-tint">
										<span>
											11 July<br />2012
										</span>
									</i>
								</div>

								<div className="timeline-panel">
									<img src="../../static/images/journey/Founded.png" />
									<div className="body-timmain">
										<div className="timeline-heading">
											<h4 className="timeline-title">FLRWH Founded</h4>
										</div>
										<div className="timeline-body">
											<p>
												Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is
												a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is a dummy text.{' '}
											</p>
										</div>
									</div>
								</div>
							</li>
							<li className="timeline-inverted">
								<div className="timeline-badge warning">
									<i className="glyphicon glyphicon-credit-card" />
								</div>
								<div className="timeline-badge left-drop">
									<i className="glyphicon glyphicon-tint">
										<span>
											23 Aug<br />2014
										</span>
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
												Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is
												a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is a dummy text.{' '}
											</p>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="timeline-badge danger">
									<i className="glyphicon glyphicon-credit-card" />
								</div>
								<div className="timeline-badge right-drop">
									<i className="glyphicon glyphicon-tint">
										<span>
											21 Nov<br />2017
										</span>
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
												Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is
												a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is a dummy text.{' '}
											</p>
										</div>
									</div>
								</div>
							</li>
							<li className="timeline-inverted">
								<div className="timeline-badge danger">
									<i className="glyphicon glyphicon-credit-card" />
								</div>
								<div className="timeline-badge left-drop">
									<i className="glyphicon glyphicon-tint">
										<span>
											23 Aug<br />2014
										</span>
									</i>
								</div>
								<div className="timeline-panel right-imghis">
									<img src="../../static/images/journey/LaunchRF.png" />
									<div className="body-timmain">
										<div className="timeline-heading">
											<h4 className="timeline-title">Launch Of Rainy Filters</h4>
										</div>
										<div className="timeline-body">
											<p>
												Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is
												a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is a dummy text.{' '}
											</p>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="timeline-badge info">
									<i className="glyphicon glyphicon-floppy-disk" />
								</div>
								<div className="timeline-panel">
									<img src="../../static/images/journey/SelfCleaning.png" />
									<div className="body-timmain">
										<div className="timeline-heading">
											<h4 className="timeline-title">Self Cleaning Rainy RWH</h4>
										</div>
										<div className="timeline-body">
											<p>
												Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is
												a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is a dummy text.{' '}
											</p>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div className="timeline-panel">
									<img src="../../static/images/journey/DualIntensity.png" />
									<div className="body-timmain">
										<div className="timeline-heading">
											<h4 className="timeline-title">Four New Models of Dual Intensity</h4>
										</div>
										<div className="timeline-body">
											<p>
												Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is
												a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is a dummy text.{' '}
											</p>
										</div>
									</div>
								</div>
							</li>
							<li className="timeline-inverted">
								<div className="timeline-badge success">
									<i className="glyphicon glyphicon-thumbs-up" />
								</div>
								<div className="timeline-panel">
									<img src="../../static/images/journey/RainyResearch.png" />
									<div className="body-timmain">
										<div className="timeline-heading">
											<h4 className="timeline-title">Rainy Research & Manufacturing</h4>
										</div>
										<div className="timeline-body">
											<p>
												Lorum ipsum is a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is
												a dummy text. Lorum ipsum is a dummy text. Lorum ipsum is a dummy text.{' '}
											</p>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<Footer />
				</div>
			</main>

			<footer />
		</Fragment>
	);
}
