import React, { Fragment } from 'react';

const AboutUs = () => {
	return (
		<Fragment>
			<div
				className="container-fluid"
				style={{
					backgroundImage: 'url(../static/images/Drop.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'inherit'
				}}
			>
				<div
					className="container"
					style={{
						backgroundImage: 'url(../static/images/Drop2.png)',
						backgroundPosition: 'top left',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'inherit'
					}}
				>
					<div className="abou-home-heading">
						<h2>ABOUT US</h2>
					</div>
					<div className="about-home">
						<div className="about-content">
							<p>
								Lorum ipsum is a dummy text for web. Lorum ipsum is a dummy text for web. Lorum ipsum is
								a dummy text for web.{' '}
							</p>
							<p>
								Lorum ipsum is a dummy text for web. Lorum ipsum is a dummy text for web. Lorum ipsum is
								a dummy text for web. Lorum ipsum is a dummy text for web. Lorum ipsum is a dummy text
								for web. Lorum ipsum is a dummy text for web. Lorum ipsum is a dummy text for web. Lorum
								ipsum is a dummy text for web. Lorum ipsum is a dummy text for web. Lorum ipsum is a
								dummy text for web. Lorum ipsum is a dummy text for web. Lorum ipsum is a dummy text for
								web. Lorum ipsum is a dummy text for web. Lorum ipsum is a dummy text for web. Lorum
								ipsum is a dummy text for web. Lorum ipsum is a dummy text for web. Lorum ipsum is a
								dummy text for web. Lorum text for web. Lorum ipsum is a dummy text for web. text for
								web. Lorum.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default AboutUs;
