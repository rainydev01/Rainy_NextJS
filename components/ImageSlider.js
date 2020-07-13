import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style, display: 'block', background: '#0971b7' }} onClick={onClick} />
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style, display: 'block', background: '#0971b7' }} onClick={onClick} />
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
			prevArrow: <SamplePrevArrow />
		};
		return (
			<Fragment>
				<div className="container-fluid award">
					<h1>OUR AWARDS</h1>
				</div>
				<div style={{ padding: 10, margin: 40 }}>
					<Slider {...settings}>
						<div className="container-fluid award-image">
							<div className="container awrdimgsec text-center">
								<img className="rounded mx-auto d-block" src="../../static/images/media/Award1.png" />
								<div className="awrdimgcont">
									<h3>
										SKOCH ORDER of Merit-<br />Top 100 SME's in INDIA 2018
									</h3>
								</div>
							</div>
						</div>
						<div className="container-fluid award-image">
							<div className="container awrdimgsec ">
								<img className="rounded mx-auto d-block" src="../../static/images/media/Award1.png" />
								<div className="awrdimgcont">
									<h3>
										2 SKOCH ORDER of Merit-<br />Top 100 SME's in INDIA 2018
									</h3>
								</div>
							</div>
						</div>
						<div className="container-fluid award-image">
							<div className="container awrdimgsec">
								<img className="rounded mx-auto d-block" src="../../static/images/media/Award1.png" />
								<div className="awrdimgcont">
									<h3>
										3 SKOCH ORDER of Merit-<br />Top 100 SME's in INDIA 2018
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
