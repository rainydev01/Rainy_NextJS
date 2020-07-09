import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import SliderNews from '../../components/SliderNews';

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
					<h1> Media</h1>
					<Header />

					<div className="container-fluid banner enternal" style={{ marginTop: '-6%' }}>
						<div className="hero-image enthroimg">
							<img src="../../static/images/media/mediaBanner.png" />
							<div className="hero-text inthemedia">
								<h1>IN THE MEDIA</h1>
							</div>
						</div>
					</div>
					<div className="container" />
					<div className="container">
						<div className="groundwater_bg team">
							<h2 className="team-heading media-hdng">MEDIA COVERAGE & ARTICLES</h2>
						</div>
					</div>
					<SliderNews />

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
