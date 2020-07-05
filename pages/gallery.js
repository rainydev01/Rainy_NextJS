import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
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
							<button className="btn btn-default filter-button" data-filter="all" style={{padding: '5px 45px'}}>All</button>
							<button className="btn btn-default filter-button" data-filter="hdpe">Groundwater Recharging</button>
							<button className="btn btn-default filter-button" data-filter="sprinkle">Gov.t Building & Institutions</button>
							<button className="btn btn-default filter-button" data-filter="spray">Schools</button>
							<button className="btn btn-default filter-button" data-filter="irrigation">Apartments & Houses</button>
							<button className="btn btn-default filter-button" data-filter="irrigation">Industries</button>
							<button className="btn btn-default filter-button" data-filter="irrigation">With Dignitires</button>
						</div>
						<br />
					
						<div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
							<img src="static/images/gallery/Image1.png" className="img-responsive" />
						</div>
					
						<div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
							<img src="static/images/gallery/Image3.png" class="img-responsive" />
						</div>
					
						<div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
							<img src="static/images/gallery/Image5.png" className="img-responsive" />
						</div>
					
						<div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
							<img src="static/images/gallery/Image2.png" className="img-responsive" />
						</div>
					
						<div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
							<img src="static/images/gallery/Image3.png" className="img-responsive" />
						</div>
					
						<div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
							<img src="static/images/gallery/Image4.png" className="img-responsive" />
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
