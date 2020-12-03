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
							src="../static/images/clients/031ab1329da9a72190cacb119eed906a.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/1024px-ABB_logo.svg.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/1105810932036023789.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/1200px-Aditya_Birla_Fashion_and_Retail.svg.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/1200px-BMW.svg.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/bbmpcrscam.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/bwssb.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/cropped-bnk-logo.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/download-2.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/download.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/e72da8c79f1093fe1662d33a6664457d.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/Goodrich_logo.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/IFFCO-MD-Scholarship.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/JSW_Group_logo.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/KRIDL-Recruitment.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/KUWSDB.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/L29130MH1961PLC011980.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/RDPR-Karnataka-Recruitment-2020.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/teri-logo.png"
						/>
					</div>
					<div className="col-md-2">
						<img
							height="90"
							width="200"
							src="../static/images/clients/unnamed.png"
						/>
					</div>
				</Slider>
			</div>
		);
	}
}
