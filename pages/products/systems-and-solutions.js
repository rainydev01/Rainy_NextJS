import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
        <title>
          Rain water Harvesting solutions and dedicated services provider |
          Rainyfilters
        </title>
        <link
          rel="canonical"
          href="https://www.rainyfilters.com/products/systems-and-solutions"
        />
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
        <meta
          name="description"
          content="Are you looking for a rain water harvesting service provider? Look no further than Rainyfilters! We offer a wide range of rainwater harvesting solutions and dedicated services to our clients. Contact us today to learn more about our services!"
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
          <div className="container-fluid banner enternal ">
            <div className="hero-image enthroimg">
              <img src="../../static/images/systemsSolutions/systemsAndSolutionBanner.png" />
              {/* <div className="hero-text rnyfltrs text-center">
                <h1>SYSTEMS & SOLUTIONS</h1>
              </div> */}
            </div>
          </div>

          <div className="container-fluid wthothding backgroundDrops">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="rainyfilterimg rainyss"
                    style={{ float: "right", marginRight: "45px" }}
                  >
                    <img src="../../static/images/systemsSolutions/BigImage.JPG" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="techpointslst lstagn syssoln">
                    <p>
                      Products that are precisely coordinated, scientifically
                      designed all-in-one Rainwater Harvesting solutions and
                      dedicated service.
                    </p>

                    <p>
                      'Rainy' also undertakes turnkey projects in corporate
                      sector/ industries/ government undertaking etc. and is
                      capable of handling large projects right from Rain Water
                      Harvesting design, supply and installation to providing
                      end- to-end solutions. 'Rainy' is equipped with a
                      dedicated and experienced team of engineers, technician,
                      workmen along with special installation equipments,
                      drilling rigs, civil structures etc. <br />
                    </p>
                  </div>

                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4 mt-2"></div>
                      <div className="col-md-4 mt-2">
                        <div
                          style={{
                            fontFamily: "Visby Round CF Heavy",
                            fontSize: 14,
                          }}
                        >
                          <button
                            data-toggle="modal"
                            data-target="#sysSoln"
                            id="rnenq"
                          >
                            Read More{" "}
                            <i class="fa fa-angle-right" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="col-md-4 mt-2">
                        <div>
                          <Link href="/contact-us/enquire">
                            <a>
                              <button id="rnenq">
                                Enquire{" "}
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                />
                              </button>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ zIndex: 9999999999 }}
                    className="modal fade bd-example-modal-lg"
                    id="sysSoln"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-lg modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content ">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
                            Broad steps include
                          </h5>
                          <button
                            style={{
                              color: "black",
                              background: "transparent",
                              border: "none",
                            }}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
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
                              Highly trained technical team conducts the
                              Rainwater Harvesting technical survey by studying
                              the layout of the site and building.
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
                              Existing piping system of rainwater and storm
                              drains are studied.
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
                              Gradient and landscape of the site and building
                              are obtained.
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
                              />{" "}
                              Designing and installation of innovative
                              customised system is done with precise scientific
                              approach. These solutions include: diverting
                              existing rainwater pipes, deployment of
                              underground storage, auto pumping system, piping,
                              filtering, storage, utilization etc.
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
                              Designing and construction of ground water
                              recharging structures.
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
                              Complete solutions for water neutrality
                              establishment projects.
                            </li>
                          </ul>
                        </div>
                        <div className="modal-footer">
                          <button
                            style={{
                              color: "black",
                            }}
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid wthothding"
            style={{ paddingTop: "30px" }}
          >
            <div className="container">
              <div className="row">
                <div
                  style={{ pading: "10px", borderRadius: "20px" }}
                  className="col-md-4"
                >
                  <div className="gr3">
                    <img
                      style={{ borderRadius: 20 }}
                      className="img-fluid"
                      src="../../static/images/systemsSolutions/small 1.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="gr3">
                    <img
                      style={{ borderRadius: 20 }}
                      className="img-fluid"
                      src="../../static/images/systemsSolutions/small 2.png"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="gr3">
                    <img
                      style={{ borderRadius: 20 }}
                      className="img-fluid"
                      src="../../static/images/systemsSolutions/small 3.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='container mb-5'>
						<div className='row'>
							<div className='col'>
								<p>
									Rainy has developed HDPE Quick Coupling Push and Joint Pipes
									for Rainwater Harvesting. It is first of its kind in India.
									These pipes and fittings are UV stabilized, grey in colour and
									equipped with unique joining method that leads to easy
									installation and maintenance. The HDPE compound in the pipes
									and fittings is developed in such a way that the pipe does not
									get sagged in normal condition. Due to its high impact,
									strength, hydraulic property, hassle free long life to the end
									user is ensured with Pressure Rating PWC of 6 Kg/cm2
								</p>
								<table class='table table-sysSoln '>
									<tbody>
										<tr>
											<td style={{width: '10%'}}>Sl No:</td>
											<td style={{width: '20%'}}>Product Name</td>
											<td style={{width: '30%'}} className='text-center'>
												Product Image
											</td>
											<td>Description</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>1</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density Polyethelyne Quick Coupling Push
												and Joint Pipe
											</td>
											<td
												style={{width: '30%'}}
												className='text-center my-auto'
											>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/1.jpg'
												/>
											</td>
											<td>
												PWC - 6 Kg/cm2 Length- 3 meters & 6 meters. SIZE IN MM –
												110, 90, 75
											</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>2</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density Polyethelyne Equal Tee
											</td>
											<td style={{width: '30%'}} className='text-center'>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/2.jpg'
												/>
											</td>
											<td>PWC - 6 Kg/cm2 SIZE IN MM – 110, 90, 75</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>3</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density Polyethelyne Right Angle Bend
											</td>
											<td style={{width: '30%'}} className='text-center'>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/3.jpg'
												/>
											</td>
											<td>PWC - 6 Kg/cm2 SIZE IN MM – 110, 90, 75</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>4</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density Polyethelyne 45 degree Bend
											</td>
											<td style={{width: '30%'}} className='text-center'>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/4.jpg'
												/>
											</td>
											<td>PWC - 6 Kg/cm2 SIZE IN MM – 110, 90, 75</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>5</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density Polyethelyne Reducer Coupler
											</td>
											<td style={{width: '30%'}} className='text-center'>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/5.jpg'
												/>
											</td>
											<td>PWC - 6 Kg/cm2 SIZE IN MM – 110, 90, 75</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>6</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density Polyethelyne End cap
											</td>
											<td style={{width: '30%'}} className='text-center'>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/6.jpg'
												/>
											</td>
											<td>PWC - 6 Kg/cm2 SIZE IN MM – 110, 90, 75</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>7</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density Polyethylene Socket Coupler
											</td>
											<td style={{width: '30%'}} className='text-center'>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/7.jpg'
												/>
											</td>
											<td>PWC - 6 Kg/cm2 SIZE IN MM – 110, 90, 75</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>8</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density Polyethylene End Cap
											</td>
											<td style={{width: '30%'}} className='text-center'>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/8.jpg'
												/>
											</td>
											<td>PWC - 6 Kg/cm2 SIZE IN MM – 110, 90, 75</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>9</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density Polyethylene Coupled Door Tee
											</td>
											<td style={{width: '30%'}} className='text-center'>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/9.jpg'
												/>
											</td>
											<td>PWC - 6 Kg/cm2 SIZE IN MM – 110, 90, 75</td>
										</tr>
										<tr>
											<td style={{width: '10%'}}>10</td>
											<td style={{width: '20%'}}>
												Rainy RWH High Density polyethylene Coupled Door Bend
											</td>
											<td style={{width: '30%'}} className='text-center'>
												<img
													style={{
														width: '45%',
													}}
													className='img-fluid'
													src='../../static/images/systemsSolutions/pipes/10.jpg'
												/>
											</td>
											<td>PWC - 6 Kg/cm2 SIZE IN MM – 110, 90, 75</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
 */}
          <Footer />
        </div>
      </main>

      <footer />
    </Fragment>
  );
}
