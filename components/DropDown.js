import React from "react";

class Dropdown extends React.Component {
  changeCityValue = (city) => {
    this.props.changeCityValue(city);
  };
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "Choose Country",
      selectedState: "Choose State",
      selectedCity: "Choose City",
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeCityValue = this.changeCityValue.bind(this);
  }

  componentDidMount() {
    this.setState({
      countries: [
        {
          name: "INDIA",
          states: [
            {
              name: "KARNATAKA",
              cities: [
                "BANGALORE",
                "GULBARGA",
                "HONNAVAR",
                "DAKSHINA KARNATAKA",
                "MYSORE",
                "HASSAN",
                "MANGALORE",
                "DAVANGERE",
                "BELAGAVI",
                "UDUPI",
                "CHIKBALLAPUR",
                "TUMKUR",
              ],
            },
            {
              name: "ANDHRA PRADESH",
              cities: ["ANANTHAPURA", "VISHAKAPATNAM"],
            },
            {
              name: "ASSAM",
              cities: ["GUWAHATI"],
            },
            {
              name: "CHANDIGRAH",
              cities: ["CHANDIGRAH"],
            },
            {
              name: "DELHI",
              cities: ["DELHI"],
            },
            {
              name: "UTTAR PRADESH",
              cities: ["KANPUR", "AGRA"],
            },
            {
              name: "CHATTISGARH",
              cities: ["RAIPUR"],
            },
            {
              name: "GUJARAT",
              cities: ["VADODARA", "AHMEDABAD", "SURAT", "DAHOD", "RAJKOT"],
            },
            {
              name: "KERALA",
              cities: [
                "ERNAKULAM",
                "KASARGOD",
                "THRISSUR",
                "CALICUT",
                "KOTHAMANGALAM",
                "KANNUR",
                "COCHIN",
              ],
            },
            {
              name: "WEST BENGAL",
              cities: ["KOLKATTA"],
            },
            {
              name: "MAHARASTRA",
              cities: [
                "NAGPUR",
                "KOLHAPUR",
                "MUMBAI",
                "THANE",
                "DEOPUR",
                "PUNE",
                "AMRAVATI",
                "SOLAPUR",
                "NASIK",
                "JALNA",
              ],
            },
            {
              name: "MADHYA PRADESH",
              cities: ["CHHINDWARA", "VIDISHA", "INDORE", "UJJAIN"],
            },
            {
              name: "MANIPUR",
              cities: ["MANIPUR"],
            },
            {
              name: "ORISSA",
              cities: [
                "KORAPUT",
                "BERHAMPUR",
                "BHUBANESWAR",
                "BARGARH",
                "SAMBALPUR",
              ],
            },
            {
              name: "RAJASTHAN",
              cities: ["AJMER", "JAIPUR"],
            },
            {
              name: "TELANGANA",
              cities: ["HYDERABAD"],
            },
            {
              name: "TAMILNADU",
              cities: [
                "CHENNAI",
                "COIMBATORE",
                "ERODE",
                "PONDICHERRY",
                "TRICHY",
                "TIRUPUR",
                "MADURAI",
              ],
            },
            {
              name: "HARYANA",
              cities: ["FARIDABAD"],
            },
            {
              name: "PUNJAB",
              cities: ["JALANDHAR"],
            },
            {
              name: "GURUGRAM",
              cities: ["GURUGRAM"],
            },
            {
              name: "JHARKAND",
              cities: ["RANCHI", "JAMSHEDPUR"],
            },
            {
              name: "HIMACHAL PRADESH",
              cities: ["SOLAN"],
            },
            {
              name: "GOA",
              cities: ["DABOLIM"],
            },
          ],
        },
        {
          name: "PHILIPINNES",
          states: [{ name: "MANILA", cities: ["MALABON"] }],
        },
        {
          name: "SOUTH AMERICA",
          states: [{ name: "COLUMBIA", cities: ["BOGOTA"] }],
        },
        {
          name: "CENTRAL AMERICA",
          states: [{ name: "GUATEMALA", cities: ["VILLANUEVA"] }],
        },
      ],
    });
  }

  changeCountry(event) {
    this.setState({ selectedCountry: event.target.value });
    this.setState({
      states: this.state.countries.find(
        (cntry) => cntry.name === event.target.value
      ).states,
    });
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value });
    const stats = this.state.countries.find(
      (cntry) => cntry.name === this.state.selectedCountry
    ).states;
    this.setState({
      cities: stats.find((stat) => stat.name === event.target.value).cities,
    });
  }

  changeCity(event) {
    this.setState({ selectedCity: event.target.value });
    this.changeCityValue(event.target.value);
  }

  render() {
    return (
      <div className="container-fluid" style={{ background: "#f0f9fd" }}>
        <div className="container dlrsmain">
          <div className="row">
            <div className="col-md-4">
              <div className="dlrsinpt">
                <select
                  placeholder="Country"
                  value={this.state.selectedCountry}
                  onChange={this.changeCountry}
                >
                  <option>Choose Country</option>
                  {this.state.countries.map((e, key) => {
                    return <option key={key}>{e.name}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4 dlrsinpt">
              <select
                placeholder="State"
                value={this.state.selectedState}
                onChange={this.changeState}
              >
                <option>Choose State</option>
                {this.state.states.map((e, key) => {
                  return <option key={key}>{e.name}</option>;
                })}
              </select>
            </div>
            <div className="col-md-4 dlrsinpt">
              <select
                placeholder="City"
                value={this.state.selectedCity}
                onChange={this.changeCity}
              >
                <option>Choose City</option>
                {this.state.cities.map((e, key) => {
                  return <option key={key}>{e}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
