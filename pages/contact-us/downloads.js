import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Downloads</title>
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
							<img src="../../static/images/downloads/DownloadsBanner.png" />
							<div className="hero-text dwnldbnnrtxt">
								<h1>Downloads</h1>
							</div>
						</div>
					</div>

					<div className="container-fluid dnldbg">
						<div className="container">
							<div className="row">
								<div className="downloadsec">
									<div id="accordion">
										<div className="acrdinbrdr">
											<div className="card-header" id="heading-1">
												<h5 className="mb-0">
													<a
														role="button"
														data-toggle="collapse"
														href="#collapse-1"
														aria-expanded="true"
														aria-controls="collapse-1"
													>
														Brochures{' '}
														<span className="mb-span">
															View all the product info Brochures here
														</span>
													</a>
												</h5>
											</div>
											<div
												id="collapse-1"
												className="collapse show"
												data-parent="#accordion"
												aria-labelledby="heading-1"
											>
												<div className="card-body">
													Lorum ipsom is a dummy text, Here is a text is only for test.
												</div>
											</div>
										</div>
										<div className="acrdinbrdr">
											<div className="card-header" id="heading-2">
												<h5 className="mb-0">
													<a
														className="collapsed"
														role="button"
														data-toggle="collapse"
														href="#collapse-2"
														aria-expanded="false"
														aria-controls="collapse-2"
													>
														Rainy Product Catalogue
													</a>
												</h5>
											</div>
											<div
												id="collapse-2"
												className="collapse"
												data-parent="#accordion"
												aria-labelledby="heading-2"
											>
												<div className="card-body">
													Lorum ipsom is a dummy text, Here is a text is only for test.
												</div>
											</div>
										</div>
										<div className="acrdinbrdr" style={{ borderBottom: '2px solid #58b8ef' }}>
											<div className="card-header" id="heading-3">
												<h5 className="mb-0">
													<a
														className="collapsed"
														role="button"
														data-toggle="collapse"
														href="#collapse-3"
														aria-expanded="false"
														aria-controls="collapse-3"
													>
														Instructions Manual
													</a>
												</h5>
											</div>
											<div
												id="collapse-3"
												className="collapse"
												data-parent="#accordion"
												aria-labelledby="heading-3"
											>
												<div className="card-body">
													Lorum ipsom is a dummy text, Here is a text is only for test.
												</div>
											</div>
										</div>
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
