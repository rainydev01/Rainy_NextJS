import React, { Fragment } from 'react';

const Banner = () => {
	return (
		<Fragment>
			<div className="container-fluid banner bannrhome">
				<div className="hero-image">
					<img src="../static/images/homepage/HomeBanner.jpg" alt="Banner" />
					<div className="hero-text">
						<h1 style={{color: "white", paddingLeft:"45px"}}>RAINWATER HARVESTING</h1>
						<p style={{color: "white"}}>Do you harvest rainwater? Start today!</p>
						<button>Learn More</button>
						<button>Enquire Now</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Banner;
