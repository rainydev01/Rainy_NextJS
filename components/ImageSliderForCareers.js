import Carousel from 'react-multi-carousel'
// import "react-multi-carousel/lib/styles.css";
import React, {Fragment} from 'react'
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share'

const ImageSliderMulti = () => {
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
					<div className='container media-main'>
						<div className='col-md-4'>
							<div className='sec-brdr'>
								<div className='mdiaimg'>
									<img src='../static/images/media/articles/Farmland_SKOCH_2018.jpg' />
								</div>
								<div className='mdiacont'>
									<div className='grndtext'>
										<h3>
											<a
												href='http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html'
												target='_blank'
											>
												SKOCH Award Winner: Farmland Rainwater Harvesting
												Systems
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
											Skoch Achiever Award 2018 Silver Category Awarded To
											Farmland Rainwater Harvesting Systems And Conferred On
											10th March 2018 At New Delhi
										</p>
										<div className='col-md-12 mdiasocial'>
											<div className='col-md-6 mediasocial'>
												<FacebookShareButton
													url={
														'http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html'
													}
												>
													<i className='fa fa-facebook' aria-hidden='true' />
												</FacebookShareButton>

												<TwitterShareButton
													url={
														'http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html'
													}
												>
													<i className='fa fa-twitter' aria-hidden='true' />
												</TwitterShareButton>

												<WhatsappShareButton
													url={
														'http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html'
													}
												>
													<i className='fa fa-whatsapp' aria-hidden='true' />
												</WhatsappShareButton>
											</div>
											<div className='col-md-6 mediabtn'>
												<button>
													<a
														href='http://www.skoch.in/295/farmland-rainwater-harvesting-systems.html'
														target='_blank'
													>
														Apply Now
													</a>
													{'  '}
													<i class='fa fa-angle-right' aria-hidden='true' />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="sec-brdr">
								<div className="mdiaimg">
									<img src="../static/images/media/articles/Benefits-of-rainwater-harvesting.jpg" style={{
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
												The Benefits of Rain Water Harvesting: Why You Should Start Collecting Rain Water
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
											Rainwater harvesting is the process that collecting and storing rainwater for reuse. It is a sustainable way to use water, as it reduces the demand for municipal water supplies, and it can also help to reduce flooding.
										</p>
										<div className="col-md-12 mdiasocial">
											<div className="col-md-6 mediasocial">
												<FacebookShareButton
													url={
														"https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
													}
												>
													<i className="fa fa-facebook" aria-hidden="true" />
												</FacebookShareButton>

												<TwitterShareButton
													url={
														"https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
													}
												>
													<i className="fa fa-twitter" aria-hidden="true" />
												</TwitterShareButton>

												<WhatsappShareButton
													url={
														"https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
													}
												>
													<i className="fa fa-whatsapp" aria-hidden="true" />
												</WhatsappShareButton>
											</div>
											<div className="col-md-6 mediabtn">
												<button>
													<a
														href="https://medium.com/@aravie12121/the-benefits-of-rain-water-harvesting-why-you-should-start-collecting-rain-water-281609160484"
														target="_blank"
													>
														Apply Now
													</a>
													{"  "}
													<i className="fa fa-angle-right" aria-hidden="true" />
												</button>
											</div>
										</div>
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

export default ImageSliderMulti
