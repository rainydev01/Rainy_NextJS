import React, { Fragment } from 'react';

const city = () => {
	return (
		<Fragment>
			<div className="container-fluid alladrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-12 dlrsadrs">
							<h4>Gurugram</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{ color: '#0479bf' }}>GURGAON</h2>
									<h2>ECOLIVE VENTURES PRIVATE LIMITED</h2>
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
											Mr.Sunil Kumar Pachar/ Makrand Singh
										</span>
									</h2>
									<p>
										272, GF, Sector 38,<br />
										Gurugram-122001<br />
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
											9871472211, 9587227777
										</span>
									</h2>
									<h2>
										Email:-
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											makrand.singh@ecolive.in, sunil.pachar@ecolive.in <br />
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
