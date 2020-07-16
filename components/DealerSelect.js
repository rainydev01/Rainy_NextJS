import React, { useState, Fragment } from 'react';
import Select from 'react-select';
import Dropdown from './DropDown';
import Bangalore from '../components/cities/Bangalore';
import Belagavi from '../components/cities/Belagavi';
import Davangere from '../components/cities/Davangere';
import Dk from '../components/cities/Dk';
import Gulbarga from '../components/cities/Gulbarga';
import Hassan from '../components/cities/Hassan';
import Mangalore from '../components/cities/Mangalore';
import Mysore from '../components/cities/Mysore';
import Anantpur from '../components/cities/Anantpur';
import Vizag from '../components/cities/Vizag';
import Guwahati from '../components/cities/Guwahati';
import Chandigargh from '../components/cities/Chandigarh';
import Delhi from '../components/cities/Delhi';
import Kanpur from '../components/cities/Kanpur';
import Raipur from '../components/cities/Raipur';
import Vadodara from '../components/cities/Vadodara';
import Surat from '../components/cities/Surat';
import Ahmedabad from '../components/cities/Ahmedabad';

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
	if (selectedCity === 'BELAGAVI') {
		dealersCity = <Belagavi />;
	}
	if (selectedCity === 'DAVANGERE') {
		dealersCity = <Davangere />;
	}
	if (selectedCity === 'DAKSHINA KARNATAKA') {
		dealersCity = <Dk />;
	}
	if (selectedCity === 'GULBARGA') {
		dealersCity = <Gulbarga />;
	}
	if (selectedCity === 'HASSAN') {
		dealersCity = <Hassan />;
	}
	if (selectedCity === 'MANGALORE') {
		dealersCity = <Mangalore />;
	}
	if (selectedCity === 'MYSORE') {
		dealersCity = <Mysore />;
	}
	if (selectedCity === 'ANANTHAPURA') {
		dealersCity = <Anantpur />;
	}
	if (selectedCity === 'VISHAKAPATNAM') {
		dealersCity = <Vizag />;
	}
	if (selectedCity === 'GUWAHATI') {
		dealersCity = <Guwahati />;
	}
	if (selectedCity === 'CHANDIGRAH') {
		dealersCity = <Chandigargh />;
	}
	if (selectedCity === 'DELHI') {
		dealersCity = <Delhi />;
	}
	if (selectedCity === 'KANPUR') {
		dealersCity = <Kanpur />;
	}
	if (selectedCity === 'RAIPUR') {
		dealersCity = <Raipur />;
	}
	if (selectedCity === 'VADODARA') {
		dealersCity = <Vadodara />;
	}
	if (selectedCity === 'AHMEDABAD') {
		dealersCity = <Ahmedabad />;
	}
	if (selectedCity === 'SURAT') {
		dealersCity = <Surat />;
	}

	return (
		<Fragment>
			<Dropdown changeCityValue={changeCity} />

			{dealersCity}
		</Fragment>
	);
};

export default App;
