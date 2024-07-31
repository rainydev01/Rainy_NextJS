import React, {Fragment} from "react";

const AboutUs = () => {
	return (
		<Fragment>
			<div
				className="container-fluid"
				style={{
					backgroundImage: "url(../static/images/homepage/ddropsbg.png)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "top left",
				}}
			>
				<div className="container" style={{marginBottom: "35px"}}>
					<div className="abou-home-heading">
						<h1>Rainwater harvesting system in India</h1>
					</div>

					<div className="about-home">
						<div className="about-content">
							<p style={{fontSize: 16}}>
								Farmland Rain Water Harvesting Systems (FLRWHS), founded in
								2002, aimed at end to end solutions for installations of
								rainwater harvesting systems including patented products and
								ongoing R&D.
							</p>
							<p className="bullet" style={{fontSize: 16}}>
								<ul className="bullet">
									<li className="bullet">
										&#9679; Our mission statement is to conserve every drop of
										rainwater by using continuous innovation.
									</li>
									<li>
										&#9679; Giving back to nature and reducing our carbon
										footprint for a greener tomorrow is at the core of
										everything we do.
									</li>
									<li>
										&#9679; We are building scientifically engineered systems of
										Rain Water Harvesting, which will enable customers with
										economical, high quality and easy to maintain products.
									</li>
									<li>
										&#9679; We pride ourselves in having our own research
										facility, which has our Hydraulic Testing Lab equipped with
										the latest machinery.
									</li>
									<li>
										&#9679; Our widespread dealer network spanning over 11
										countries with highly trained field service engineers are
										always available to solve every query.
									</li>
								</ul>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default AboutUs;
