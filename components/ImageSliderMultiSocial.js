import Carousel from 'react-multi-carousel'
// import "react-multi-carousel/lib/styles.css";
import React, {Fragment} from 'react'

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
	}
	return (
		<Fragment>
			<div style={{marginTop: '8%'}}></div>
			<Carousel infinite={true} autoPlay={true} responsive={responsive}>
				<div className='container-fluid  award-image'>
					<div className='container awrdimgsec text-center'>
						<img
							className='rounded mx-auto d-block'
							src='../static/images/socialImages/2-min.JPG'
						/>
					</div>
				</div>
				<div className='container-fluid award-image '>
					<div className='container awrdimgsec text-center '>
						<img
							className='rounded mx-auto d-block'
							src='../static/images/socialImages/3-min.JPG'
						/>
					</div>
				</div>
				<div className='container-fluid award-image '>
					<div className='container awrdimgsec text-center'>
						<img
							className='rounded mx-auto d-block'
							src='../static/images/socialImages/4-min.JPG'
						/>
					</div>
				</div>
				<div className='container-fluid award-image'>
					<div className='container awrdimgsec text-center'>
						<img
							className='rounded mx-auto d-block'
							src='../static/images/socialImages/5-min.JPG'
						/>
					</div>
				</div>
				<div className='container-fluid award-image'>
					<div className='container awrdimgsec text-center'>
						<img
							className='rounded mx-auto d-block'
							src='../static/images/socialImages/6-min.jpg'
						/>
					</div>
				</div>
			</Carousel>
		</Fragment>
	)
}

export default ImageSliderMulti
