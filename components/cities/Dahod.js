import React, {Fragment} from 'react'

const city = () => {
	return (
		<Fragment>
			<div className='container-fluid alladrsmain'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 dlrsadrs'>
							<h4>Dahod</h4>
							<div className='col-md-6'>
								<div className='alladrs'>
									<h2 style={{color: '#0479bf'}}>Shankar Vijay Enterprise</h2>

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
										#432/17/2A, Shankar Meg Store Road,
										<br />
										Dahod-389151, Gujarat
										<br />
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
											9979340024 / 8160181883
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
											mannmakhijani@gmail.com
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
