import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Dealers</title>
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
					{/* <div className="container-fluid banner enternal">
		    	<div className="hero-image dlrsbnrtxt">
		    		<img src="../../static/images/dealers/Banner1.png" />
				  <div className="hero-text inthemedia">
				    <h1>OUR NETWORK</h1>
				  </div>
				</div>
		    </div>

		    <div className="container-fluid dlrsmain">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-4">
		                    <div className="dlrsinpt">
		                        <input type="dropdown" name="country" placeholder="choose your country"/>
		                    </div>
		                </div>

		                <div className="col-md-4">
		                    <div className="dlrsinpt">
		                        <input type="dropdown" name="state" placeholder="choose your state" />
		                    </div>
		                </div>

		                <div className="col-md-4">
		                    <div className="dlrsinpt">
		                        <input type="dropdown" name="city" placeholder="choose your city" />
		                    </div>
		                </div>

		                <div className="col-md-12 dlrsbtn">
		                    <button>Search Dealers</button>
		                </div>
		            </div>
		        </div>
		    </div>

		    <div className="container-fluid alladrsmain">
		        <div className="container">
		            
		            <div className="row">
		                <div className="col-md-12 dlrsadrs">
		                    <h4>Bangalore</h4>
		                    <div className="col-md-6">
		                        <div className="alladrs">
		                            <h2 style={{color: '#0479bf'}}>KUMARSWAMI LAYOUT</h2>
		                            <h2>VARUNA ENTERPRISES</h2>
		                            <h2>Contact Person:- <span style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>Nithin Balaji R.</span></h2>
		                            <p>#6, Mustafa Building, sharda Nagar<br/>
		                                Vashanthpura Main Road<br />
		                            Bengaluru - 560061</p>
		                            <h2>Mob:- <span style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>8050773225</span></h2>
		                            <h2>Email:- <span style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>varunarainwater@yahoo.com <br />
		                            varuna.hitech@gmail.com</span></h2>

		                        </div>
		                    </div>
		                    <div className="col-md-6">
		                        <div className="alladrs">
		                            <h2 style={{color: '#0479bf'}}>UDAYNAGAR</h2>
		                            <h2>VARUNA ENTERPRISES</h2>
		                            <h2>Contact Person:- <span style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>Nithin Balaji R.</span></h2>
		                            <p>#6, Mustafa Building, sharda Nagar<br/>
		                                Vashanthpura Main Road<br/>
		                            Bengaluru - 560061</p>
		                            <h2>Mob:- <span style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>8050773225</span></h2>
		                            <h2>Email:- < style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}varunarainwater@yahoo.com <br/>
		                            varuna.hitech@gmail.com </ span></h2>
		                        </div>
		                    </div>
		                </div>

		                <div className="col-md-12 dlrsadrs" style={{marginTop: '45px'}}>
		                    <h4>Gulbarga</h4>
		                    <div className="col-md-6">
		                        <div className="alladrs">
		                            <h2 style={{color: '#0479bf'}}>KUMARSWAMI LAYOUT</h2>
		                            <h2>VARUNA ENTERPRISES</h2>
		                            <h2>Contact Person:- <span style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>Nithin Balaji R.</span></h2>
		                            <p>#6, Mustafa Building, sharda Nagar<br/>
		                                Vashanthpura Main Road<br/>
		                            Bengaluru - 560061</p>
		                            <h2>Mob:- <span style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>8050773225</span></h2>
		                            <h2>Email:- <span style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>varunarainwater@yahoo.com <br/>
		                            varuna.hitech@gmail.com</span></h2>

		                        </div>
		                    </div>
		                    <div className="col-md-6">
		                        <div className="alladrs">
		                            <h2 style={{color: '#0479bf'}}>UDAYNAGAR</h2>
		                            <h2>VARUNA ENTERPRISES</h2>
		                            <h2>Contact Person:- <span style={{fontWeight: '500' ,fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>Nithin Balaji R.</span></h2>
		                            <p>#6, Mustafa Building, sharda Nagar<br/>
		                                Vashanthpura Main Road<br/>
		                            Bengaluru - 560061</p>
		                            <h2>Mob:- <span style={{fontWeight: '500', fontSize: '14px', fontFamily: 'sans-serif', letterSpacing: '1px'}}>8050773225</span></h2>
		                            <h2>Email:- <span style={{fontWeight: '500', fontSize: '14px' ,fontFamily: 'sans-serif', letterSpacing: '1px'}}>varunarainwater@yahoo.com <br/>
		                            varuna.hitech@gmail.com</span></h2>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>

		    <div className="container-fluid sssprt">
		        <h1>STRONG SERVICE SUPPORT</h1>
		    </div>

		    <div className="container-fluid" style={{paddingBottom: '45px', background: '#dff7f7'}}>
		        <div className="container">
		            <div className="row">
		                <div className="col-md-6">
		                    <div className="rainyfilterimg">
		                        <img src="images/NoPath-Copy(11).png" />
		                    </div>
		                </div>
		                <div className="col-md-6">
		                    <div className="techpointslst">
		                        <p>Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset. Lorum ipsom is a dummy text for web, Dolor aset.</p>
		                        <ul>
		                            <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                            <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                            <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                            <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                            <li>Lorum ipsom is dolor aset. Its a dummy text. Lorum ipsom is dolor aset.</li>
		                        </ul>
		                    </div>
		                    <div className="rnyfltrbtn"><button id="rnenq">Enquiry</button></div>
		                </div>
		            </div>
		        </div>
		    </div> */}

					<Footer />
				</div>
			</main>

			<footer />
		</Fragment>
	);
}
