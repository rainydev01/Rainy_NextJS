import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Systems and Solution</title>
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
							<img src="../../static/images/systemsSolutions/SolutionsBanner.png" />
							<div className="hero-text rnyfltrs">
								<h1>SYSTEMS & SOLUTIONS</h1>
							</div>
						</div>
					</div>

					<div className="container-fluid wthothding">
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div className="rainyfilterimg rainyss" style={{float: 'right', marginRight: '45px'}}>
										<img src="../../static/images/systemsSolutions/RainyFilter.png" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="techpointslst lstagn wrechrg">
										<p>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web.
										</p>
										<ul>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.
											</li>
										</ul>
									</div>
									<div className="rnyfltrbtn senq">
										<button id="rnenq">Enquiry</button>
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
