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
				<title>Media</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossOrigin="anonymous"
				/>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
			</Head>
			<main>
				<div className="App">
					<h1> Media</h1>
					<Header />
					<div className="container-fluid banner enternal" style={{marginTop: '-6%'}}>
						<div className="hero-image enthroimg">
							<img src="../../static/images/media/mediaBanner.png" />
							<div className="hero-text inthemedia">
								<h1>IN THE MEDIA</h1>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="groundwater_bg team">
							<h2 className="team-heading media-hdng">MEDIA COVERAGE & ARTICLES</h2>
						</div>
					</div>

					<div className="container media-main">
						<div className="col-md-4">
							<div className="sec-brdr">
								<div className="mdiaimg">
									<img src="../../static/images/media/media1.png" />
								</div>
								<div className="mdiacont">
									<div className="grndtext">
										<h3>
											Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence
											Award.
										</h3>
										<p
											style={{
												textAlign: 'left',
												color: '#588097',
												fontSize: '12px',
												fontWeight: '500',
												letterSpacing: '0.5px'
											}}
										>
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
										</p>
										<div className="mdiasocial">
											<div className="col-md-6 mediasocial">
												<i className="fa fa-facebook" aria-hidden="true" />
												<i className="fa fa-twitter" aria-hidden="true" />
												<i className="fa fa-google-plus" aria-hidden="true" />
											</div>
											<div className="col-md-6 mediabtn">
												<button>Read more</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="sec-brdr">
								<div className="mdiaimg">
									<img src="../../static/images/media/media2.png" />
								</div>
								<div className="mdiacont">
									<div className="grndtext">
										<h3>
											SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
										</h3>
										<p
											style={{
												textAlign: 'left',
												color: '#588097',
												fontSize: '12px',
												fontWeight: '500',
												letterSpacing: '0.5px'
											}}
										>
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web.
										</p>
										<div className="mdiasocial">
											<div className="col-md-6 mediasocial">
												<i className="fa fa-facebook" aria-hidden="true" />
												<i className="fa fa-twitter" aria-hidden="true" />
												<i className="fa fa-google-plus" aria-hidden="true" />
											</div>
											<div className="col-md-6 mediabtn">
												<button>Read more</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="sec-brdr">
								<div className="mdiaimg">
									<img src="../../static/images/media/media3.png" />
								</div>
								<div className="mdiacont">
									<div className="grndtext">
										<h3>
											Where Suvarna Jala Fails, Schools Leap ahead.<br />
										</h3>
										<p
											style={{
												textAlign: 'left',
												color: '#588097',
												fontSize: '12px',
												fontWeight: '500',
												letterSpacing: '0.5px'
											}}
										>
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web.
										</p>
										<div className="mdiasocial">
											<div className="col-md-6 mediasocial">
												<i className="fa fa-facebook" aria-hidden="true" />
												<i className="fa fa-twitter" aria-hidden="true" />
												<i className="fa fa-google-plus" aria-hidden="true" />
											</div>
											<div className="col-md-6 mediabtn">
												<button>Read more</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container media-main">
						<div className="col-md-4">
							<div className="sec-brdr">
								<div className="mdiaimg">
									<img src="../../static/images/media/media1.png" />
								</div>
								<div className="mdiacont">
									<div className="grndtext">
										<h3>
											Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence
											Award.
										</h3>
										<p
											style={{
												textAlign: 'left',
												color: '#588097',
												fontSize: '12px',
												fontWeight: '500',
												letterSpacing: '0.5px'
											}}
										>
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
										</p>
										<div className="mdiasocial">
											<div className="col-md-6 mediasocial">
												<i className="fa fa-facebook" aria-hidden="true" />
												<i className="fa fa-twitter" aria-hidden="true" />
												<i className="fa fa-google-plus" aria-hidden="true" />
											</div>
											<div className="col-md-6 mediabtn">
												<button>Read more</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="sec-brdr">
								<div className="mdiaimg">
									<img src="../../static/images/media/media2.png" />
								</div>
								<div className="mdiacont">
									<div className="grndtext">
										<h3>
											SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
										</h3>
										<p
											style={{
												textAlign: 'left',
												color: '#588097',
												fontSize: '12px',
												fontWeight: '500',
												letterSpacing: '0.5px'
											}}
										>
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web.
										</p>
										<div className="mdiasocial">
											<div className="col-md-6 mediasocial">
												<i className="fa fa-facebook" aria-hidden="true" />
												<i className="fa fa-twitter" aria-hidden="true" />
												<i className="fa fa-google-plus" aria-hidden="true" />
											</div>
											<div className="col-md-6 mediabtn">
												<button>Read more</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="sec-brdr">
								<div className="mdiaimg">
									<img src="../../static/images/media/media3.png" />
								</div>
								<div className="mdiacont">
									<div className="grndtext">
										<h3>
											Where Suvarna Jala Fails, Schools Leap ahead.<br />
										</h3>
										<p
											style={{
												textAlign: 'left',
												color: '#588097',
												fontSize: '12px',
												fontWeight: '500',
												letterSpacing: '0.5px'
											}}
										>
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web.
											Lorum ispum is a dummy text for web.
										</p>
										<div className="mdiasocial">
											<div className="col-md-6 mediasocial">
												<i className="fa fa-facebook" aria-hidden="true" />
												<i className="fa fa-twitter" aria-hidden="true" />
												<i className="fa fa-google-plus" aria-hidden="true" />
											</div>
											<div className="col-md-6 mediabtn">
												<button>Read more</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container-fluid award">
						<h1>OUR AWARDS</h1>
					</div>

					<div className="container-fluid award-image">
						<div className="container awrdimgsec">
							<img src="../../static/images/media/Award1.png" />
							<div className="awrdimgcont">
								<h3>
									SKOCH ORDER of Merit-<br />Top 100 SME's in INDIA 2018
								</h3>
							</div>
						</div>
					</div>

					<Footer />
				</div>
			</main>

			<footer />
		</Fragment>
	);
}
