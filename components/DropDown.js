import React from 'react';

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
			selectedCountry: '--Choose Country--',
			selectedState: '--Choose State--',
			selectedCity: '--Choose City--'
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
					name: 'India',
					states: [
						{
							name: 'KARNATAKA',
							cities: [
								'BANGALORE',
								'GULBARGA',
								'DAKSHINA KARNATAKA',
								'MYSORE',
								'HASSAN',
								'MANGALORE',
								'DAVANGERE',
								'BELAGAVI'
							]
						},
						{
							name: 'ANDRAPRADESH',
							cities: [ 'ANANTHAPURA', 'VISHAKAPATNAM' ]
						},
						{
							name: 'ASSAM',
							cities: [ 'GUWAHATI' ]
						}
					]
				},
				{ name: 'Africa', states: [ { name: 'B', cities: [ 'Barcelona' ] } ] },
				{ name: 'Germany', states: [ { name: 'C', cities: [ 'Downers Grove' ] } ] },
				{ name: 'Mexico', states: [ { name: 'D', cities: [ 'Puebla' ] } ] },
				{ name: 'USA', states: [ { name: 'E', cities: [ 'Delhi', 'Kolkata', 'Mumbai', 'Bangalore' ] } ] }
			]
		});
	}

	changeCountry(event) {
		this.setState({ selectedCountry: event.target.value });
		this.setState({ states: this.state.countries.find((cntry) => cntry.name === event.target.value).states });
	}

	changeState(event) {
		this.setState({ selectedState: event.target.value });
		const stats = this.state.countries.find((cntry) => cntry.name === this.state.selectedCountry).states;
		this.setState({ cities: stats.find((stat) => stat.name === event.target.value).cities });
	}

	changeCity(event) {
		this.setState({ selectedCity: event.target.value });
		this.changeCityValue(event.target.value);
	}

	render() {
		return (
			<div className="container-fluid dlrsmain">
				<div className="row">
					<div className="col-md-4">
						<div className="dlrsinpt">
							<select
								placeholder="Country"
								value={this.state.selectedCountry}
								onChange={this.changeCountry}
							>
								<option>--Choose Country--</option>
								{this.state.countries.map((e, key) => {
									return <option key={key}>{e.name}</option>;
								})}
							</select>
						</div>
					</div>
					<div className="col-md-4 dlrsinpt">
						<select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
							<option>--Choose State--</option>
							{this.state.states.map((e, key) => {
								return <option key={key}>{e.name}</option>;
							})}
						</select>
					</div>
					<div className="col-md-4 dlrsinpt">
						<select placeholder="City" value={this.state.selectedCity} onChange={this.changeCity}>
							<option>--Choose City--</option>
							{this.state.cities.map((e, key) => {
								return <option key={key}>{e}</option>;
							})}
						</select>
					</div>
				</div>
			</div>
		);
	}
}

export default Dropdown;
