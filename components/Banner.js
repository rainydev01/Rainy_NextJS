import React, {Fragment} from "react";

const Banner = () => {
	return (
		<Fragment>
			<div className="container-fluid banner bannrhome">
				<div className="hero-image">
					<img
						src="../static/images/homepage/MainBanner_Final.jpg"
						alt="Banner"
					/>
					<div className="hero-text">
						<h1 style={{color: "white"}}>
							RAINY WATER HARVESTING
						</h1>
						<p style={{color: "white"}}>
							Do you harvest rainwater? Start today!
						</p>
						<button>Learn More</button>
						<button style={{marginLeft: 20}}>Enquire Now</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Banner;
