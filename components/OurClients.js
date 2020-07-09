import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';

let list = [ { name: 'item1' }, { name: 'item2' }, { name: 'item3' }, { name: 'item4' }, { name: 'item5' } ];

const MenuItem = ({ text, selected }) => {
	return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

export const Menu = (list, selected) =>
	list.map((el) => {
		const { name } = el;

		return <MenuItem text={name} key={name} selected={selected} />;
	});

const Arrow = ({ text, className }) => {
	return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
const selected = 'item1';

class App extends Component {
	constructor(props) {
		super(props);
		// call it again if items count changes
		this.menuItems = Menu(list, selected);
	}

	state = {
		selected
	};

	onSelect = (key) => {
		this.setState({ selected: key });
	};

	render() {
		const { selected } = this.state;
		// Create menu from items
		const menu = this.menuItems;

		return (
			<div className="App">
				<ScrollMenu
					data={menu}
					arrowLeft={ArrowLeft}
					arrowRight={ArrowRight}
					selected={selected}
					onSelect={this.onSelect}
					wheel={false}
				/>
			</div>
		);
	}
}
export default App;
