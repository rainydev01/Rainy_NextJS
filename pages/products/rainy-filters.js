import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
									<p style={{textAlign: 'center', fontSize: '16px', fontWeight: '500', color: '#2c97d4'}}>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset. Lorum
											ipsom is a dummy text for web, Dolor aset.
										</p>
								</div>
								<div className="col-md-4">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL80.png" />
									</div>
								</div>
								<div className="col-md-8">
									<div className="techpointslst">
										
									<table class="table table-striped">
									<thead>
									  <tr style={{background: 'rgb(225, 241, 241)'}}>
										<th>Suitable up to area:</th>
										<th>110 SQMTRS</th>
									  </tr>
									</thead>
									<tbody>
									  <tr>
										<td>Max: Intensity of Railfall:</td>
										<td>75 mm / hr</td>
									  </tr>
									  <tr>
										<th>Suitable up to area:</th>
										<th>110 SQMTRS</th>
									  </tr>
									  <tr>
									  <td>Max: Intensity of Railfall:</td>
									  <td>75 mm / hr</td>
									  </tr>
									  <tr>
										<td>Max: Intensity of Railfall:</td>
										<td>75 mm / hr</td>
									  </tr>
									  <tr>
										<th>Suitable up to area:</th>
										<th>110 SQMTRS</th>
									  </tr>
									  <tr>
									  <td>Max: Intensity of Railfall:</td>
									  <td>75 mm / hr</td>
									  </tr>
									</tbody>
								  </table>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid fl100">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 100</h1>
									<p style={{textAlign: 'center', fontSize: '16px', fontWeight: '500', color: '#2c97d4'}}>
										Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
										for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset. Lorum
										ipsom is a dummy text for web, Dolor aset.
									</p>
								</div>
								<div className="col-md-8">
									<div className="techpointslst">
										
									<table class="table table-striped">
									<thead>
									  <tr style={{background: 'rgb(225, 241, 241)'}}>
										<th>Suitable up to area:</th>
										<th>110 SQMTRS</th>
									  </tr>
									</thead>
									<tbody>
									  <tr>
										<td>Max: Intensity of Railfall:</td>
										<td>75 mm / hr</td>
									  </tr>
									  <tr>
										<th>Suitable up to area:</th>
										<th>110 SQMTRS</th>
									  </tr>
									  <tr>
									  <td>Max: Intensity of Railfall:</td>
									  <td>75 mm / hr</td>
									  </tr>
									  <tr>
										<td>Max: Intensity of Railfall:</td>
										<td>75 mm / hr</td>
									  </tr>
									  <tr>
										<th>Suitable up to area:</th>
										<th>110 SQMTRS</th>
									  </tr>
									  <tr>
									  <td>Max: Intensity of Railfall:</td>
									  <td>75 mm / hr</td>
									  </tr>
									</tbody>
								  </table>
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

					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 200</h1>
								</div>
								<div className="col-md-6">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL200.png" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="techpointslst lstagn">
										<p>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset.
										</p>
										<ul>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.
											</li>
											<li>
												Lorum ipsom is dolor aset. Its a dummy text.
											</li>
										</ul>
									</div>
									<div className="rnyfltrbtn">
										<button id="rnenq">Enquiry</button>
										<button id="rnrdmr">Read More</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid fl100">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 300</h1>
								</div>
								<div className="col-md-6">
									<div className="techpointslst lstagn">
										<p>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset.
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
									<div className="rnyfltrbtn">
										<button id="rnenq">Enquiry</button>
										<button id="rnrdmr">Read More</button>
									</div>
								</div>

								<div className="col-md-6">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL100.png" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container-fluid">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h1 className="fl80">FL 500</h1>
								</div>
								<div className="col-md-6">
									<div className="rainyfilterimg">
										<img src="../../static/images/products/FL200.png" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="techpointslst lstagn">
										<p>
											Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text
											for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset.
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
									<div className="rnyfltrbtn">
										<button id="rnenq">Enquiry</button>
										<button id="rnrdmr">Read More</button>
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
