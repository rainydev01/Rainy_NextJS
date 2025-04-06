import React, { Fragment } from 'react'
import Link from 'next/link';
import { BsCart } from "react-icons/bs";

const Banner = () => {
	return (
		<Fragment>
			<div className='container-fluid banner bannrhome'>
				<div className='row' style={{ display: 'block' }}>
					<div className='hero-image'>
						<Link href='/products/rainy-filters'>
							<a>
								<img
									src='../static/images/homepage/WebsiteBanner.jpg'
									alt='Banner'
								/>
							</a>
						</Link>
						<button className="btn-shopnow-yellow">
							<a href="https://shop.rainyfilters.com/">Shop Now <BsCart /></a>
						</button>
						<a href="https://wa.me/919996664458" target='_blanck' className='whatsapp-img'><img src='../static/images/homepage/whatsapp.png' alt="whatsapp" /></a>
						<a href={`tel: ${+919996664458}`} target='_blank' className='phone-img'><img src='../static/images/phone.png' alt='phone' /></a>
						{/* <div className='hero-text'>
							<h1 style={{color: 'white'}}>RAINWATER HARVESTING</h1>
							<p style={{color: 'white'}}>
								Do You Harvest Rainwater? If Not, Start Today!
							</p>

							<Link href='/products/rainy-filters'>
								<a>
									<button>Learn More</button>
								</a>
							</Link>

							<Link href='/contact-us/enquire'>
								<a>
									<button style={{marginLeft: 20}}>Enquire Now</button>
								</a>
							</Link>
						</div> */}

					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Banner
