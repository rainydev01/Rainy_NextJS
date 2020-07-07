import React, { Fragment } from 'react';

const GroundWaterRecharging = () => {
	return (
		<Fragment>
			<div className="container groundwater">
				<div className="groundwatersec">
					<div className="col-md-6">
						<div className="groundwatersimg">
							<img src="../static/images/homepage/groundWaterRecharging.png" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="groundwaterstxt">
							<h3>Ground Water Recharging</h3>
							<p>
								Lorum ipsum doller sit amet, lorum ipsum is a dummy text for web. Lorum ipsum doller sit
								amet, lorum ipsum is a dummy text for web. Lorum ipsum doller sit amet, lorum ipsum is a
								dummy text for web. Lorum ipsum doller sit amet, lorum ipsum is a dummy text for web.{' '}
							</p>
							<button>Read More <i class="fa fa-angle-right" aria-hidden="true"></i></button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default GroundWaterRecharging;
