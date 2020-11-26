import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<Fragment>
			<Head>

			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-168445645-1"></script>

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
			
				<title>Rainy - Technology</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Open+Sans&family=Raleway&display=swap"
					rel="stylesheet"
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
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
					integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
					crossorigin="anonymous"
				/>
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
							<img src="../static/images/technology/Group1237.jpg" />
							<div className="hero-text techbnnrtxt">
								<h1>
									OUR INNOVATIVE
									<br />
									TECHNOLOGY
								</h1>
							</div>
						</div>
					</div>

					<div className="container-fluid techbgmain">
						<div className="container">
							<div className="techhedng">
								<h2 className="tech-heading">
									KEY TECHNOLOGY & INNOVATION HIGHLIGHTS
								</h2>
								<p className="techpara">
									Completely Indigenous and Patented Technology for Dual
									Intensity Rain Water Harvesting Filters called "Rainy". For
									ground water recharging, our innovation uses an injection well
									equipped with "V-Wire Screens" that enables replenishment of
									ground water source.
								</p>
							</div>
							<div className="row">
								<div className="col-md-5">
									<div className="techlimg">
										<img src="../static/images/technology/Brochure.png" />
									</div>
								</div>
								<div className="col-md-7">
									<div className="techpointslst">
										<ul>
											<li>
												<img
													style={{height: 25, width: "auto", paddingRight: 15}}
													src="../static/images/elements/Path262.png"
													alt="drop"
												/>
												Rain water is one of the purest source of water with
												less then 50mg/ litre of total Dissolved Solids (TDS).
											</li>
											<li>
												<img
													style={{height: 25, width: "auto", paddingRight: 15}}
													src="../static/images/elements/Path262.png"
													alt="drop"
												/>
												Rain water is one of the purest source of water with
												less then 50mg/ litre of total Dissolved Solids (TDS).
											</li>
											<li>
												<img
													style={{height: 25, width: "auto", paddingRight: 15}}
													src="../static/images/elements/Path262.png"
													alt="drop"
												/>
												Minimalistic, easy-to-install and easy to maintain
												Products
											</li>
											<li>
												<img
													style={{height: 25, width: "auto", paddingRight: 15}}
													src="../static/images/elements/Path262.png"
													alt="drop"
												/>
												Reduction of Carbon Footprint and Recharge water source
												to avail clean water for consumption.
											</li>
										</ul>

										<div className="groundwaterstxt">
											<button
												data-toggle="modal"
												data-target="#exampleModalCenter"
											>
												Read More{" "}
												<i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
						Launch demo modal
					</button> */}

					<div
						class="modal fade"
						id="exampleModalCenter"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										Key Technology & Innovation Highlights
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
									<ul>
										<li style={{fontSize: 14}}>
											<img
												style={{height: 25, width: "auto", paddingRight: 15}}
												src="../static/images/elements/Path262.png"
												alt="drop"
											/>
											Indirectly reduces power consumed in pumping and checks
											overexploitation of groundwater by establishing water
											neutrality.
										</li>
										<li style={{fontSize: 14}}>
											<img
												style={{height: 25, width: "auto", paddingRight: 15}}
												src="../static/images/elements/Path262.png"
												alt="drop"
											/>
											A team of professionals with over 20+ years of hands on
											experience in the RWH industry enabling cutting edge
											innovation of RWH solutions
										</li>
										<li style={{fontSize: 14}}>
											<img
												style={{height: 25, width: "auto", paddingRight: 15}}
												src="../static/images/elements/Path262.png"
												alt="drop"
											/>
											A state of the art R&D facility for continous innovation
											and ongoing training of our qualified staff
										</li>
										<li style={{fontSize: 14}}>
											<img
												style={{height: 25, width: "auto", paddingRight: 15}}
												src="../static/images/elements/Path262.png"
												alt="drop"
											/>
											Live Demonstration vehicles on RWH are deployed all over
											the country to spread awareness and show a glimpse of the
											varied benefits that RWH has in water conservation
										</li>
									</ul>
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

					<div className="container-fluid techcntrbg">
						<h1>RAINY FILTERS</h1>
					</div>

					<div
						className="container-fluid techbgmain"
						style={{paddingTop: "50px"}}
					>
						<div className="container">
							<div className="row">
								<div className="downloadsec">
									<div id="accordion">
										<div className="techaccrdn">
											<div className="card-header" id="heading-1">
												<h5 className="mb-0 mb0diff">
													<a
														role="button"
														data-toggle="collapse"
														href="#collapse-1"
														aria-expanded="false"
														aria-controls="collapse-1"
													>
														Working Principle
														<span className="mb-span mbspndiff">
															Principles & Overview
														</span>
													</a>
												</h5>
											</div>
											<div
												id="collapse-1"
												className="collapse"
												data-parent="#accordion"
												aria-labelledby="heading-1"
											>
												<div className="card-body">
													<div className="row techacrsec">
														<div className="col-md-12">
															<div className="techpointslst">
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
																		When the Rainwater along with dirt & debris
																		Flows by Gravity through the downtake pipes,
																		it enters into the filter and starts
																		rotating in anticlockwise direction at the
																		periphery of the upper Housing.
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
																		This enables it to flow into the SS-304
																		filter element placed in the lower housing
																		in angular Motion at specific speed &
																		velocity, which creates Cohesive force at
																		low intensity & centrifugal force at high
																		intensity of rainfall.
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
																		In both situations, involving low & High
																		Intensity of rainfall, the working principle
																		of the filter based on Cohesive &
																		centrifugal force respectively, aids the
																		filter element to flush out automatically
																		the dirt & debris.
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
																		Then it passes through the Drain Outlet and
																		simultaneously diverts clean water into the
																		Sump/ recharging well through the Clean
																		water Outlet, which can be used for
																		reutilization or Recharging of Groundwater
																		Source.
																	</li>
																</ul>
															</div>
														</div>
														{/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
													</div>
												</div>
											</div>
										</div>
										<div className="techaccrdn">
											<div className="card-header" id="heading-2">
												<h5 className="mb-0 mb0diff">
													<a
														className="collapsed"
														role="button"
														data-toggle="collapse"
														href="#collapse-2"
														aria-expanded="false"
														aria-controls="collapse-2"
													>
														Special Features
														<span className="mb-span mbspndiff">
															What makes rainy unique
														</span>
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
													<div className="row techacrsec">
														<div className="col-md-12">
															<div className="techpointslst">
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
																		Since the filter element assembly is an open
																		ended system, it does not allow for the
																		stagnation of water and solid particles,
																		eliminating the need for periodic
																		maintenance.
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
																		The filter has self cleaning capabilities
																		enabled by its unique working principles,
																		with efficiency of over 90%
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
																		No external source of energy is required,
																		because the filters are designed to operate
																		by Gravitational force.
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
																		Rainy filters are extremely versatile such
																		that they can be accomodated anywhere, from
																		being wall mounted on low lying roofs to
																		underground ducts.
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
																		Tough high density UV treated polyethylene
																		Housing.
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
																		All the material used are food grade and
																		recyclable.
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
																		Filter Pipe connections can be turned up to
																		360 Degrees allowing it to suit the given
																		site conditions.
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
																		Simple in connection, which any local
																		plumber can fix.
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
																		The filter efficiency remains unchanged even
																		with the variation of intensity of rainfall
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
																		Provision of By Pass Valve is made in the
																		Filter to enable the consumer to divert the
																		water to the drain outlet whenever the
																		situation so arises.
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
																		The filters do not have any moving parts,
																		there is no wear & Tear of the filter
																		allowing for long life span.
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
																		Various models are available to enable to
																		cater to various dimension of Roof areas.
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
																		Rainy filters designed are cost effective
																		and affordable to the common man.
																	</li>
																</ul>
															</div>
														</div>
														{/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
													</div>
												</div>
											</div>
										</div>
										<div className="techaccrdn">
											<div className="card-header" id="heading-3">
												<h5 className="mb-0 mb0diff">
													<a
														className="collapsed"
														role="button"
														data-toggle="collapse"
														href="#collapse-3"
														aria-expanded="false"
														aria-controls="collapse-3"
													>
														Advantages
														<span className="mb-span mbspndiff">
															How rainy can be used to conserve water
														</span>
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
													<div className="row techacrsec">
														<div className="col-md-12">
															<div className="techpointslst">
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
																		By storing of water in the sump &
																		reutilizing, around 35% of the annual
																		requirement of a household can be met.
																		Thereby a considerable amount on the water
																		and power bill can be saved.
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
																		Dependency on water tankers, ground water
																		and corporation water can also be much
																		reduced
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
																		All materials used in this Technology are
																		eco-friendly and recyclable
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
																		Reduces significant carbon foot print
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
																		Technology works on the Gravitational
																		Principle and reduces the pumping of water
																		from distant places & depths
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
																		Checks overexploitation of groundwater
																		source.
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
																		Prevents water logging in low lying areas.
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
																		For an average Rainfall of 800 MM per year
																		over a rooftop of 250 Sq.m, 'Rainy' Filter
																		can harvest average 2,00,000 litres of
																		precious filtered water.
																	</li>
																</ul>
															</div>
														</div>
														{/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid techcntrbg techcntrbgto">
						<h1>
							GROUND WATER
							<br />
							RECHARGING
						</h1>
					</div>

					<div
						className="container-fluid techbgmain"
						style={{paddingTop: "50px"}}
					>
						<div className="container">
							<div className="row">
								<div className="downloadsec">
									<div id="accordion">
										<div className="techaccrdn">
											<div className="card-header" id="heading-1">
												<h5 className="mb-0 mb0diff">
													<a
														role="button"
														data-toggle="collapse"
														href="#collapse-012"
														aria-expanded="false"
														aria-controls="collapse-1"
													>
														Methodology
													</a>
												</h5>
											</div>
											<div
												id="collapse-012"
												className="collapse "
												data-parent="#accordion"
												aria-labelledby="heading-1"
											>
												<div className="card-body">
													<div className="row techacrsec">
														{/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
														<div className="col-md-12">
															<div className="techpointslst">
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
																		The system consists of a silt trap unit and
																		a recharge pit.
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
																		The recharge pit is 5 to 6 meters with 20%
																		filtration media consisting of crushed
																		stone, gravels, coarse sand and activated
																		charcoal, and the rest for storage of water.
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
																		There is a recharging bore (20 to 60 meters)
																		at the bottom of the recharge pit.
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
																		The rain water is led through a water
																		channel and diverted into a silt trap, which
																		allows for silt to settle down in the
																		chamber.
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
																		The overflow water is led into the injection
																		well fitted with the V-Wire filter unit
																		through a horizontally connected pipe.
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
																		It then passes through multilayer of
																		filtration media placed at the top of the
																		Injection Well.
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
																		The water accumulates below the filter media
																		in a specially designed storage well, which
																		creates a water column.
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
																		The percolator pipe, attached to the
																		non-clogging V-wire screen, is placed by
																		boring through the permeable strata at
																		higher depths of about 50-60m below the
																		ground level.
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
																		The water then passes through the permeable
																		strata by gravity and reaches the dry
																		joints, cracks, weathered zone, and
																		recharges the aquifer holding the
																		groundwater.
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
																		The water also gets filtered while passing
																		through the permeable strata.
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="techaccrdn">
											<div className="card-header" id="heading-2">
												<h5 className="mb-0 mb0diff">
													<a
														className="collapsed"
														role="button"
														data-toggle="collapse"
														href="#collapse-2"
														aria-expanded="false"
														aria-controls="collapse-2"
													>
														V Wire Technology
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
													<div className="row techacrsec">
														{/* <div className="col-md-5">
															<div className="techlimg">
																<img src="static/images/Image54.png" />
															</div>
														</div> */}
														<div className="col-md-12">
															<div className="techlimg">
																<img src="static/images/NoPath.png" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="techaccrdn">
											<div className="card-header" id="heading-3">
												<h5 className="mb-0 mb0diff">
													<a
														className="collapsed"
														role="button"
														data-toggle="collapse"
														href="#collapse-3"
														aria-expanded="false"
														aria-controls="collapse-3"
													>
														Advantages
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
													<div className="row techacrsec">
														<div className="col-md-12">
															<div className="techpointslst">
																Technology Benefits:
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
																		Due to the installations of the V- Wire
																		Injection Well in many of the severely
																		drought prone areas of Karnataka, the
																		groundwater table has significantly
																		improved.
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
																		The intervention through V-Wire injection
																		well technology led to hundreds of bore
																		wells, which had water tables more than 1000
																		feet below ground level being recharged to
																		half their levels (450 to 500 feet).
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
																		Reduces hardness , salinity and TDS contents
																		in the groundwater sources.
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
																		Reduces the dependancy on water supply
																		systems, the pumping of water from distant
																		places, extraction of water from deeper
																		depths and movement of water through
																		tankers.
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
																		Excellent source of water both for drinking
																		as well as agriculture and allied activities
																		as the water is free from chemicals such as
																		Fluoride and Chlorine, and so no dissolved
																		salts and minerals from the soil.
																	</li>
																</ul>
																Environmental Benefits:
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
																		Recharge of groundwater, replenishes the
																		deeper layers of the earth’s crust which in
																		turn insulates the earth from rise in
																		temperature, reducing global warming.
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
																		Rain water can enhance limited ground
																		resources. More importantly, with reduced
																		drawing out of ground water, low yield bore
																		well and springs can last indefinitely.
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
																		Rain water harvesting could significantly
																		reduce water removal from rivers during
																		critical summer months, ensuring reasinable
																		water availability to support local
																		ecosystems.
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
																		Seawater ingression can be checked in coast
																		line.
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
																		Reduces surface runoff and loss of top soil,
																		thereby avoids silting of ponds and lakes.
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
																		Ground water recharging promotes water
																		neutrality by diverting the rain water into
																		the earth’s strata, which otherwise would
																		have been wasted.
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
																		All materials used are Eco-friendly and
																		recyclable.
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
																		Sustainable: the ground water source will
																		remain intact for future generations.
																	</li>
																</ul>
															</div>
														</div>
													</div>
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
