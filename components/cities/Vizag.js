import React, {Fragment} from "react";

const city = () => {
	return (
		<Fragment>
			<div className="container-fluid alladrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-12 dlrsadrs">
							<h4>Visakhapatnam</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{color: "#0479bf"}}>ANDHRA PRADESH</h2>
									<h2>M/S SAHAJA ASSOCIATES</h2>
									{/* <h2>
										Contact Person:-
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											Nithin Balaji R
										</span>
									</h2> */}
									<p>
										31-57-8/6, G4, Prasanthi Heavens Rajeev Nagar
										<br />
										Kurmannapalem Visakhapatnam - 530 046
										<br />
										Andhrapradesh
									</p>
									<h2>
										Mob:-
										<span
											style={{
												fontWeight: "500",
												fontSize: "14px",
												fontFamily: "sans-serif",
												letterSpacing: "1px",
											}}
										>
											+91 94414 25102 / +91 96424 42018
										</span>
									</h2>
									<h2>
										Email:-{" "}
										<span
											style={{
												fontWeight: "500",
												fontSize: "14px",
												fontFamily: "sans-serif",
												letterSpacing: "1px",
											}}
										>
											sahaja.com@gmail.com
										</span>
									</h2>
								</div>
							</div>
						</div>
					</div>
					<br />
				</div>
			</div>
		</Fragment>
	);
};

export default city;
