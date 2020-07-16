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

			{dealersCity}
		</Fragment>
	);
};

export default App;
