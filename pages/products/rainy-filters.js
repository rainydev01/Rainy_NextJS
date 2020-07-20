import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
									<p
										style={{
											textAlign: "center",
											fontSize: "16px",
											fontWeight: "500",
											color: "black",
										}}
									>
										This open ended filter has auto flush out feature enabling
										self cleaning, with unique working principle. FL 80 is
										suitable for __ to __ sq.m rooftop area.
									</p>
								</div>
								<div className="col-md-4">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL80.png" />
									</div>
								</div>
								<div className="col-md-8">
									<div className="techpointslst">
										<table class="table table-striped  table-bordered ">
											<tbody>
												<tr>
													<td style={{width: "40%"}} className="borderRight">
														Suitable up to area:
													</td>
													<td>110 SQMTRS</td>
												</tr>

												<tr>
													<td className="borderRight">
														Max: Intensity of Rainfall:
													</td>
													<td>75 mm/hr</td>
												</tr>
												<tr>
													<td className="borderRight">Working Principle :</td>
													<td>Cohesive Force & Centrifugal force</td>
												</tr>
												<tr>
													<td className="borderRight">Operating Pressure:</td>
													<td>Less than 2 feet of head (0.060kg/cm2)</td>
												</tr>
												<tr>
													<td className="borderRight">Capacity:</td>
													<td>105 LPM</td>
												</tr>
												<tr>
													<td className="borderRight">Filter Element:</td>
													<td>SS-304 Screen</td>
												</tr>
												<tr>
													<td className="borderRight">Mesh Size:</td>
													<td>250 Microns</td>
												</tr>
												<tr>
													<td className="borderRight">Inlet:</td>
													<td>90 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Clean Water Outlet:</td>
													<td>63 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Drain Outlet:</td>
													<td>90 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Housing:</td>
													<td>High Density Polyethylene</td>
												</tr>
												<tr>
													<td className="borderRight">Efficiency of Filter:</td>
													<td>Above 90%</td>
												</tr>
												<tr>
													<td className="borderRight">Source of Power:</td>
													<td>Gravity</td>
												</tr>
											</tbody>
										</table>
										<div class="container-fluid">
											<div class="row">
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl80Dimension"
														>
															Overall Dimension
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl80Installation"
														>
															On Site Installation
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button>
															Enquire <br /> Now
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						class="modal fade"
						id="fl80Dimension"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-xl"
							role="document"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 80 - Overall Dimension
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">...</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						class="modal fade"
						id="fl80Installation"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 80 - On Site Installation
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">...</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid fl100">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 100</h1>
									<p
										style={{
											textAlign: "center",
											fontSize: "16px",
											fontWeight: "500",
											color: "black",
										}}
									>
										This open ended filter has auto flush out feature enabling
										self cleaning with unique working principle. FL 100 is
										suitable for __ to __ sq.m rooftop area.
									</p>
								</div>
								<div className="col-md-8">
									<div className="techpointslst">
										<table class="table table-striped  table-bordered ">
											<tbody>
												<tr>
													<td style={{width: "40%"}} className="borderRight">
														Suitable up to area:
													</td>
													<td>110 SQMTRS</td>
												</tr>

												<tr>
													<td className="borderRight">
														Max: Intensity of Rainfall:
													</td>
													<td>75 mm/hr</td>
												</tr>
												<tr>
													<td className="borderRight">Working Principle :</td>
													<td>Cohesive Force & Centrifugal force</td>
												</tr>
												<tr>
													<td className="borderRight">Operating Pressure:</td>
													<td>Less than 2 feet of head (0.060kg/cm2)</td>
												</tr>
												<tr>
													<td className="borderRight">Capacity:</td>
													<td>105 LPM</td>
												</tr>
												<tr>
													<td className="borderRight">Filter Element:</td>
													<td>SS-304 Screen</td>
												</tr>
												<tr>
													<td className="borderRight">Mesh Size:</td>
													<td>250 Microns</td>
												</tr>
												<tr>
													<td className="borderRight">Inlet:</td>
													<td>90 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Clean Water Outlet:</td>
													<td>63 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Drain Outlet:</td>
													<td>90 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Housing:</td>
													<td>High Density Polyethylene</td>
												</tr>
												<tr>
													<td className="borderRight">Efficiency of Filter:</td>
													<td>Above 90%</td>
												</tr>
												<tr>
													<td className="borderRight">Source of Power:</td>
													<td>Gravity</td>
												</tr>
											</tbody>
										</table>
										<div class="container-fluid">
											<div class="row">
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl100Dimension"
														>
															Overall Dimension
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl100Installation"
														>
															On Site Installation
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button>
															Enquire <br /> Now
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL100.png" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						class="modal fade "
						id="fl100Dimension"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-xl"
							role="document"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 100 - Overall Dimension
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<img
										src="../../static/images/filters/fl-100.png"
										class="img-fluid"
										alt="FL-100"
									/>
								</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						class="modal fade"
						id="fl100Installation"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 100 - On Site Installation
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">...</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid fl200fltr">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 200</h1>
									<p
										style={{
											textAlign: "center",
											fontSize: "16px",
											fontWeight: "500",
											color: "black",
										}}
									>
										This open ended filter has auto flush out feature enabling
										self cleaning with unique working principle.. FL 200 is
										suitable for __ to __ sq.m rooftop area.
									</p>
								</div>
								<div className="col-md-4">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL80.png" />
									</div>
								</div>
								<div className="col-md-8">
									<div className="techpointslst">
										<table class="table table-striped  table-bordered ">
											<tbody>
												<tr>
													<td style={{width: "40%"}} className="borderRight">
														Suitable up to area:
													</td>
													<td>225 SQMTRS</td>
												</tr>

												<tr>
													<td className="borderRight">
														Max: Intensity of Rainfall:
													</td>
													<td>75 mm/hr</td>
												</tr>
												<tr>
													<td className="borderRight">Working Principle :</td>
													<td>Cohesive Force & Centrifugal force</td>
												</tr>
												<tr>
													<td className="borderRight">Operating Pressure:</td>
													<td>Less than 2 feet of head (0.060kg/cm2)</td>
												</tr>
												<tr>
													<td className="borderRight">Capacity:</td>
													<td>225 LPM</td>
												</tr>
												<tr>
													<td className="borderRight">Filter Element:</td>
													<td>SS-304 Screen</td>
												</tr>
												<tr>
													<td className="borderRight">Mesh Size:</td>
													<td>250 Microns</td>
												</tr>
												<tr>
													<td className="borderRight">Inlet:</td>
													<td>110 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Clean Water Outlet:</td>
													<td>75 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Drain Outlet:</td>
													<td>90 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Housing:</td>
													<td>High Density Polyethylene</td>
												</tr>
												<tr>
													<td className="borderRight">Efficiency of Filter:</td>
													<td>Above 90%</td>
												</tr>
												<tr>
													<td className="borderRight">Source of Power:</td>
													<td>Gravity</td>
												</tr>
											</tbody>
										</table>
										<div class="container-fluid">
											<div class="row">
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl200Dimension"
														>
															Overall Dimension
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl200Installation"
														>
															On Site Installation
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button>
															Enquire <br /> Now
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="modal fade"
						id="fl200Dimension"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-xl"
							role="document"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 200 - Overall Dimension
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<img
										src="../../static/images/filters/fl-200.png"
										class="img-fluid"
										alt="FL-200"
									/>
								</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						class="modal fade"
						id="fl200Installation"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 200 - On Site Installation
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">...</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid fl100">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 300</h1>
									<p
										style={{
											textAlign: "center",
											fontSize: "16px",
											fontWeight: "500",
											color: "black",
										}}
									>
										This open ended filter has auto flush out feature enabling
										self cleaning with unique working principle.. FL 300 is
										suitable for __ to __ sq.m rooftop area.
									</p>
								</div>
								<div className="col-md-8">
									<div className="techpointslst">
										<table class="table table-striped  table-bordered ">
											<tbody>
												<tr>
													<td style={{width: "40%"}} className="borderRight">
														Suitable up to area:
													</td>
													<td>350 SQMTRS</td>
												</tr>

												<tr>
													<td className="borderRight">
														Max: Intensity of Rainfall:
													</td>
													<td>75 mm/hr</td>
												</tr>
												<tr>
													<td className="borderRight">Working Principle :</td>
													<td>Cohesive Force & Centrifugal force</td>
												</tr>
												<tr>
													<td className="borderRight">Operating Pressure:</td>
													<td>Less than 2 feet of head (0.060kg/cm2)</td>
												</tr>
												<tr>
													<td className="borderRight">Capacity:</td>
													<td>340 LPM</td>
												</tr>
												<tr>
													<td className="borderRight">Filter Element:</td>
													<td>SS-304 Screen</td>
												</tr>
												<tr>
													<td className="borderRight">Mesh Size:</td>
													<td>250 Microns</td>
												</tr>
												<tr>
													<td className="borderRight">Inlet:</td>
													<td>110 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Clean Water Outlet:</td>
													<td>90 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Drain Outlet:</td>
													<td>90 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Housing:</td>
													<td>High Density Polyethylene</td>
												</tr>
												<tr>
													<td className="borderRight">Efficiency of Filter:</td>
													<td>Above 90%</td>
												</tr>
												<tr>
													<td className="borderRight">Source of Power:</td>
													<td>Gravity</td>
												</tr>
											</tbody>
										</table>
										<div class="container-fluid">
											<div class="row">
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl300Dimension"
														>
															Overall Dimension
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl300Installation"
														>
															On Site Installation
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button>
															Enquire <br /> Now
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-md-4">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL100.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="modal fade"
						id="fl300Dimension"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-xl"
							role="document"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 300 - Overall Dimension
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<img
										src="../../static/images/filters/fl-300.png"
										class="img-fluid"
										alt="FL-300"
									/>
								</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						class="modal fade"
						id="fl300Installation"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 300 - On Site Installation
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">...</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid fl500fltr">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 500</h1>
									<p
										style={{
											textAlign: "center",
											fontSize: "16px",
											fontWeight: "500",
											color: "black",
										}}
									>
										This open ended filter has auto flush out feature enabling
										self cleaning with unique working principle. FL 500 is
										suitable for __ to __ sq.m rooftop area.
									</p>
								</div>
								<div className="col-md-4">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL80.png" />
									</div>
								</div>
								<div className="col-md-8">
									<div className="techpointslst">
										<table class="table table-striped  table-bordered ">
											<tbody>
												<tr>
													<td style={{width: "40%"}} className="borderRight">
														Suitable up to area:
													</td>
													<td>500 SQMTRS</td>
												</tr>

												<tr>
													<td className="borderRight">
														Max: Intensity of Rainfall:
													</td>
													<td>75 mm/hr</td>
												</tr>
												<tr>
													<td className="borderRight">Working Principle :</td>
													<td>Cohesive Force & Centrifugal force</td>
												</tr>
												<tr>
													<td className="borderRight">Operating Pressure:</td>
													<td>Less than 2 feet of head (0.060kg/cm2)</td>
												</tr>
												<tr>
													<td className="borderRight">Capacity:</td>
													<td>480 LPM</td>
												</tr>
												<tr>
													<td className="borderRight">Filter Element:</td>
													<td>SS-304 Screen</td>
												</tr>
												<tr>
													<td className="borderRight">Mesh Size:</td>
													<td>250 Microns</td>
												</tr>
												<tr>
													<td className="borderRight">Inlet:</td>
													<td>110 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Clean Water Outlet:</td>
													<td>90 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Drain Outlet:</td>
													<td>110 MM</td>
												</tr>
												<tr>
													<td className="borderRight">Housing:</td>
													<td>High Density Polyethylene</td>
												</tr>
												<tr>
													<td className="borderRight">Efficiency of Filter:</td>
													<td>Above 90%</td>
												</tr>
												<tr>
													<td className="borderRight">Source of Power:</td>
													<td>Gravity</td>
												</tr>
											</tbody>
										</table>
										<div class="container-fluid">
											<div class="row">
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl500Dimension"
														>
															Overall Dimension
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button
															data-toggle="modal"
															data-target="#fl500Installation"
														>
															On Site Installation
														</button>
													</div>
												</div>
												<div class="col-md-4">
													<div className="yellowbtn">
														<button>
															Enquire <br /> Now
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="modal fade"
						id="fl500Dimension"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-xl"
							role="document"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 500 - Overall Dimension
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<img
										src="../../static/images/filters/fl-500.png"
										class="img-fluid"
										alt="FL-500"
									/>
								</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						class="modal fade"
						id="fl500Installation"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										FL 500 - On Site Installation
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">...</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-secondary"
										data-dismiss="modal"
									>
										Close
									</button>
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
