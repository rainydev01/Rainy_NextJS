import React, {Fragment} from "react";
import Link from "next/link";

const Banner = () => {
	return (
		<Fragment>
			<div className="container-fluid banner bannrhome">
				<div className="hero-image">
					<img src="../static/images/homepage/WebsiteBanner.jpg" alt="Banner" />
					<div className="hero-text">
						<h1 style={{color: "white"}}>RAINWATER HARVESTING</h1>
						<p style={{color: "white"}}>
							Do you harvest rainwater? Start today!
						</p>

						<Link href="/products/rainy-filters">
							<a>
								<button>Learn More</button>
							</a>
						</Link>

						<Link href="/contact-us/enquire">
							<a>
								<button style={{marginLeft: 20}}>Enquire Now</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Banner;
