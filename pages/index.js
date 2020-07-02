import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Banner from '../components/Banner';
import WhatWeDo from '../components/WhatWeDo';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import RWHFilters from '../components/RWHFilters';
import FilterToSelect from '../components/FilterToSelect';
import GroundWaterRecharging from '../components/GroundWaterRecharging';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Rainy</title>
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
					<Footer />
				</div>
			</main>

			<footer />
		</Fragment>
	);
}
