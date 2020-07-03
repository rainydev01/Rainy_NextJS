import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Technology</title>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossOrigin="anonymous"
				/>
				 <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700&family=Open+Sans&family=Raleway&display=swap" rel="stylesheet"></link>
			</Head>
			<main>
				<div className="App">
					<Header />

					<div className="container-fluid banner enternal">
		    	<div className="hero-image enthroimg">
		    		<img src="../static/images/technology/MainBanner.png" />
				  <div className="hero-text techbnnrtxt">
				    <h1>OUR INNOVATIVE<br/>TECHNOLOGY</h1>
				  </div>
				</div>
		    </div>

		    <div className="container-fluid techbgmain">
		        <div className="container">
		            <div className="techhedng">
		                <h2 className="tech-heading">KEY TECHNOLOGY & INNOVATION HIGHLIGHTS</h2>
		                <p className="techpara">Lorum ipsum dolor sit amet, conseteture sadipscing elitr, set diam nonumy. Lorum ipsum dolor sit amet, conseteture sadipscing elitr, set diam nonumy Lorum ipsum dolor sit amet, conseteture sadipscing elitr, set diam nonumy, conseteture sadipscing elitr, set diam nonumy.</p>
		            </div>
		            <div className="row">
		                <div className="col-md-5">
		                    <div className="techlimg">
		                        <img src="../static/images/technology/Technology.png" />
		                    </div>
		                </div>
		                <div className="col-md-7">
		                    <div className="techpointslst">
		                        <ul>
		                            <li>Rain water is one of the purest source of water with less then 50mg/ litre of total Dissolved Solids (TDS).</li>
		                            <li>Rain water is one of the purest source of water with less then 50mg/ litre of total Dissolved Solids (TDS).</li>
		                            <li>Minimalistic, easy-to-install and easy to maintain Products</li>
		                            <li>Rain water is one of the purest source of water with less then 50mg/ litre of total Dissolved Solids (TDS).Rain water is one of the purest source of water with less then 50mg/ litre of total Dissolved Solids (TDS).</li>
		                            <li>Rain water is one of the purest source of water with less then 50mg/ litre of total Dissolved Solids (TDS).</li>
		                        </ul>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>

		    <div className="container-fluid techcntrbg">
		        <h1>RAINY FILTERS</h1>
		    </div>

		    <div className="container-fluid techbgmain" style={{paddingTop: '50px'}}>
			    <div className="container">
			    	<div className="row">
			    		<div className="downloadsec">
			    			<div id="accordion">
							  <div className="techaccrdn">
							    <div className="card-header" id="heading-1">
							      <h5 className="mb-0 mb0diff">
							        <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
							          Working Principle <span className="mb-span mbspndiff">Principles & Overview</span>
							        </a>
							      </h5>
							    </div>
							    <div id="collapse-1" className="collapse show" data-parent="#accordion" aria-labelledby="heading-1">
							      <div className="card-body">  
							      Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test.
		                          <div className="row techacrsec">
		                            <div className="col-md-7">
		                                <div className="techpointslst">
		                                    <ul>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                    </ul>
		                                </div>
		                            </div>
		                            <div className="col-md-5">
		                                <div className="techlimg">
		                                    <img src="images/Image 54.png" />
		                                </div>
		                            </div>
		                        </div>
							      </div>
							    </div>
							  </div>
							  <div className="techaccrdn">
							    <div className="card-header" id="heading-2">
							      <h5 className="mb-0 mb0diff">
							        <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
							          Special Features <span className="mb-span mbspndiff">What makes rainy unique</span>
							        </a>
							      </h5>
							    </div>
							    <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
							      <div className="card-body">  
		                          Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test.
		                          <div className="row techacrsec">
		                            <div className="col-md-7">
		                                <div className="techpointslst">
		                                    <ul>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                    </ul>
		                                </div>
		                            </div>
		                            <div className="col-md-5">
		                                <div className="techlimg">
		                                    <img src="images/Image 54.png" />
		                                </div>
		                            </div>
		                        </div>
		                          </div>
							    </div>
							  </div>
							  <div className="techaccrdn">
							    <div className="card-header" id="heading-3">
							      <h5 className="mb-0 mb0diff">
							        <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
							           Advantages<span className="mb-span mbspndiff">How rainy can be used to conserve water</span>
							        </a>
							      </h5>
							    </div>
							    <div id="collapse-3" className="collapse" data-parent="#accordion" aria-labelledby="heading-3">
							      <div className="card-body">  
		                          Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test.
		                          <div className="row techacrsec">
		                            <div className="col-md-7">
		                                <div className="techpointslst">
		                                    <ul>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                    </ul>
		                                </div>
		                            </div>
		                            <div className="col-md-5">
		                                <div className="techlimg">
		                                    <img src="images/Image 54.png" />
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

		    <div className="container-fluid techcntrbg techcntrbgto">
		        <h1>GROUND WATER<br/>RECHARGING</h1>
		    </div>

		    <div className="container-fluid techbgmain" style={{paddingTop: '50px'}}>
		        <div className="container">
		            <div className="row">
		                <div className="downloadsec">
		                    <div id="accordion">
		                      <div className="techaccrdn">
		                        <div className="card-header" id="heading-1">
		                          <h5 className="mb-0 mb0diff">
		                            <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
		                              Working Principle <span className="mb-span mbspndiff">Principles & Overview</span>
		                            </a>
		                          </h5>
		                        </div>
		                        <div id="collapse-1" className="collapse show" data-parent="#accordion" aria-labelledby="heading-1">
		                          <div className="card-body">  
		                          Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test.
		                          <div className="row techacrsec">
		                            <div className="col-md-5">
		                                <div className="techlimg">
		                                    <img src="images/Image 54.png" />
		                                </div>
		                            </div>
		                            <div className="col-md-7">
		                                <div className="techpointslst">
		                                    <ul>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
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
		                            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
		                              Special Features <span className="mb-span mbspndiff">What makes rainy unique</span>
		                            </a>
		                          </h5>
		                        </div>
		                        <div id="collapse-2" className="collapse" data-parent="#accordion" aria-labelledby="heading-2">
		                          <div className="card-body">  
		                          Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test.
		                          <div className="row techacrsec">
		                            <div className="col-md-5">
		                                <div className="techlimg">
		                                    <img src="images/Image 54.png" />
		                                </div>
		                            </div>
		                            <div className="col-md-7">
		                                <div className="techpointslst">
		                                    <ul>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                    </ul>
		                                </div>
		                            </div>
		                        </div>
		                          </div>
		                        </div>
		                      </div>
		                      <div className="techaccrdn">
		                        <div className="card-header" id="heading-3">
		                          <h5 className="mb-0 mb0diff">
		                            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
		                               Advantages<span className="mb-span mbspndiff">How rainy can be used to conserve water</span>
		                            </a>
		                          </h5>
		                        </div>
		                        <div id="collapse-3" className="collapse" data-parent="#accordion" aria-labelledby="heading-3">
		                          <div className="card-body">  
		                          Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test.
		                          <div className="row techacrsec">
		                            <div className="col-md-5">
		                                <div className="techlimg">
		                                    <img src="images/Image 54.png" />
		                                </div>
		                            </div>
		                            <div className="col-md-7">
		                                <div className="techpointslst">
		                                    <ul>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                    </ul>
		                                </div>
		                            </div>
		                        </div>
		                          </div>
		                        </div>
		                      </div>
		                      <div className="techaccrdn">
		                        <div className="card-header" id="heading-3">
		                          <h5 className="mb-0 mb0diff">
		                            <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
		                               Advantages<span className="mb-span mbspndiff">How rainy can be used to conserve water</span>
		                            </a>
		                          </h5>
		                        </div>
		                        <div id="collapse-3" className="collapse" data-parent="#accordion" aria-labelledby="heading-3">
		                          <div className="card-body">  
		                          Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test. Lorum ipsom is a dummy text, Here is a text is only for test.
		                          <div className="row techacrsec">
		                            <div className="col-md-5">
		                                <div className="techlimg">
		                                    <img src="images/Image 54.png" />
		                                </div>
		                            </div>
		                            <div className="col-md-7">
		                                <div className="techpointslst">
		                                    <ul>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                                        <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
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
