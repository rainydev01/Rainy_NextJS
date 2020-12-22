import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import WhatWeDo from "../../components/WhatWeDo";
import Footer from "../../components/Footer";
import AboutUs from "../../components/AboutUs";
import RWHFilters from "../../components/RWHFilters";
import FilterToSelect from "../../components/FilterToSelect";
import GroundWaterRecharging from "../../components/GroundWaterRecharging";

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
				<title>Rainy - Social Awareness</title>
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
				<script
					dangerouslySetInnerHTML={{
						__html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '587685655184685');
fbq('track', 'PageView');`,
					}}
				/>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=587685655184685&ev=PageView&noscript=1"
/>`,
					}}
				/>
			</Head>
			<main>
				<div className="App">
					<Header />

					<div className="container-fluid sawar">
						<h1>SOCIAL AWARENESS</h1>
					</div>

					<div className="container-fluid">
						<div className="container groundwaterSocial">
							<div className="groundwatersec">
								<div className="col-md-6">
									<div className="groundwatersimg">
										<img src="../../static/images/ourTeam/Group1238.jpg" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="groundwaterstxt" style={{paddingTop: "20px"}}>
										<h3>Social Awareness Initiatives</h3>
										<p>
											We have a fleet of Mobile live demonstration units to
											realise our mission of conserving every drop of rainwater.
											These vehicles travel across India to demonstrate
											rainwater harvesting. We have joined hands with Government
											of India under the JALA SHAKTHI ABHIYAN, to spread
											awareness on water conservation by using these units. In
											addition, some more benefits of this program are:
											<br />
											<img
												style={{height: 25, width: "auto", paddingRight: 15}}
												src="../static/images/elements/Path262.png"
												alt="drop"
											/>{" "}
											The Mobile Live demonstration unit is used for educational
											purposes wherein our experts provide demonstrations to
											facilitate easy understanding of the importance, methods
											and outcomes of conserving rainwater.
											<br />
											<img
												style={{height: 25, width: "auto", paddingRight: 15}}
												src="../static/images/elements/Path262.png"
												alt="drop"
											/>{" "}
											The demonstration of rainwater harvesting using our Mobile
											units is done in schools, engineering colleges,
											universities, industrial exhibitions, seminars,
											international and national expos, agricultural expos,
											sustainability-based events, institutions, large events
											etc.
											<br />
											{/* &#9679; The educational sessions provided using the Mobile
											has proved to be effective in reaching out to young minds
											and motivating them to build a greener planet.
											<br /> */}
											<img
												style={{height: 25, width: "auto", paddingRight: 15}}
												src="../static/images/elements/Path262.png"
												alt="drop"
											/>{" "}
											We firmly beleive that awareness and education on
											rainwater harvesting will help shape a better future.
										</p>

										{/* <button>Read More</button> */}
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
