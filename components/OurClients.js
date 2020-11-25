import React, {Component} from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
	const {className, style, onClick} = props;
	return (
		<div
			className="slick-arrow-right"
			style={{...style, display: "block"}}
			onClick={onClick}
		>
			<i className="fa fa-chevron-right" aria-hidden="true"></i>
		</div>
	);
}

function SamplePrevArrow(props) {
	const {className, style, onClick} = props;
	return (
		<div
			className="slick-arrow-left"
			style={{...style, display: "block"}}
			onClick={onClick}
		>
			<i className="fa fa-chevron-left" aria-hidden="true"></i>
		</div>
	);
}

export default class CustomArrows extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,

			responsive: [
				{
					breakpoint: 1024,
					settings: {
						dots: false,
						infinite: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						nextArrow: <SampleNextArrow />,
						prevArrow: <SamplePrevArrow />,
					},
				},
				{
					breakpoint: 768,
					settings: {
						dots: false,
						infinite: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						nextArrow: <SampleNextArrow />,
						prevArrow: <SamplePrevArrow />,
					},
				},
				{
					breakpoint: 600,
					settings: {
						dots: false,
						infinite: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						nextArrow: <SampleNextArrow />,
						prevArrow: <SamplePrevArrow />,
					},
				},
			],
		};
		return (
			<div style={{padding: 10, margin: 40}}>
				<div className="container-fluid">
					<div className="container">
						<h2 className="clientsHome">Our Clients</h2>
					</div>
				</div>
				<Slider {...settings}>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/BHEL.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/BWSSB.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/Capture.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/Creamline.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/IFFCO.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/infosys-logo-PNG.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/IOCL.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/JSW.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/Konkan Railways.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/KUIDFC.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/Mahindra.PNG"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/Wipro.PNG"
						/>
					</div>
				</Slider>
			</div>
		);
	}
}
