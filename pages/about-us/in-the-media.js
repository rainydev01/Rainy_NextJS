import {Fragment, useState} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider1 from "../../components/SliderNews1";
import Slider2 from "../../components/SliderNews2";
import Slider3 from "../../components/SliderNews3";
import ImageSlider from "../../components/ImageSlider";

export default function Home() {
	const [currentArticle, setCurrentArticle] = useState(1);

	const changeToArticle1 = () => {
		setCurrentArticle(1);
	};

	const changeToArticle2 = () => {
		setCurrentArticle(2);
	};
	const changeToArticle3 = () => {
		setCurrentArticle(3);
	};

	let newsArticle = <Slider1 article2={changeToArticle2} />;

	if (currentArticle === 1) {
		newsArticle = <Slider1 article2={changeToArticle2} />;
	}
	if (currentArticle === 2) {
		newsArticle = (
			<Slider2 article1={changeToArticle1} article3={changeToArticle3} />
		);
	}
	if (currentArticle === 3) {
		newsArticle = <Slider3 article2={changeToArticle2} />;
	}

	return (
		<Fragment>
			<Head>
				<title>Rainy: Media</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
				/>
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
					{/*<h1> Media</h1>*/}
					<Header />

					<div className="container-fluid banner enternal">
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
							<h2 className="team-heading media-hdng">
								MEDIA COVERAGE & ARTICLES
							</h2>
						</div>
					</div>
					{newsArticle}

					<ImageSlider />
					<Footer />
				</div>
			</main>

			<footer />
		</Fragment>
	);
}
