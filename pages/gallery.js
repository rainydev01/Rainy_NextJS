import { Fragment, useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from 'react-photo-gallery';

import Carousel, { Modal, ModalGateway } from 'react-images';

export default function Home() {
	const [ currentImage, setCurrentImage ] = useState(0);
	const [ viewerIsOpen, setViewerIsOpen ] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	const photos = [
		{
			src: 'static/images/gallery/Image1.png',
			width: 4,
			height: 3
		},
		{
			src: 'static/images/gallery/Image2.png',
			width: 4,
			height: 3
		},
		{
			src: 'static/images/gallery/Image3.png',
			width: 4,
			height: 3
		},
		{
			src: 'static/images/gallery/Image4.png',
			width: 4,
			height: 3
		},
		{
			src: 'static/images/gallery/Image5.png',
			width: 4,
			height: 3
		},
		{
			src: 'static/images/gallery/Image6.png',
			width: 4,
			height: 3
		}
	];

	return (
		<Fragment>
			<Head>
				<title>Gallery</title>
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
								<div class="col-md-12 glrymnu" align="center">
									<button
										className="btn btn-default filter-button filter-button-active"
										data-filter="all"
										style={{ padding: '5px 45px' }}
									>
										All
									</button>
									<button className="btn btn-default filter-button" data-filter="hdpe">
										Rooftop RWH
									</button>
									<button className="btn btn-default filter-button" data-filter="hdpe">
										Groundwater Recharging
									</button>
									<button className="btn btn-default filter-button" data-filter="sprinkle">
										Govt. Buildings
									</button>
									<button className="btn btn-default filter-button" data-filter="sprinkle">
										Govt. Institutions
									</button>
									<button className="btn btn-default filter-button" data-filter="spray">
										Schools
									</button>
									<button className="btn btn-default filter-button" data-filter="irrigation">
										Apartments
									</button>
									<button className="btn btn-default filter-button" data-filter="irrigation">
										Houses
									</button>
									<button className="btn btn-default filter-button" data-filter="irrigation">
										Industries
									</button>
									<button className="btn btn-default filter-button" data-filter="irrigation">
										With Dignitires
									</button>
									<button className="btn btn-default filter-button" data-filter="irrigation">
										R & D
									</button>
									<button className="btn btn-default filter-button" data-filter="irrigation">
										Systems and Solution
									</button>
									<button className="btn btn-default filter-button" data-filter="irrigation">
										International Visitors
									</button>
									<button className="btn btn-default filter-button" data-filter="irrigation">
										Live-Demo Truck
									</button>
									<button className="btn btn-default filter-button" data-filter="irrigation">
										IT Sector
									</button>
								</div>
								<br />
								<br />
								<div
									style={{ marginTop: 40 }}
									className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"
								>
									<Gallery photos={photos} onClick={openLightbox} />
									<ModalGateway>
										{viewerIsOpen ? (
											<Modal onClose={closeLightbox}>
												<Carousel
													currentIndex={currentImage}
													views={photos.map((x) => ({
														...x,
														srcset: x.srcSet,
														caption: x.title
													}))}
												/>
											</Modal>
										) : null}
									</ModalGateway>

									{/* <img className=" center-block" src="static/images/gallery/Image1.png" /> */}
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
