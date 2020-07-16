import React, { Fragment } from 'react';

const city = () => {
	return (
		<Fragment>
			<div className="container-fluid alladrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-12 dlrsadrs">
							<h4>Delhi</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{ color: '#0479bf' }}>SHALIMAR ENVIRO (P) LTD</h2>

									<h2>
										Contact Person:-
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											Anjali Mittal
										</span>
									</h2>
									<p>
										# 608, Pearls Business Park<br />
										Netaji Subhash Place<br />
										Pitampura,New Delhi. PIN-110034
									</p>
									<h2>
										Mob:-
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											011-47320444
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
