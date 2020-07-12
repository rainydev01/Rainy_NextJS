import React, { Component } from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />;
}

export default class CustomArrows extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />
		};
		return (
			<div style={{ padding: 10, margin: 40 }}>
				<h2>Custom Arrows</h2>
				<Slider {...settings}>
					<div className="col-md-2">
						<img src="../static/images/clients/BHEL.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/BWSSB.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/Capture.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/Creamline.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/IFFCO.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/infosys-logo-PNG.png" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/IOCL.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/JSW.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/Konkan Railways.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/KUIDFC.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/Mahindra.PNG" />
					</div>
					<div className="col-md-2">
						<img src="../static/images/clients/Wipro.PNG" />
					</div>
				</Slider>
			</div>
		);
	}
}
