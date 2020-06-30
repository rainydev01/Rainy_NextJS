import React, { Fragment } from 'react';

const Banner = () => {
	return (
		<Fragment>
			<div className="container-fluid banner">
				<div className="hero-image">
					<img src="../static/images/HomePageBanner.png" alt="Banner" />
					<div className="hero-text">
						<h1>SED DIAM MONUMY</h1>
						<p>Lorum ipsum color sit amet</p>
						<button>Lorum ipsum</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Banner;
