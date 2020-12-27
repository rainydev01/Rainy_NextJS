import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import React, {Fragment} from "react";

const ImageSliderMulti = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: {max: 4000, min: 3000},
			items: 1,
		},
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 1,
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 1,
		},
		mobile: {
			breakpoint: {max: 464, min: 0},
			items: 1,
		},
	};
	return (
		<Fragment>
			<div className="container-fluid award">
				<h1>OUR AWARDS</h1>
			</div>
			<Carousel infinite={true} autoPlay={true} responsive={responsive}>
				<div className="container-fluid award-image">
					<div className="container awrdimgsec text-center">
						<img
							className="rounded mx-auto d-block"
							src="../../static/images/media/Aqua-Foundation-2017.jpg"
						/>
						<div className="awrdimgcont">
							<h3>
								Aqua Foundations National Excellence Award 2017 for Industrial
								Excellence in Development of Technology in the field of
								Rainwater Harvesting
							</h3>
						</div>
					</div>
				</div>
				<div className="container-fluid award-image">
					<div className="container awrdimgsec text-center ">
						<img
							className="rounded mx-auto d-block"
							src="../../static/images/media/Earth-care-2014.jpg"
						/>
						<div className="awrdimgcont">
							<h3>
								2014 - The Times of India JSW Earth Care Global Award for
								Innovation for Climate Protection : Awarded for FL V-Wire
								Injection Well Technology
							</h3>
						</div>
					</div>
				</div>
				<div className="container-fluid award-image">
					<div className="container awrdimgsec text-center">
						<img
							className="rounded mx-auto d-block"
							src="../../static/images/media/Earthcare-2010.jpg"
						/>
						<div className="awrdimgcont">
							<h3>
								2010 - The Times of India JSW Earth Care Award in Innovation for
								Climate Protection : For the Invention of ‘Rainy’ – Self
								Cleaning Auto Flush Out Filters
							</h3>
						</div>
					</div>
				</div>
				<div className="container-fluid award-image">
					<div className="container awrdimgsec text-center">
						<img
							className="rounded mx-auto d-block"
							src="../../static/images/media/National-Award--by-CII--2009.jpg"
						/>
						<div className="awrdimgcont">
							<h3>
								2009 - CII National Award for Excellence in Water Management :
								Most Innovative Water Saving Product (Rainy Filters)
							</h3>
						</div>
					</div>
				</div>
				<div className="container-fluid award-image">
					<div className="container awrdimgsec text-center">
						<img
							className="rounded mx-auto d-block"
							src="../../static/images/media/SKOCH--order-of-merit-among-100-SMES--2018.jpg"
						/>
						<div className="awrdimgcont">
							<h3>
								SKOCH Order of Merit awarded to ‘Rainy’ filters – Top 100 SME’s
								in India in 2018
							</h3>
						</div>
					</div>
				</div>
				<div className="container-fluid award-image">
					<div className="container awrdimgsec text-center">
						<img
							className="rounded mx-auto d-block"
							src="../../static/images/media/SKOCH-award-silver-achiever---innovation-2018.jpg"
						/>
						<div className="awrdimgcont">
							<h3>
								2018 SKOCH AWARD –ACHIEVER Silver for The Innovation of `Rainy’
								Filters.
							</h3>
						</div>
					</div>
				</div>
			</Carousel>
			;
		</Fragment>
	);
};

export default ImageSliderMulti;
