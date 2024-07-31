import React, { Fragment } from 'react';

const city = () => {
	return (
		<Fragment>
			<div className="container-fluid alladrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-12 dlrsadrs">
							<h4>Bogota</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{ color: '#0479bf' }}>SOUTH AMERICA</h2>
									<h2>VIC (VALUE INVESTMENTS COLOMBIA)</h2>
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
											Mr.Andres Martinez D
										</span>
									</h2>
									<p>
										Calle 79, B# 7-59, Piso 2,<br />
										Bogota, Coulmbia, South America<br />
										Zipcode - 110221
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
											(57) 317 668 6452, (571) 695 2248
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
											amartinez@vic.com.co <br />
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
