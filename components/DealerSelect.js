import React, { useState, Fragment } from "react";
// import Select from 'react-select';
import Dropdown from "./DropDown";
import Bengaluru from "./cities/Bengaluru";
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

import Ahmedabad from "../components/cities/Ahmedabad";
import Ajmer from "../components/cities/Ajmer";
import Amravati from "../components/cities/Amravati";
import Anantpur from "../components/cities/Anantpur";
// import Bangalore from '../components/cities/Bangalore';
import Bargarh from "../components/cities/Bargarh";
import Belagavi from "../components/cities/Belagavi";
import Berhampur from "../components/cities/Berhampur";
import Bhubaneswar from "../components/cities/Bhubaneswar";
import Bogota from "../components/cities/Bogota";
import Chandigarh from "../components/cities/Chandigarh";
import Chennai from "../components/cities/Chennai";
import Chhindwara from "../components/cities/Chhindwara";
import Coimbatore from "../components/cities/Coimbatore";
import Davangere from "../components/cities/Davangere";
import Delhi from "../components/cities/Delhi";
import Deopur from "../components/cities/Deopur";
import Dk from "../components/cities/Dk";
import Ernakulam from "../components/cities/Ernakulam";
import Erode from "../components/cities/Erode";
import Faridabad from "../components/cities/Faridabad";
import Gulbarga from "../components/cities/Gulbarga";
import Gurugram from "../components/cities/Gurugram";
import Guwahati from "../components/cities/Guwahati";
import Hassan from "../components/cities/Hassan";
import Hyderabad from "../components/cities/Hyderabad";
import Indore from "../components/cities/Indore";
import Jaipur from "../components/cities/Jaipur";
import Jalandhar from "../components/cities/Jalandhar";
import Jalna from "../components/cities/Jalna";
import Kannur from "../components/cities/Kannur";
import Kanpur from "../components/cities/Kanpur";
import Kasaragod from "../components/cities/Kasaragod";
import Kolhapur from "../components/cities/Kolhapur";
import Kolkatta from "../components/cities/Kolkatta";
import Koraput from "../components/cities/Koraput";
import Kothamangalam from "../components/cities/Kothamangalam";
import Madurai from "../components/cities/Madurai";
import Mangalore from "../components/cities/Mangalore";
import Manipur from "../components/cities/Manipur";
import Mumbai from "../components/cities/Mumbai";
import Mysore from "../components/cities/Mysore";
import Nagpur from "../components/cities/Nagpur";
import Nasik from "../components/cities/Nasik";
import Philippines from "../components/cities/Philippines";
import Pondicherry from "../components/cities/Pondicherry";
import Pune from "../components/cities/Pune";
import Raipur from "../components/cities/Raipur";
import Ranchi from "../components/cities/Ranchi";
import Sambalpur from "../components/cities/Sambalpur";
import Solapur from "../components/cities/Solapur";
import Surat from "../components/cities/Surat";
import Thrissur from "../components/cities/Thrissur";
import Tirupur from "../components/cities/Tirupur";
import Trichy from "../components/cities/Trichy";
import Vadodara from "../components/cities/Vadodara";
import Vidisha from "../components/cities/Vidisha";
import Vizag from "../components/cities/Vizag";
import Udupi from "../components/cities/Udupi";
import Chikballapur from "../components/cities/Chikballapur";
import Tumkur from "../components/cities/Tumkur";
import Dahod from "../components/cities/Dahod";
import Rajkot from "../components/cities/Rajkot";
import Solan from "../components/cities/Solan";
import Dabolim from "../components/cities/Dabolim";
import Cochin from "../components/cities/Cochin";
import Agra from "../components/cities/Agra";
import Ujjain from "../components/cities/Ujjain";
import Thane from "../components/cities/Thane";
import Calicut from "../components/cities/Calicut";
import Honnavar from "./cities/Honnavar";
import Jamshedpur from "./cities/Jamshedpur";
import Villanueva from "./cities/Villanueva";
const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  let dealersCity = null;

  const changeCity = (city) => {
    setSelectedCity(city);
  };

  if (selectedCity === "BANGALORE") {
    dealersCity = <Bengaluru />;
  }
  if (selectedCity === "BELAGAVI") {
    dealersCity = <Belagavi />;
  }
  if (selectedCity === "DAVANGERE") {
    dealersCity = <Davangere />;
  }
  if (selectedCity === "DAKSHINA KARNATAKA") {
    dealersCity = <Dk />;
  }
  if (selectedCity === "GULBARGA") {
    dealersCity = <Gulbarga />;
  }
  if (selectedCity === "HONNAVAR") {
    dealersCity = <Honnavar />;
  }
  if (selectedCity === "HASSAN") {
    dealersCity = <Hassan />;
  }
  if (selectedCity === "MANGALORE") {
    dealersCity = <Mangalore />;
  }
  if (selectedCity === "MYSORE") {
    dealersCity = <Mysore />;
  }
  if (selectedCity === "ANANTHAPURA") {
    dealersCity = <Anantpur />;
  }
  if (selectedCity === "VISHAKAPATNAM") {
    dealersCity = <Vizag />;
  }
  if (selectedCity === "GUWAHATI") {
    dealersCity = <Guwahati />;
  }
  if (selectedCity === "CHANDIGRAH") {
    dealersCity = <Chandigarh />;
  }
  if (selectedCity === "DELHI") {
    dealersCity = <Delhi />;
  }
  if (selectedCity === "KANPUR") {
    dealersCity = <Kanpur />;
  }
  if (selectedCity === "RAIPUR") {
    dealersCity = <Raipur />;
  }
  if (selectedCity === "VADODARA") {
    dealersCity = <Vadodara />;
  }
  if (selectedCity === "AHMEDABAD") {
    dealersCity = <Ahmedabad />;
  }
  if (selectedCity === "SURAT") {
    dealersCity = <Surat />;
  }

  if (selectedCity === "ERNAKULAM") {
    dealersCity = <Ernakulam />;
  }
  if (selectedCity === "CALICUT") {
    dealersCity = <Calicut />;
  }
  if (selectedCity === "KASARGOD") {
    dealersCity = <Kasaragod />;
  }
  if (selectedCity === "THRISSUR") {
    dealersCity = <Thrissur />;
  }
  if (selectedCity === "KOTHAMANGALAM") {
    dealersCity = <Kothamangalam />;
  }
  if (selectedCity === "KANNUR") {
    dealersCity = <Kannur />;
  }

  if (selectedCity === "KOLKATTA") {
    dealersCity = <Kolkatta />;
  }

  if (selectedCity === "NAGPUR") {
    dealersCity = <Nagpur />;
  }
  if (selectedCity === "KOLHAPUR") {
    dealersCity = <Kolhapur />;
  }
  if (selectedCity === "MUMBAI") {
    dealersCity = <Mumbai />;
  }
  if (selectedCity === "THANE") {
    dealersCity = <Thane />;
  }
  if (selectedCity === "DEOPUR") {
    dealersCity = <Deopur />;
  }
  if (selectedCity === "PUNE") {
    dealersCity = <Pune />;
  }
  if (selectedCity === "AMRAVATI") {
    dealersCity = <Amravati />;
  }
  if (selectedCity === "SOLAPUR") {
    dealersCity = <Solapur />;
  }
  if (selectedCity === "NASIK") {
    dealersCity = <Nasik />;
  }
  if (selectedCity === "JALNA") {
    dealersCity = <Jalna />;
  }

  if (selectedCity === "CHHINDWARA") {
    dealersCity = <Chhindwara />;
  }
  if (selectedCity === "VIDISHA") {
    dealersCity = <Vidisha />;
  }
  if (selectedCity === "INDORE") {
    dealersCity = <Indore />;
  }

  if (selectedCity === "MANIPUR") {
    dealersCity = <Manipur />;
  }
  if (selectedCity === "KORAPUT") {
    dealersCity = <Koraput />;
  }
  if (selectedCity === "BERHAMPUR") {
    dealersCity = <Berhampur />;
  }
  if (selectedCity === "BHUBANESWAR") {
    dealersCity = <Bhubaneswar />;
  }
  if (selectedCity === "BARGARH") {
    dealersCity = <Bargarh />;
  }
  if (selectedCity === "SAMBALPUR") {
    dealersCity = <Sambalpur />;
  }

  if (selectedCity === "AJMER") {
    dealersCity = <Ajmer />;
  }
  if (selectedCity === "JAIPUR") {
    dealersCity = <Jaipur />;
  }
  if (selectedCity === "HYDERABAD") {
    dealersCity = <Hyderabad />;
  }

  if (selectedCity === "CHENNAI") {
    dealersCity = <Chennai />;
  }
  if (selectedCity === "COIMBATORE") {
    dealersCity = <Coimbatore />;
  }
  if (selectedCity === "ERODE") {
    dealersCity = <Erode />;
  }
  if (selectedCity === "PONDICHERRY") {
    dealersCity = <Pondicherry />;
  }
  if (selectedCity === "TRICHY") {
    dealersCity = <Trichy />;
  }
  if (selectedCity === "TIRUPUR") {
    dealersCity = <Tirupur />;
  }
  if (selectedCity === "MADURAI") {
    dealersCity = <Madurai />;
  }

  if (selectedCity === "FARIDABAD") {
    dealersCity = <Faridabad />;
  }
  if (selectedCity === "JALANDHAR") {
    dealersCity = <Jalandhar />;
  }
  if (selectedCity === "GURUGRAM") {
    dealersCity = <Gurugram />;
  }
  if (selectedCity === "RANCHI") {
    dealersCity = <Ranchi />;
  }

  if (selectedCity === "MALABON") {
    dealersCity = <Philippines />;
  }
  if (selectedCity === "BOGOTA") {
    dealersCity = <Bogota />;
  }
  if (selectedCity === "UDUPI") {
    dealersCity = <Udupi />;
  }

  if (selectedCity === "CHIKBALLAPUR") {
    dealersCity = <Chikballapur></Chikballapur>;
  }

  if (selectedCity === "TUMKUR") {
    dealersCity = <Tumkur></Tumkur>;
  }

  if (selectedCity === "DAHOD") {
    dealersCity = <Dahod></Dahod>;
  }
  if (selectedCity === "RAJKOT") {
    dealersCity = <Rajkot></Rajkot>;
  }
  if (selectedCity === "SOLAN") {
    dealersCity = <Solan></Solan>;
  }
  if (selectedCity === "DABOLIM") {
    dealersCity = <Dabolim></Dabolim>;
  }

  if (selectedCity === "COCHIN") {
    dealersCity = <Cochin></Cochin>;
  }
  if (selectedCity === "AGRA") {
    dealersCity = <Agra></Agra>;
  }
  if (selectedCity === "UJJAIN") {
    dealersCity = <Ujjain></Ujjain>;
  }
  if (selectedCity === "JAMSHEDPUR") {
    dealersCity = <Jamshedpur />;
  }
  if (selectedCity === "VILLANUEVA") {
    dealersCity = <Villanueva />;
  }

  return (
    <Fragment>
      <Dropdown changeCityValue={changeCity} />

      {dealersCity}
    </Fragment>
  );
};

export default App;
