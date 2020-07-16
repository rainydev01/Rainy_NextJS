import React, { useState, Fragment } from 'react';
import Select from 'react-select';
import Dropdown from './DropDown';
import Bangalore from '../components/cities/bangalore';

const App = () => {
	const [ selectedCity, setSelectedCity ] = useState(null);

	let dealersCity = null;

	const changeCity = (city) => {
		setSelectedCity(city);
		console.log(`HEllo ${city}`);
	};

	if (selectedCity === 'BANGALORE') {
		dealersCity = <Bangalore />;
	}

	return (
		<Fragment>
			<Dropdown changeCityValue={changeCity} />
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

			{dealersCity}
		</Fragment>
	);
};

export default App;
