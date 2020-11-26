import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DealerSelect from "../../components/DealerSelect";

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Rainy - Dealers</title>
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
						<div className="hero-image dlrsbnrtxt">
							<img src="../../static/images/dealers/Image93.jpg" />
							<div className="hero-text inthemedia">
								<h1>OUR NETWORK</h1>
							</div>
						</div>
					</div>

					<DealerSelect />

					<div className="container-fluid sssprt">
						<h1>STRONG SERVICE SUPPORT</h1>
					</div>

					<div
						className="container-fluid"
						style={{
							paddingBottom: "125px",
							backgroundImage: "url(../../static/images/dealers/wave.png)",
							marginTop: "-42px",
							paddingTop: "45px",
						}}
					>
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div className="rainyfilterimg">
										<img src="../../static/images/dealers/Image109.jpg" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="techpointslst">
										<p
											style={{fontFamily: "Visby Round CF Heavy", fontSize: 14}}
										>
											Our network currently consists of over 131 dealers across
											India and spans over 9 countries. We aim to fulfil all
											customer queries as soon as possible, with integrity and
											through a transparent communication channel.
										</p>
										<ul>
											<li>
												<img
													style={{
														height: 25,
														width: "auto",
														paddingRight: 15,
													}}
													src="../static/images/elements/Path262.png"
													alt="drop"
												/>
												All products are tested prior to packaging to ensure top
												quality.
											</li>
											<li>
												<img
													style={{
														height: 25,
														width: "auto",
														paddingRight: 15,
													}}
													src="../static/images/elements/Path262.png"
													alt="drop"
												/>
												Dedicated support team accessible through query forms,
												Whatsapp & FB Messenger to provide continuous
												assistance.
											</li>
											<li>
												<img
													style={{
														height: 25,
														width: "auto",
														paddingRight: 15,
													}}
													src="../static/images/elements/Path262.png"
													alt="drop"
												/>
												Highly trained team of engineers, plumbers & technicians
												available to solve every issue that may arise.
											</li>
										</ul>
									</div>
									<div className="rnyfltrbtn">
										<button id="rnenq">
											<a href="/contact-us/enquire">Enquire </a>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</Fragment>
	);
}
