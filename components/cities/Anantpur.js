import React, {Fragment} from "react";

const city = () => {
	return (
		<Fragment>
			<div className="container-fluid alladrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-12 dlrsadrs">
							<h4>ANANTHAPURA</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{color: "#0479bf"}}>ANDHRA PRADESH</h2>
									<h2>RAO & ASSOCIATES</h2>
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
											Prathap Rao
										</span>
									</h2>
									<p>
										Lig 164, A.P. Housing Board Colony,
										<br />
										Ananthapura - 275889
										<br />
										Andhra Pradesh Mallapuram district
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
											Mob:- 09393710214
										</span>
									</h2>
									{/* <h2>
										Email:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											varunarainwater@yahoo.com <br />
											varuna.hitech@gmail.com
										</span>
									</h2> */}
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
