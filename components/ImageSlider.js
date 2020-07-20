import React, {Component, Fragment} from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
	const {className, style, onClick} = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "#0971b7",
				padding: "10px 30px 30px 10px",
				borderRadius: "30px",
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const {className, style, onClick} = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "#0971b7",
				padding: "10px 30px 30px 10px",
				borderRadius: "30px",
			}}
			onClick={onClick}
		/>
	);
}

export default class CustomArrows extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		};
		return (
			<Fragment>
				<div className="container-fluid award">
					<h1>OUR AWARDS</h1>
				</div>
				<div>
					<Slider {...settings}>
						<div className="container-fluid award-image">
							<div className="container awrdimgsec text-center">
								<img
									className="rounded mx-auto d-block"
									src="../../static/images/media/Aqua-Foundation-2017.jpg"
								/>
								<div className="awrdimgcont">
									<h3>
										In the year 2017 honoured with National award by Aqua
										Foundations as Aqua Foundation Excellence Award 2017 under
										the category of Industrial Excellence in development of
										Technology in the Field of Rainwater Harvesting
									</h3>
								</div>
							</div>
						</div>
						<div className="container-fluid award-image">
							<div className="container awrdimgsec ">
								<img
									className="rounded mx-auto d-block"
									src="../../static/images/media/Earth-care-2014.jpg"
								/>
								<div className="awrdimgcont">
									<h3>
										In the year 2014 International award from JSW – The Times of
										India “Earth Care Awarded for the Innovative FL-V Wire
										Injection Well Technology in the Category of `Innovation for
										Climate Protection’.
									</h3>
								</div>
							</div>
						</div>
						<div className="container-fluid award-image">
							<div className="container awrdimgsec">
								<img
									className="rounded mx-auto d-block"
									src="../../static/images/media/Earthcare-2010.jpg"
								/>
								<div className="awrdimgcont">
									<h3>
										in the year 2010 International Award from JSW – The Times of
										India as “Earth Care Award for Innovation for climate
										protection” for the Invention of `Rainy’ - Self-cleaning
										Auto Flush Out Filters.
									</h3>
								</div>
							</div>
						</div>
						<div className="container-fluid award-image">
							<div className="container awrdimgsec">
								<img
									className="rounded mx-auto d-block"
									src="../../static/images/media/National-Award--by-CII--2009.jpg"
								/>
								<div className="awrdimgcont">
									<h3>
										National Award for Excellence in Water Management (2009),
										under -the most Innovative Water Saving Product (Rainy
										Filters), by Confederation of Indian Industry (CII).
									</h3>
								</div>
							</div>
						</div>
						<div className="container-fluid award-image">
							<div className="container awrdimgsec">
								<img
									className="rounded mx-auto d-block"
									src="../../static/images/media/SKOCH--order-of-merit-among-100-SMES--2018.jpg"
								/>
								<div className="awrdimgcont">
									<h3>
										In the year 2018 SKOCH Group-New Delhi awarded `Rainy
										‘Filters - SKOCH ORDER of –Merit for qualifying amongst
										TOP-100 SMES in India
									</h3>
								</div>
							</div>
						</div>
						<div className="container-fluid award-image">
							<div className="container awrdimgsec">
								<img
									className="rounded mx-auto d-block"
									src="../../static/images/media/SKOCH-award-silver-achiever---innovation-2018.jpg"
								/>
								<div className="awrdimgcont">
									<h3>
										In 2018 Conferred Highest Independent Honour by honouring
										SKOCH AWARD –ACHIEVER Silver for The Innovation of `Rainy’
										Filters.
									</h3>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</Fragment>
		);
	}
}
