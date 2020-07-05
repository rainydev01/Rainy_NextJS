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
				<title>Our Team</title>
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
					<Header />
					<div className="container-fluid banner enternal">
						<div className="hero-image enthroimg">
							<img src="../../static/images/team/Banner.png" />
							<div className="hero-text entteamtxt">
								<h1>OUR EXECUTIVE TEAM</h1>
							</div>
						</div>
					</div>
					<div className="container-fluid groundwater_bg team">
						<div className="container">
							<h2 className="team-heading">EXPERIENCED AND PROFESSIONAL TEAM</h2>
							<p className="team-para">
								Lorum ipsum dolor sit amet, conseteture sadipscing elitr, set diam nonumy. Lorum ipsum
								dolor sit amet, conseteture sadipscing elitr, set diam nonumy Lorum ipsum dolor sit
								amet, conseteture sadipscing elitr, set diam nonumy
							</p>
						</div>

						<div className="container team-row-sec">
							<div className="row team-row">
								<div className="col-md-6">
									<div>
										<img src="../../static/images/team/team1.png" />
									</div>
									<div>
										<h4 className="team-title">Manoj Baptist</h4>
										<p className="team-desc">Director</p>
										<p>
											<i className="fa fa-mobile" aria-hidden="true" /> +91 94480 76595
										</p>
										<p>
											<i className="fa fa-envelope-o" aria-hidden="true" />{' '}
											rainharvesting@gmail.com
										</p>
									</div>
								</div>
								<div className="col-md-6">
									<div>
										<img src="../../static/images/team/team2.png" />
									</div>
									<div>
										<h4 className="team-title">Micheal Baptist</h4>
										<p className="team-desc">Co-Founder & Director</p>
										<p>
											<i className="fa fa-mobile" aria-hidden="true" /> +91 94480 76595
										</p>
										<p>
											<i className="fa fa-envelope-o" aria-hidden="true" />{' '}
											rainharvesting@gmail.com
										</p>
									</div>
								</div>
							</div>

							<div className="row team-row" style={{ marginTop: '60px', marginTop: '60px' }}>
								<div className="col-md-6">
									<div>
										<img src="../../static/images/team/team3.png" />
									</div>
									<div>
										<h4 className="team-title">Vijayraj Shishodia</h4>
										<p className="team-desc">Co-Founder & Director</p>
										<p>
											<i className="fa fa-mobile" aria-hidden="true" /> +91 94480 76595
										</p>
										<p>
											<i className="fa fa-envelope-o" aria-hidden="true" />{' '}
											rainharvesting@gmail.com
										</p>
									</div>
								</div>
								<div className="col-md-6">
									<div>
										<img src="../../static/images/team/team4.png" />
									</div>
									<div>
										<h4 className="team-title">Sunil Baptist</h4>
										<p className="team-desc">Co-Founder & Director</p>
										<p>
											<i className="fa fa-mobile" aria-hidden="true" /> +91 94480 76595
										</p>
										<p>
											<i className="fa fa-envelope-o" aria-hidden="true" />{' '}
											rainharvesting@gmail.com
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid sawar">
						<h1>SOCIAL AWARENESS</h1>
					</div>

					<div className="container-fluid">
						<div className="container groundwater">
							<div className="groundwatersec">
								<div className="col-md-6">
									<div className="groundwatersimg">
										<img src="../static/images/homepage/groundWaterRecharging.png" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="groundwaterstxt" style={{paddingTop: '20px'}}>
										<h3>Ground Water Recharging</h3>
										<p>
											Lorum ipsum doller sit amet, lorum ipsum is a dummy text for web. Lorum ipsum doller sit
											amet, lorum ipsum is a dummy text for web. Lorum ipsum doller sit amet, lorum ipsum is a
											dummy text for web. Lorum ipsum doller sit amet, lorum ipsum is a
											dummy text for web.{' '}<br/>
											Lorum ipsum doller sit amet, lorum ipsum is a dummy text for web. Lorum ipsum doller sit
											amet, lorum ipsum is a dummy text for web. Lorum ipsum doller sit amet, lorum ipsum is a
											dummy text for web. Lorum ipsum doller sit amet, lorum ipsum is a
											dummy text for web.{' '}
										</p>
										
										<button>Read More</button>
									</div>
								</div>
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
