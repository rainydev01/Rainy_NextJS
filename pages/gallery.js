import {Fragment, useState, useCallback} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "react-photo-gallery";

import Carousel, {Modal, ModalGateway} from "react-images";

export default function Home() {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);
	const [selectedView, setSelectedView] = useState(1);

	let gallerySelectedComponent = null;
	let basicCSS = "btn btn-default filter-button";

	const onChange = (value) => {
		setSelectedView(parseInt(value));
	};

	const openLightbox = useCallback((event, {photo, index}) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	const photos = [
		{
			src: "static/images/gallery/Image1.png",
			width: 4,
			height: 3,
		},
		{
			src: "static/images/gallery/Image2.png",
			width: 5,
			height: 3,
		},
		{
			src: "static/images/gallery/Image3.png",
			width: 4,
			height: 3,
		},
		{
			src: "static/images/gallery/Image4.png",
			width: 4,
			height: 3,
		},
		{
			src: "static/images/gallery/Image5.png",
			width: 4,
			height: 3,
		},
		{
			src: "static/images/gallery/Image6.png",
			width: 4,
			height: 3,
		},
	];

	let basicCSS1 = "btn btn-default filter-button ";
	let basicCSS2 = "btn btn-default filter-button ";
	let basicCSS3 = "btn btn-default filter-button ";
	let basicCSS4 = "btn btn-default filter-button ";
	let basicCSS5 = "btn btn-default filter-button ";
	let basicCSS6 = "btn btn-default filter-button ";
	let basicCSS7 = "btn btn-default filter-button ";
	let basicCSS8 = "btn btn-default filter-button ";
	let basicCSS9 = "btn btn-default filter-button ";
	let basicCSS10 = "btn btn-default filter-button ";
	let basicCSS11 = "btn btn-default filter-button ";
	let basicCSS12 = "btn btn-default filter-button ";
	let basicCSS13 = "btn btn-default filter-button ";
	let basicCSS14 = "btn btn-default filter-button ";
	let basicCSS15 = "btn btn-default filter-button ";

	if (selectedView === 1) {
		basicCSS1 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<Gallery photos={photos} onClick={openLightbox} />
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							<Carousel
								currentIndex={currentImage}
								views={photos.map((x) => ({
									...x,
									srcset: x.srcSet,
									caption: x.title,
								}))}
							/>
						</Modal>
					) : null}
				</ModalGateway>
			</Fragment>
		);
	}

	if (selectedView === 2) {
		basicCSS2 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image1.png" />
			</Fragment>
		);
	}
	if (selectedView === 3) {
		basicCSS3 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image2.png" />
			</Fragment>
		);
	}
	if (selectedView === 4) {
		basicCSS4 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image3.png" />
			</Fragment>
		);
	}
	if (selectedView === 5) {
		basicCSS5 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image4.png" />
			</Fragment>
		);
	}
	if (selectedView === 6) {
		basicCSS6 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image5.png" />
			</Fragment>
		);
	}
	if (selectedView === 7) {
		basicCSS7 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image6.png" />
			</Fragment>
		);
	}
	if (selectedView === 8) {
		basicCSS8 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image1.png" />
			</Fragment>
		);
	}
	if (selectedView === 9) {
		basicCSS9 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image2.png" />
			</Fragment>
		);
	}
	if (selectedView === 10) {
		basicCSS10 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image1.png" />
			</Fragment>
		);
	}
	if (selectedView === 11) {
		basicCSS11 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image3.png" />
			</Fragment>
		);
	}
	if (selectedView === 12) {
		basicCSS12 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image4.png" />
			</Fragment>
		);
	}
	if (selectedView === 13) {
		basicCSS13 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image5.png" />
			</Fragment>
		);
	}
	if (selectedView === 14) {
		basicCSS14 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image6.png" />
			</Fragment>
		);
	}
	if (selectedView === 15) {
		basicCSS15 = "btn btn-default filter-button filter-button-active";
		gallerySelectedComponent = (
			<Fragment>
				<img className=" center-block" src="static/images/gallery/Image4.png" />
			</Fragment>
		);
	}

	return (
		<Fragment>
			<Head>
				<title>Rainy: Gallery</title>
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
					<Header />
					<div className="container-fluid banner enternal">
						<div className="hero-image enthroimg">
							<img src="../static/images/gallery/Banner.png" />
							<div className="hero-text rnyfltrs">
								<h1>GALLERY</h1>
							</div>
						</div>
					</div>

					<div className="container-fluid gallrymain">
						<div className="container glrycntnr">
							<div className="row">
								<div class="glrymnu" align="center">
									<button
										onClick={() => {
											onChange(1);
										}}
										className={basicCSS1}
										data-filter="all"
										style={{padding: "5px 45px"}}
									>
										All
									</button>
									<button
										onClick={() => {
											onChange(2);
										}}
										className={basicCSS2}
										data-filter="hdpe"
									>
										Rooftop RWH
									</button>
									<button
										onClick={() => {
											onChange(3);
										}}
										className={basicCSS3}
										data-filter="hdpe"
									>
										Groundwater Recharging
									</button>
									<button
										onClick={() => {
											onChange(4);
										}}
										className={basicCSS4}
										data-filter="sprinkle"
									>
										Govt. Buildings
									</button>
									<button
										onClick={() => {
											onChange(5);
										}}
										className={basicCSS5}
										data-filter="sprinkle"
									>
										Govt. Institutions
									</button>
									<button
										onClick={() => {
											onChange(6);
										}}
										className={basicCSS6}
										data-filter="spray"
									>
										Schools
									</button>
									<button
										onClick={() => {
											onChange(7);
										}}
										className={basicCSS7}
										data-filter="irrigation"
									>
										Apartments
									</button>
									<button
										onClick={() => {
											onChange(8);
										}}
										className={basicCSS8}
										data-filter="irrigation"
									>
										Houses
									</button>
									<button
										onClick={() => {
											onChange(9);
										}}
										className={basicCSS9}
										data-filter="irrigation"
									>
										Industries
									</button>
									<button
										onClick={() => {
											onChange(10);
										}}
										className={basicCSS10}
										data-filter="irrigation"
									>
										With Dignitaries
									</button>
									<button
										onClick={() => {
											onChange(11);
										}}
										className={basicCSS11}
										data-filter="irrigation"
									>
										R & D
									</button>
									<button
										onClick={() => {
											onChange(12);
										}}
										className={basicCSS12}
										data-filter="irrigation"
									>
										Systems and Solutions
									</button>
									<button
										onClick={() => {
											onChange(13);
										}}
										className={basicCSS13}
										data-filter="irrigation"
									>
										International Visitors
									</button>
									<button
										onClick={() => {
											onChange(14);
										}}
										className={basicCSS14}
										data-filter="irrigation"
									>
										Live-Demo Truck
									</button>
									<button
										onClick={() => {
											onChange(15);
										}}
										className={basicCSS15}
										data-filter="irrigation"
									>
										IT Sector
									</button>
								</div>
								<br />
								<br />
								<div
									style={{marginTop: 40}}
									className="col-lg-12 col-sm-12 col-xs-12 text-center"
								>
									{gallerySelectedComponent}
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
