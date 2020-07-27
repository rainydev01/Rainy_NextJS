import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Banner from "../components/Banner";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import RWHFilters from "../components/RWHFilters";
import FilterToSelect from "../components/FilterToSelect";
import GroundWaterRecharging from "../components/GroundWaterRecharging";
import OurClients from "../components/OurClients";

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Rainy: RWH Systems</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#ffffff" />
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
				/>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
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
					<Banner />
					<WhatWeDo />
					<AboutUs />
					<RWHFilters />
					<FilterToSelect />
					<GroundWaterRecharging />
					<OurClients />
					<Footer />
				</div>
			</main>

			<footer />
		</Fragment>
	);
}
