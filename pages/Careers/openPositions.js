import Carousel from 'react-multi-carousel'
// import "react-multi-carousel/lib/styles.css";
import React, {Fragment} from 'react'
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share'

const OpenPostionsSlider = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: {max: 4000, min: 3000},
			items: 1,
		},
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 1,
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 1,
		},
		mobile: {
			breakpoint: {max: 464, min: 0},
			items: 1,
		},
	}
	return (
		<Fragment>
			<Carousel responsive={responsive}>
				<div>
                <div className="abou-home-heading">
						<h2>Open Positions</h2>
					</div>
					<div className='container media-main'>
						<div className='col-md-4'>
							<div className='sec-brdr'>
								<div className='mdiaimg'>
									<img src='../static/images/career/sales-executive-500x500.jpg' />
								</div>
								<div className='mdiacont'>
									<div className='grndtext'>
										<h3>
											<a
												href=''
												target='_blank'
											>
												Sales Executive
												<br />
											</a>
										</h3>
										<p
											style={{
												textAlign: 'left',
												color: '#4c3f43',
												fontSize: '13px',
												fontWeight: '500',
												letterSpacing: '0.5px',
											}}
										>
											Job description: Attend customer enquiries, interact with internal and external steak holders,
											maintaining customer database, drafting emails, reporting.
										</p>
										<p
											style={{
												textAlign: 'left',
												color: '#4c3f43',
												fontSize: '13px',
												fontWeight: '500',
												letterSpacing: '0.5px',
											}}
										>
										Requirements: Degree graduate with good people skills, Microsoft office, good communication skills, fluent
										English, fluent Kannada and Hindi (added advantage).<br></br>
										Location: Chikmagalur
										</p>
										{/* <div className='col-md-12 mdiasocial'>
											<div className='col-md-6 applybtn'>
												<button>
													<a
														href='https://forms.gle/zccXZERjuPJ8PKYK7'
														target='_blank'
													>
														Apply Now
													</a>
													{'  '}
													
												</button>
											</div>
										</div> */}
										<button>
													<a
														href='https://forms.gle/zccXZERjuPJ8PKYK7'
														target='_blank'
													>
														Apply Now
													</a>
													{'  '}
													
												</button>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="sec-brdr">
								<div className="mdiaimg">
									<img src="../static/images/career/marketingexecutive.jpg" style={{
                                        height:"196px"
                                    }} />
								</div>
								<div className="mdiacont">
									<div className="grndtext">
										<h3>
											<a
												href="https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
												target="_blank"
											>
												Marketing Executive
												<br />
											</a>
										</h3>
										<p
											style={{
												textAlign: "left",
												color: "#4c3f43",
												fontSize: "13px",
												fontWeight: "500",
												letterSpacing: "0.5px",
											}}
										>
												Job description: This position is to build business by identifying prospects, create new business
												opportunities, helping convert the prospects to clients. It involves developing and managing
												excellent relationship with existing clients and leveraging on goodwill for furthering the
												business. Making business reports and steering the sales team in right direction for optimising
												sales.<br></br>
												In office as wells as touring job type
										</p>
										<button>
													<a
														href='https://forms.gle/zccXZERjuPJ8PKYK7'
														target='_blank'
													>
														Apply Now
													</a>
													{'  '}
													
												</button>
									</div>
								</div>
							</div>
						</div> 
					</div>
				</div>
			</Carousel>
			;
		</Fragment>
	)
}

export default OpenPostionsSlider
