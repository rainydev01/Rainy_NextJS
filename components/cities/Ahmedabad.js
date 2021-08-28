import React, {Fragment} from 'react'

const city = () => {
	return (
		<Fragment>
			<div className='container-fluid alladrsmain'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 dlrsadrs'>
							<h4>Ahmedabad</h4>
							<div className='col-md-6'>
								<div className='alladrs'>
									<h2 style={{color: '#0479bf'}}>VARDHMAN ENVIRO TECH</h2>

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
										605, Sears Tower,
										<br />
										Nr. Patel Society Gate,
										<br />
										Panchvati to Gulbai Tekra Road, Ahmedabad - 380006
									</p>
									<h2>
										Mob:-
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px',
											}}
										>
											+917490007599/+919537977599
										</span>
									</h2>
									<h2>
										Email:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px',
											}}
										>
											hi@vardhmanenvirotech.com
											<br />
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
	)
}

export default city
