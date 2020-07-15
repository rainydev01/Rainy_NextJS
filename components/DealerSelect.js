import React, { useState, Fragment } from 'react';
import Select from 'react-select';
import Dropdown from './DropDown';

let countries = {
	countries: [
		{
			name: 'Germany',
			states: [ { name: 'A', cities: [ 'Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn' ] } ]
		},
		{ name: 'Spain', states: [ { name: 'B', cities: [ 'Barcelona' ] } ] },
		{ name: 'USA', states: [ { name: 'C', cities: [ 'Downers Grove' ] } ] },
		{ name: 'Mexico', states: [ { name: 'D', cities: [ 'Puebla' ] } ] },
		{ name: 'India', states: [ { name: 'E', cities: [ 'Delhi', 'Kolkata', 'Mumbai', 'Bangalore' ] } ] }
	]
};

const optionsCountry = [ { value: 1, label: 'India' }, { value: 2, label: 'Africa' }, { value: 3, label: 'Germany' } ];
const optionsState = [ { value: 1, label: 'KA' }, { value: 2, label: 'AP' }, { value: 3, label: 'US' } ];
const optionsCity = [ { value: 1, label: 'Bengaluru' }, { value: 2, label: 'Mysuru' }, { value: 3, label: 'Bidar' } ];

const App = () => {
	const [ selectedOptionCountry, setSelectedOptionCountry ] = useState(null);
	const [ selectedOptionState, setSelectedOptionState ] = useState(null);
	const [ selectedOptionCity, setSelectedOptionCity ] = useState(null);

	const countryHandleChange = (selectedOptionInput) => {
		setSelectedOptionCountry(selectedOptionInput);
		// console.log(`Option selected:`, selectedOption);
	};

	const stateHandleChange = (selectedOptionInput) => {
		setSelectedOptionState(selectedOptionInput);
		// console.log(`Option selected:`, selectedOption);
	};

	const cityHandleChange = (selectedOptionInput) => {
		setSelectedOptionCity(selectedOptionInput);
		// console.log(`Option selected:`, selectedOption);
	};

	return (
		<Fragment>
			<Dropdown />
			{/* <div className="container-fluid dlrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="dlrsinpt">
								<Select
									value={selectedOptionCountry}
									onChange={countryHandleChange}
									options={optionsCountry}
								/>
							</div>
						</div>

						<div className="col-md-4">
							<div className="dlrsinpt">
								<Select
									value={selectedOptionState}
									onChange={stateHandleChange}
									options={optionsState}
								/>
							</div>
						</div>

						<div className="col-md-4">
							<div className="dlrsinpt">
								<Select value={selectedOptionCity} onChange={cityHandleChange} options={optionsCity} />
							</div>
						</div>

						<div className="col-md-12 dlrsbtn">
							<button>Search Dealers</button>
						</div>
					</div>
				</div>
			</div> */}

			<div className="container-fluid alladrsmain">
				<div className="container">
					<div className="row">
						<div className="col-md-12 dlrsadrs">
							<h4>Bangalore</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{ color: '#0479bf' }}>KUMARSWAMI LAYOUT</h2>
									<h2>VARUNA ENTERPRISES</h2>
									<h2>
										Contact Person:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											Nithin Balaji R.
										</span>
									</h2>
									<p>
										#6, Mustafa Building, sharda Nagar<br />
										Vashanthpura Main Road<br />
										Bengaluru - 560061
									</p>
									<h2>
										Mob:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											8050773225
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
											varunarainwater@yahoo.com <br />
											varuna.hitech@gmail.com
										</span>
									</h2>
								</div>
							</div>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{ color: '#0479bf' }}>UDAYNAGAR</h2>
									<h2>VARUNA ENTERPRISES</h2>
									<h2>
										Contact Person:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											Nithin Balaji R.
										</span>
									</h2>
									<p>
										#6, Mustafa Building, sharda Nagar<br />
										Vashanthpura Main Road<br />
										Bengaluru - 560061
									</p>
									<h2>
										Mob:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											8050773225
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
											varunarainwater@yahoo.com <br />
											varuna.hitech@gmail.com{' '}
										</span>
									</h2>
								</div>
							</div>
						</div>

						<div className="col-md-12 dlrsadrs" style={{ marginTop: '45px' }}>
							<h4>Gulbarga</h4>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{ color: '#0479bf' }}>KUMARSWAMI LAYOUT</h2>
									<h2>VARUNA ENTERPRISES</h2>
									<h2>
										Contact Person:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											Nithin Balaji R.
										</span>
									</h2>
									<p>
										#6, Mustafa Building, sharda Nagar<br />
										Vashanthpura Main Road<br />
										Bengaluru - 560061
									</p>
									<h2>
										Mob:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											8050773225
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
											varunarainwater@yahoo.com <br />
											varuna.hitech@gmail.com
										</span>
									</h2>
								</div>
							</div>
							<div className="col-md-6">
								<div className="alladrs">
									<h2 style={{ color: '#0479bf' }}>UDAYNAGAR</h2>
									<h2>VARUNA ENTERPRISES</h2>
									<h2>
										Contact Person:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											Nithin Balaji R.
										</span>
									</h2>
									<p>
										#6, Mustafa Building, sharda Nagar<br />
										Vashanthpura Main Road<br />
										Bengaluru - 560061
									</p>
									<h2>
										Mob:-{' '}
										<span
											style={{
												fontWeight: '500',
												fontSize: '14px',
												fontFamily: 'sans-serif',
												letterSpacing: '1px'
											}}
										>
											8050773225
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
											varunarainwater@yahoo.com <br />
											varuna.hitech@gmail.com
										</span>
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default App;
