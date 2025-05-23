import React, { Fragment } from 'react';
import { BsCart } from "react-icons/bs";

const RWHFilters = () => {
	return (
		<Fragment>
			<div className='container-fluid rainy-dual'>
				<div className='container'>
					<div className='abou-home-heading'>
						<h2>RAINY DUAL INTENSITY RAIN WATER HARVESTING FILTERS</h2>
					</div>

					<div className='row dual-secthree'>
						<div className='col-md-4'>
							<div className='mdrntech threecntr'>
								<h3 className='mdrntech-text'>
									Modern Technology
									<img src='../static/images/homepage/propertiesRWH/modernTech.png' alt='Modern Technology' />
								</h3>
								<p>
									'Rainy' filters are made with highly durable, food-grade
									material and have self cleaning capabilties to auto-flush out
									debris.
								</p>
							</div>
							<div className='intfltrs threecntr'>
								<h3 className='mdrntech-text'>
									Dual Intensity Filters
									<img src='../static/images/homepage/propertiesRWH/dualIntensityFilter.png' alt='Dual Intensity Filters' />
								</h3>
								<p>
									Our filters work on the principle of cohesion & centrifugal
									force. This enables filtering at variable intensity of
									rainfall without affecting the efficiency.
								</p>
							</div>
							<div className='extrnlenrgy threecntr'>
								<h3 className='mdrntech-text'>
									No External Energy Required
									<img src='../static/images/homepage/propertiesRWH/noEnergy.png' alt='No External Energy Required' />
								</h3>
								<p>
									Works on Gravitational Force and does not require any external
									energy. Low gravitational head of just 1 feet makes it
									feasible for installation on any building.
								</p>
							</div>
						</div>
						<div className='col-md-4 my-auto'>
							<img
								className='img-fluid'
								src='../static/images/homepage/rwhf.png'
								alt='rainwater filter'
								float='true'
							/>
						</div>
						<div className='col-md-4'>
							<div className='easyinsta threecntr'>
								<h3>
									<img src='../static/images/homepage/propertiesRWH/easyInstallation.png' alt='Easy Installation' />
									Easy Installation
								</h3>
								<p>
									360 degree union rotation capability make these filters
									suitable for any site conditions. Easily wall mounted, self
									installable with easy to understand instructions make it user
									friendly.
								</p>
							</div>
							<div className='wderng threecntr'>
								<h3>
									<img src='../static/images/homepage/propertiesRWH/wideRange.png' alt='Wide Range' />
									Wide Range
								</h3>
								<p>
									Various models available to suit rooftop areas ranging from
									110 sqm to 500 sqm. The collected water can be diverted to
									underground sump, existing borewell or other water reservoirs.
								</p>
							</div>
							<div className='cstefftve threecntr'>
								<h3>
									<img src='../static/images/homepage/propertiesRWH/costEffective.png' alt='Cost Effective & Affordable' />
									Cost Effective & Affordable
								</h3>
								<p>
									'Rainy' filters have no moving parts, eliminating any wear and
									tear. This makes them long lasting with only one time
									economical purchase cost.
								</p>
							</div>
						</div>
					</div>
					<div className='shop-btn-new'>
						<button className="btn-shopnow">
							<a href="https://shop.rainyfilters.com/">Shop Now <BsCart /></a>
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default RWHFilters
