import React, {Fragment} from "react";

const city = () => {
	return (
		<Fragment>
			<div className="container-fluid alladrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-12 dlrsadrs">
							<h4>Malabon</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{color: "#0479bf"}}>PHILIPPINES</h2>
									<h2>VERTIGROW SYSTEMS INC.</h2>
									<h2>
										Contact Person:-
										<span
											style={{
												fontWeight: "500",
												fontSize: "14px",
												fontFamily: "sans-serif",
												letterSpacing: "1px",
											}}
										>
											Mr. Nelson Sy Chong
										</span>
									</h2>
									<p>
										15 Liwayway Street,
										<br />
										Acacia , Malabon, Philippines 1474
										<br />
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
											(632)288-4130; (632) 288-1919, +639171670022
										</span>
									</h2>
									<h2>
										Email:-
										<span
											style={{
												fontWeight: "500",
												fontSize: "14px",
												fontFamily: "sans-serif",
												letterSpacing: "1px",
											}}
										>
											jnchong@gmail.com <br />
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
