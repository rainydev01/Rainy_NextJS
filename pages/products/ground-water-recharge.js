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
				<title>Rainy - Ground Water Recharge</title>
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
							<img src="../../static/images/groundWater/Group1241.jpg" />
							<div className="hero-text rnyfltrs">
								<h1>GROUND WATER RECHARGING</h1>
							</div>
						</div>
					</div>

					<div className="container-fluid wthothding wrechargmain">
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div
										className="rainyfilterimg"
										style={{float: "right", marginRight: "45px"}}
									>
										<img src="../../static/images/groundWater/IMG_9341.png" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="techpointslst wrechrg">
										<p>
											Ground water recharging is done using V Wire Injection
											Well Technology. This modern methodology uses V-Wire
											Screens for filtration. This works on gravitational force
											and does not require any energy, making it durable with a
											long life span.
										</p>
									</div>
									<div class="container-fluid">
										<div class="row">
											<div class="col-md-5">
												<div className="rnyfltrbtn">
													<button id="rnenq">
														Enquire Now{" "}
														<i
															style={{padding: 5}}
															class="fa fa-angle-right"
															aria-hidden="true"
														/>
													</button>
												</div>
											</div>
											<div class="col-md-6">
												<div className="rnyfltrbtn">
													<button id="rnrdmr">
														Technical Specifications
														<i
															style={{paddingLeft: 5}}
															class="fa fa-angle-right"
															aria-hidden="true"
														/>
													</button>
												</div>
											</div>
										</div>
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
								<div className="col-md-4">
									<div className="gr3">
										<img src="../../static/images/groundWater/DSC00198@2x.png" />
									</div>
								</div>
								<div className="col-md-4">
									<div className="gr3">
										<img src="../../static/images/groundWater/IMG_4997.png" />
									</div>
								</div>
								<div className="col-md-4">
									<div className="gr3">
										<img src="../../static/images/groundWater/IMG_2913.png" />
									</div>
								</div>
							</div>
						</div>

						<div className="container">
							<div className="wrechrgngtbl">
								<table class="table table-striped">
									<tbody>
										<tr>
											<td style={{width: "40%"}} className="borderRight">
												Suitable up to area:
											</td>
											<td>1 to 8 acres</td>
										</tr>
										<tr>
											<td className="borderRight">
												Max: Intensity of Rainfall:
											</td>
											<td>12.5 - 75 mm/hr</td>
										</tr>
										<tr>
											<td className="borderRight">Working Principle :</td>
											<td>Gravitational Water Column Pressure</td>
										</tr>
										<tr>
											<td className="borderRight">Operating Pressure:</td>
											<td>0.05-0.6 kg/ cm2</td>
										</tr>
										<tr>
											<td className="borderRight">Percolation Capacity:</td>
											<td>25 – 50K Litres/ Day</td>
										</tr>

										<tr>
											<td className="borderRight">
												Filter Unit for Injection:
											</td>
											<td>SS-304 V Wire Screen</td>
										</tr>
										<tr>
											<td className="borderRight">Slot Size:</td>
											<td>0.75mm</td>
										</tr>
										<tr>
											<td className="borderRight">
												Discharge Capacity of V-Wire:
											</td>
											<td>5-20 LPS</td>
										</tr>
										<tr>
											<td className="borderRight">Percolator Pipe: </td>
											<td>
												140mm perforated holes at every 30 mm, HDPE pipe with 8
												mm spirally
											</td>
										</tr>
										<tr>
											<td className="borderRight">
												Diameter of Injection Well:
											</td>
											<td>1350 to 2100 mm</td>
										</tr>
										<tr>
											<td className="borderRight">Depth of Injection Well:</td>
											<td>5 to 6 m</td>
										</tr>
										<tr>
											<td className="borderRight">
												Diameter of Recharging Bore:
											</td>
											<td>225 mm</td>
										</tr>
										<tr>
											<td className="borderRight">
												Depth of the Recharging Bore:
											</td>
											<td>20 to 60 m depending on the permeable layer</td>
										</tr>
										<tr>
											<td className="borderRight">
												Diameter of the SILT Trap Unit:
											</td>
											<td>a1000 to 1350 mmsd</td>
										</tr>
										<tr>
											<td className="borderRight">
												Depth of the SILT Trap Unit:
											</td>
											<td>1 to 3 m</td>
										</tr>
										<tr>
											<td className="borderRight">
												Diameter of the Filter Unit in Silt Trap:
											</td>
											<td>
												SS-304 Horizontal Mount – 150 to 200 mm, Slot Size: 3 mm
											</td>
										</tr>
									</tbody>
								</table>
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
