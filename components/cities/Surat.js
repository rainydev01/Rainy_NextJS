import React, {Fragment} from 'react'

const city = () => {
	return (
		<Fragment>
			<div className='container-fluid alladrsmain'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 dlrsadrs'>
							<h4>Surat</h4>
							<div className='col-md-6'>
								<div className='alladrs'>
									<h2 style={{color: '#0479bf'}}>GREENEX CORPORATION</h2>

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
										No.143 Massimo, canal road,
										<br />
										Althan, Surat-395017,
										<br />
										Gujarath.
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
											8980016528
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
											greenexcorporation@gmail.com <br />
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
