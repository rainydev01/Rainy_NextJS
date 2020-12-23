import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import React, {Fragment} from "react";

const ImageSliderMulti = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: {max: 4000, min: 3000},
			items: 6,
		},
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 6,
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 3,
		},
		mobile: {
			breakpoint: {max: 464, min: 0},
			items: 1,
		},
	};
	return (
		<Fragment>
			<div style={{padding: 10, margin: 40}}>
				<div className="container-fluid">
					<div className="container">
						<h2 className="clientsHome">Our Clients</h2>
					</div>
				</div>
				<div className="text-center">
					<Carousel
						showDots={true}
						infinite={true}
						autoPlay={true}
						responsive={responsive}
					>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/1.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/2.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/3.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/4.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/5.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/6.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/7.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/8.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/9.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/10.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/11.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/12.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/13.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/14.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/15.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/16.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/17.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/18.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/19.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/20.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/21.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/22.png"
							/>
						</div>
						<div className="col-md-2">
							<img
								height="100"
								width="190"
								src="../static/images/clients/23.png"
							/>
						</div>
					</Carousel>
				</div>
			</div>
		</Fragment>
	);
};

export default ImageSliderMulti;
