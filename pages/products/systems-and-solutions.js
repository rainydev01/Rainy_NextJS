import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<Fragment>
			<Head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-168445645-1"
				></script>

				<script
					dangerouslySetInnerHTML={{
						__html: `
														  window.dataLayer = window.dataLayer || [];
  														  function gtag(){dataLayer.push(arguments);}
  														  gtag('js', new Date());
															gtag('config', 'UA-168445645-1');
        `,
					}}
				/>
				<title>Rainy - Systems and Solution</title>
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
				<script
					dangerouslySetInnerHTML={{
						__html: function googleTranslateElementInit() {
							/* eslint-disable no-new */
							new window.google.translate.TranslateElement(
								{
									pageLanguage: "pt",
								},
								"google_translate_element"
							);
						},
					}}
				/>
			</Head>
			<main>
				<div className="App">
					<Header />
					<div className="container-fluid banner enternal">
						<div className="hero-image enthroimg">
							<img src="../../static/images/systemsSolutions/Group1242.png" />
							<div className="hero-text rnyfltrs">
								<h1>SYSTEMS & SOLUTIONS</h1>
							</div>
						</div>
					</div>

					<div className="container-fluid wthothding">
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div
										className="rainyfilterimg rainyss"
										style={{float: "right", marginRight: "45px"}}
									>
										<img src="../../static/images/systemsSolutions/BigImage.JPG" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="techpointslst lstagn syssoln">
										<p>
											Products that are precisely coordinated, scientifically
											designed all-in-one RWH solutions and dedicated service.
										</p>

										<p>
											Rainy also undertakes turnkey projects in corporate
											sector/ industries/ government undertaking etc. and is
											capable of handling large projects right from RWH design,
											supply and installation to providing end-end solutions.
											Rainy is equipped with a dedicated and experienced team of
											engineers, technician, workmen along with special
											installation equipments, drilling rigs, civil structures
											etc. Broad steps include:
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
												Highly trained technical team conducts the RWH technical
												survey by studying the layout of the site and building.
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
												Existing piping system of rain water and storm drains
												are studied.
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
												Gradient and landscape of the site and building are
												obtained.
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
												/>{" "}
												Designing and installation of innovative customised
												system is done with precise scientific approach. These
												solutions include: diverting existing rain water pipes,
												deployment of underground storage, auto pumping system,
												piping, filtering, storage, utilization etc.
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
												Designing and construction of ground water recharging
												structures.
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
												Complete solutions for water neutrality establishment
												projects.
											</li>
										</ul>
									</div>
									<div className="rnyfltrbtn senq">
										<Link href="/contact-us/enquire">
											<a>
												<button id="rnenq">
													Enquire{" "}
													<i class="fa fa-angle-right" aria-hidden="true" />
												</button>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="container-fluid wthothding"
						style={{paddingTop: "30px"}}
					>
						<div className="container">
							<div className="row">
								<div
									style={{pading: "10px", borderRadius: "20px"}}
									className="col-md-4"
								>
									<div className="gr3">
										<img src="../../static/images/groundWater/small1.jpg" />
									</div>
								</div>
								<div className="col-md-4">
									<div className="gr3">
										<img src="../../static/images/groundWater/small2.png" />
									</div>
								</div>
								<div className="col-md-4">
									<div className="gr3">
										<img src="../../static/images/groundWater/small3.png" />
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
