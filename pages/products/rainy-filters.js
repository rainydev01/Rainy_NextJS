import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Filters</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossOrigin="anonymous"
				/>
			</Head>
			<main>
				<div className="App">
					<Header />
					<div className="container-fluid banner enternal">
						<div className="hero-image enthroimg">
							<img src="../../static/images/products/RainyBanner.png" />
							<div className="hero-text rnyfltrs">
								<h1>RAINY FILTERS</h1>
							</div>
						</div>
					</div>

					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 80</h1>
								</div>
								<div className="col-md-6">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL80.png" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="techpointslst">
										<p>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset. Lorum
											ipsom is a dummy text for web, Dolor aset.
										</p>
										<ul>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
										</ul>
									</div>
									<div className="rnyfltrbtn">
										<button id="rnenq">Enquiry</button>
										<button id="rnrdmr">Read More</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid fl100">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 100</h1>
								</div>
								<div className="col-md-6">
									<div className="techpointslst">
										<p>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset. Lorum
											ipsom is a dummy text for web, Dolor aset.
										</p>
										<ul>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
										</ul>
									</div>
									<div className="rnyfltrbtn">
										<button id="rnenq">Enquiry</button>
										<button id="rnrdmr">Read More</button>
									</div>
								</div>

								<div className="col-md-6">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL100.png" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 200</h1>
								</div>
								<div className="col-md-6">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL200.png" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="techpointslst">
										<p>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset. Lorum
											ipsom is a dummy text for web, Dolor aset.
										</p>
										<ul>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
										</ul>
									</div>
									<div className="rnyfltrbtn">
										<button id="rnenq">Enquiry</button>
										<button id="rnrdmr">Read More</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid fl100">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 300</h1>
								</div>
								<div className="col-md-6">
									<div className="techpointslst">
										<p>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset. Lorum
											ipsom is a dummy text for web, Dolor aset.
										</p>
										<ul>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
										</ul>
									</div>
									<div className="rnyfltrbtn">
										<button id="rnenq">Enquiry</button>
										<button id="rnrdmr">Read More</button>
									</div>
								</div>

								<div className="col-md-6">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL100.png" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 500</h1>
								</div>
								<div className="col-md-6">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL200.png" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="techpointslst">
										<p>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset. Lorum
											ipsom is a dummy text for web, Dolor aset.
										</p>
										<ul>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.
											</li>
										</ul>
									</div>
									<div className="rnyfltrbtn">
										<button id="rnenq">Enquiry</button>
										<button id="rnrdmr">Read More</button>
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
