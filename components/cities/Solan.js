import React, {Fragment} from 'react'

const city = () => {
	return (
		<Fragment>
			<div className='container-fluid alladrsmain'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 dlrsadrs'>
							<h4>Solan</h4>
							<div className='col-md-6'>
								<div className='alladrs'>
									<h2 style={{color: '#0479bf'}}>Prachi Enterprises</h2>

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
										Vill Naya Nagar Subathu -Po
										<br />
										Solan – Distt
										<br />
										Himachal Pradesh– 173206
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
											09816302726 / 08894700801
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
											prachienterprisessolan@gmail.com
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
