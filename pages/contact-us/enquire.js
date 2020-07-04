import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Enquire </title>
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
					<div className="container-fluid banner enternal">
						<div className="hero-image gtintchbnnrtxt">
							<img src="../../static/images/get-in-touch/Banner.png" />
							<div className="hero-text inthemedia">
								<h1>GET IN TOUCH</h1>
							</div>
						</div>
					</div>

					<div className="container-fluid gtintchmain">
						<div className="container">
							<div className="row gtintchrw">
								<div className="col-md-5">
									<div className="gtintchlft">
										<h6 className="contacth">
											<img src="../../static/images/get-in-touch/ic-contact-map-pin@2x.png" />Address
										</h6>
										<p className="contacttxt">
											Farmland Rainwater Harvesting system No 648, Ground Flore, 11th cross, 7th
											block, jaya Nagar, Bengaluru, Karnataka - 560082.
										</p>

										<h6 className="contacth">Head Office</h6>
										<p className="contacttxt">
											SGS Complex, K.M.Road, Chikmagalur. PIN: 577101, Karnataka, India.
										</p>

										<h6 className="contacth">Rainy Research and Manufacture</h6>
										<p className="contacttxt">
											m/s RAINY RESEARCH AND MFG. Hanumidi Village, Narayanpura Gram Panchayat
											Belur, Hassan District, Karnataka- 573115.
										</p>

										<h6 className="contacth">
											<img src="../../static/images/get-in-touch/ic-contact-phone@2x.png" />Contact
										</h6>
										<p className="contacttxt">+91 94480 76595</p>
										<p className="contacttxt">+91 94481 30524</p>
										<p className="contacttxt">+91 94494 43232</p>

										<h6 className="contacth">
											<img src="../../static/images/get-in-touch/ic-contact-mail@2x.png" />Email
											Id
										</h6>
										<p className="contacttxt">farmland_rhs@yahoo.co.in</p>
									</div>
								</div>
								<div className="col-md-7">
									<div className="gtintchrgt">
										<p>
											Lorum ipsom Dolor sit Amet, Lorum ipsum is the dummy text for the web
											testing. Lorum ipsum is the dummy text for the web testing. Lorum ipsum is
											the dummy text for the web testing. Lorum ipsum is the dummy text for the
											web testing. Lorum ipsum is the dummy text for the web testing. Lorum ipsum
											is the dummy text for the web testing.
										</p>

										<form>
											<div className="fominpt">
												<input type="text" name="name" placeholder="Name:" />
											</div>
											<div className="fominpt">
												<input type="text" name="phone" placeholder="Phone:" />
											</div>
											<div className="fominpt">
												<input type="email" name="email" placeholder="Email id:" />
											</div>
											<div className="fominpt frmmsg">
												<input type="textarea" name="message" placeholder="Message:" />
											</div>
											<div className="fominpt frmbtn">
												<input type="submit" name="submit" value="Submit" />
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>

						<div className="contmap">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.653807803604!2d77.67329721430399!3d12.929958019290378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae139f6979bff1%3A0xc2deb6664aad76c3!2sBellandur%20Post%20Office!5e0!3m2!1sen!2sin!4v1593196134643!5m2!1sen!2sin"
								width="100%"
								height="350"
								frameborder="0"
								style={{ border: '0' }}
							/>
						</div>
					</div>

					<Footer />
				</div>
			</main>

			<footer />
		</Fragment>
	);
}
