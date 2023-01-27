import {Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/FooterDealer";
import DealerSelect from "../../components/DealerSelect";

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
				<title>Rainyfilters - Rainwater harvesting company in Chennai,Coimbatore,Banglore, Hyderabad, Pune, Kolkata, Mumbai, Thane, Delhi, Ahmedabad</title>
				<meta name="description" content="We are also famous as the best rainwater harvesting filters company in places like Pune, Kolkata, Mumbai, Thane, Delhi, Ahmedabad,Chennai,Coimbatore,Banglore, and Hyderabad, Etc."/>
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
				{/* <script
					dangerouslySetInnerHTML={{
						__html: function googleTranslateElementInit() {
							
							new window.google.translate.TranslateElement(
								{
									pageLanguage: "pt",
								},
								"google_translate_element"
							);
						},
					}}
				/> */}

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
					<div className="container-fluid banner enternal">
						<div className="hero-image dlrsbnrtxt">
							<img src="../../static/images/dealers/Image93.jpg" />
							<div
								style={{left: "22%", top: "35%"}}
								className="hero-text inthemedia dealersb"
							>
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
											<a style={{fontSize: 16}} href="/contact-us/enquire">
												Enquire
												<i
													style={{padding: 5}}
													class="fa fa-angle-right"
													aria-hidden="true"
												/>
											</a>
										</button>
									</div>
									
								</div>
								<div className="pageContent">
										<div className="brwhcContent" style={{ marginTop:"30px"}}>
										<h2>We are the best rainwater harvesting company</h2>
											<p>
											Rainy Filters was founded with the goal of developing the best rainwater harvesting filters in india. We offer our services throughout
											india and have helped countless people harvest rainwater for their homes and buiseness. Our ongoing R&D ensures constant innovation and 
											promising performance. 
											</p>

											<p>
												Our Rainy Filters are made from the highest quality materials and are designed to last for years.
											</p>

											<p>
											We are constantly innovating and improving our products to make sure that our customers are getting the best possible experience. Our filters don't
											require any external energy or electricity in order to work. It works on graitational force to function. Most rainwater filters in the market feature a valve at the drain outlet,
											manual operation of drain valve calls for frequent maintenance. On the other hand, Rainy filters are open-ended which enables them to facilitate self-cleaning, in other terms dirt and debris are constantly flushed out
											through the Auto-flush out mechanism. Therefore, the virtue of open-drain prevents frequent manual cleaning unlike other filters in the market. Another significant advantage of Rainy filters is - 10 year Manufacturer's Warranty,
											robust built and carefully selected raw materials make our filters long lasting. Long warranty tenure also ensure stability while calculating pay-back period, considering 
											the initial investment costs.
										</p>
										</div>

										<div className="pncContent"  style={{ marginTop:"30px"}}>
													<h2>
														Pan India Coverage
													</h2>
													<p>
														If you're looking for a reliable, professional, and trustworthy <a href=""> rainwater harvesting company</a>, look no further than Rainy Filters!
													</p>
													<p>
														As of now, we have about 134 authorised dealers pan india, and this network is constantly expanding. We also export out RWH filter to more than 14 countries globally.
													</p>
													<p>
														As one of the best Rainwater Harvesting Firm, we have a well-established customer base in South India. And we have sold thousands of rainwater harvesting filters in Chennai,Coimbatore,Banglore, and Hyderabad, Etc.
													</p>
													<p>
														Our job as Rainwater Harvesting Firm is to provide the best solutions to our clients. you can see our customer testimonials from customers who will assure us that we are the best rainwater harvesting company.
													</p>
													<p>
														Apart from this, we also have significant customer base in North inda too. We are also famous as the best rainwater consultants in places like Pune, Kolkata, Mumbai, Thane, Delhi, and Ahmedabad Etc.
													</p>
										</div>
										<div className="wrwbContent" style={{marginTop:"30px"}}>
											<h2>
												Why we are best?
											</h2>
											<p>
													Our rainwater filters are very minimalistic and anyone can install them with ease. in addition, it is very easy to clean and maintain and doesn't involve any complex mechanisms. We keep it
													very simple and that is one of the reasons that make our products best. Our filters ensure remarkabel Price-Performance Ratio compared to any other filters in global market.
												</p>
												<p>
													We pay attention to details, right from careful selection of raw materials for manufacturing to pre-delivery inspection, we make sure to deliver only the best to our customers. We consider our customers as extended Rainy family, after sales service
													is one our key strengths. Our aftersales is backed by both ability and availability as a result of wide spread dealer presence.
												</p>
												<p>
													We care about the enviroment, and that is why we made all of our filters environmentally friendly. Our filters are made using recyclable materials to reduce or carbon footprint.
												</p>
												<p>
													Moreover, rainwater harvesting being a significant tool towards offsetting negative impacts of water footprint, our filters help individuals and entities to mitigate water scarcity and we all make significant contributions to our environment when we use rainwater for our basic needs.Hence, it will reduce the stress on our depleting freshwater resources.
												</p>
												<p>
													Further, our water filters are designed in an elegant manner where it has a separate outlet for the drain and another outlet for clean water. Since the filter is vertically aligned, dirt and debris would go directly to the drain outlet.
												</p>
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
