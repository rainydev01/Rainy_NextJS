import React, { Fragment } from 'react';

const WhatWeDo = () => {
	return (
		<Fragment>
			<div className="container-fluid">
				<div className="container">
					<h2 className="whtdowdo">WHAT DO WE DO?</h2>
				</div>
			</div>

			<div className="container-fluid groundwater_bg_home">
				<div className="container">
					<div className="">
						<div className="col-md-4">
							<div style={{ textAlign: 'right' }}>
								<img alt="logo" src="../static/images/homepage/whatWeDo1.png" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="grndtext">
								<h3>Groundwater Recharging</h3>
								<p
									style={{
										letterSpacing: '0.1px',
										textAlign: 'left',
										color: '#4c3f43',
										fontSize: '14px',
										fontWeight: '500',
										lineHeight: '26px'
									}}
								>
									We have developed a new method of groundwater recharge, called 'V-wire injection
									well' technology. This allows for the ground water table to be replenished and thus
									abate water scarcity.
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div>
								<img alt="iamegs" src="../static/images/homepage/whatWeDo2.png" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="grndtext">
								<h3 style={{ textAlign: 'right' }}>Rooftop RWH Filters</h3>
								<p
									style={{
										letterSpacing: '0.1px',
										textAlign: 'right',
										color: '#4c3f43',
										fontSize: '14px',
										fontWeight: '500',
										lineHeight: '26px'
									}}
								>
									Rainy Dual Intensity filters work at high efficiency regardless of the intensity of
									rainfall and have self-cleaning abilities. At nominal prices, our filters are market
									leaders in Rooftop RWH.
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div>
								<img src="../static/images/homepage/whatWeDo3.png" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="grndtext">
								<h3>Systems & Solutions</h3>
								<p
									style={{
										letterSpacing: '0.1px',
										textAlign: 'left',
										color: '#4c3f43',
										fontSize: '14px',
										fontWeight: '500',
										lineHeight: '26px'
									}}
								>
									Custom made solutions to suit your building or campus. Our expert engineers will
									help from design to execution of end to end RWH solutions for your facility.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default WhatWeDo;
