import React, { useState, Fragment } from 'react';
// import Select from 'react-select';
import Dropdown from './DropDown';
// import Bangalore from '../components/cities/Bangalore';
// import Belagavi from '../components/cities/Belagavi';
// import Davangere from '../components/cities/Davangere';
// import Dk from '../components/cities/Dk';
// import Gulbarga from '../components/cities/Gulbarga';
// import Hassan from '../components/cities/Hassan';
// import Mangalore from '../components/cities/Mangalore';
// import Mysore from '../components/cities/Mysore';
// import Anantpur from '../components/cities/Anantpur';
// import Vizag from '../components/cities/Vizag';
// import Guwahati from '../components/cities/Guwahati';
// import Chandigargh from '../components/cities/Chandigarh';
// import Delhi from '../components/cities/Delhi';
// import Kanpur from '../components/cities/Kanpur';
// import Raipur from '../components/cities/Raipur';
// import Vadodara from '../components/cities/Vadodara';
// import Surat from '../components/cities/Surat';
// import Ahmedabad from '../components/cities/Ahmedabad';

import Ahmedabad from '../components/cities/Ahmedabad';
import Ajmer from '../components/cities/Ajmer';
import Amravati from '../components/cities/Amravati';
import Anantpur from '../components/cities/Anantpur';
import Bangalore from '../components/cities/Bangalore';
import Bargarh from '../components/cities/Bargarh';
import Belagavi from '../components/cities/Belagavi';
import Berhampur from '../components/cities/Berhampur';
import Bhubaneswar from '../components/cities/Bhubaneswar';
import Bogota from '../components/cities/Bogota';
import Chandigarh from '../components/cities/Chandigarh';
import Chennai from '../components/cities/Chennai';
import Chhindwara from '../components/cities/Chhindwara';
import Coimbatore from '../components/cities/Coimbatore';
import Davangere from '../components/cities/Davangere';
import Delhi from '../components/cities/Delhi';
import Deopur from '../components/cities/Deopur';
import Dk from '../components/cities/Dk';
import Ernakulam from '../components/cities/Ernakulam';
import Erode from '../components/cities/Erode';
import Faridabad from '../components/cities/Faridabad';
import Gulbarga from '../components/cities/Gulbarga';
import Gurugram from '../components/cities/Gurugram';
import Guwahati from '../components/cities/Guwahati';
import Hassan from '../components/cities/Hassan';
import Hyderabad from '../components/cities/Hyderabad';
import Indore from '../components/cities/Indore';
import Jaipur from '../components/cities/Jaipur';
import Jalandhar from '../components/cities/Jalandhar';
import Jalna from '../components/cities/Jalna';
import Kannur from '../components/cities/Kannur';
import Kanpur from '../components/cities/Kanpur';
import Kasaragod from '../components/cities/Kasaragod';
import Kolhapur from '../components/cities/Kolhapur';
import Kolkatta from '../components/cities/Kolkatta';
import Koraput from '../components/cities/Koraput';
import Kothamangalam from '../components/cities/Kothamangalam';
import Madurai from '../components/cities/Madurai';
import Mangalore from '../components/cities/Mangalore';
import Manipur from '../components/cities/Manipur';
import Mumbai from '../components/cities/Mumbai';
import Mysore from '../components/cities/Mysore';
import Nagpur from '../components/cities/Nagpur';
import Nasik from '../components/cities/Nasik';
import Philippines from '../components/cities/Philippines';
import Pondicherry from '../components/cities/Pondicherry';
import Pune from '../components/cities/Pune';
import Raipur from '../components/cities/Raipur';
import Ranchi from '../components/cities/Ranchi';
import Sambalpur from '../components/cities/Sambalpur';
import Solapur from '../components/cities/Solapur';
import Surat from '../components/cities/Surat';
import Thrissur from '../components/cities/Thrissur';
import Tirupur from '../components/cities/Tirupur';
import Trichy from '../components/cities/Trichy';
import Vadodara from '../components/cities/Vadodara';
import Vidisha from '../components/cities/Vidisha';
import Vizag from '../components/cities/Vizag';

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
