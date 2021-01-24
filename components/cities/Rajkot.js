import React, {Fragment} from 'react'

const city = () => {
	return (
		<Fragment>
			<div className='container-fluid alladrsmain'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 dlrsadrs'>
							<h4>Rajkot</h4>
							<div className='col-md-6'>
								<div className='alladrs'>
									<h2 style={{color: '#0479bf'}}>Jyoti Enterprises</h2>

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
										Bhagyalaxmi Industrial Estate,
										<br />
										Plot No: 36B ,Bhavnagar Road,
										<br />
										Rajkot – 360003, Gujrat <br />
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
											09033419894
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
											jyotienterprises@gmail.com
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
