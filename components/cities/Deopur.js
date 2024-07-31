import React, { Fragment } from 'react';

const city = () => {
	return (
		<Fragment>
			<div className="container-fluid alladrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-12 dlrsadrs">
							<h4>Deopur</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{ color: '#0479bf' }}>MAHARASHTRA</h2>
									<h2>SHREE ELEMENTS</h2>
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
											Mr. Sameer Bahalkar
										</span>
									</h2>
									<p>
										#3947/1, opp to bank of Maharashtra,<br />
										near panchavati tower, old Agra road,<br />
										Deopur, Dhule - 424002
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
											9850941308, 9922828202
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
											info@shreeelements.com, sameer.bahalkar@shreeelements.com <br />
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
