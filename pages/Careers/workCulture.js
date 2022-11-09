import React, {Fragment} from "react";

const WorkCulture = () => {
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
				<div className="container" style={{marginBottom: "35px" , marginTop:"35px"}}>
					<div className="abou-home-heading">
						<h2>Work Culture And Campus</h2>
					</div>

					<div className="about-home">
						<div className="about-content">
						
							<p className="bullet" style={{fontSize: 16}}>
								<ul className="bullet">
								<li className="bullet">
										&#9679; Ulra-modern and sophisticated working environment with green spaces.
									</li>
									<li className="bullet">
										&#9679; Good learning for career development.
									</li>
									<li>
										&#9679; Transportation facilities (staff Bus).
									</li>
									<li>
										&#9679; Canteen facility(lunch,snacks,beverages etc. will be provided by the company)
									</li>
									<li>
										&#9679; Direct contact with the directors.
									</li>
									<li>
										&#9679; Periodic increase in the salary structure.
									</li>
                                    <li>
										&#9679; Egalitarian work culture.
									</li>
                                    <li>
										&#9679; International exposure.
									</li>
                                    <li>
										&#9679; Oppurtunity to be part of a company thath works in the direction of sustainability and environment protection.
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

export default WorkCulture;
