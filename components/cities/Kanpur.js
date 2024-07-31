import React, { Fragment } from 'react';

const city = () => {
	return (
		<Fragment>
			<div className="container-fluid alladrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-12 dlrsadrs">
							<h4>Kanpur</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{ color: '#0479bf' }}>SHRADDHA ASSOCIATES</h2>

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
											Anjali Mittal
										</span>
									</h2> */}
									<p>
										No.55 ,Tulsi Nagar, Shyam Nagar<br />
										Kanpur – 208015<br />
										Uttar Pradesh
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
											6394288843 /9792201233 /9559993969
										</span>
									</h2>
									<h2>
										Email:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											manoj_mini@hotmail.com <br />
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
