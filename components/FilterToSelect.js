import React, { Fragment } from 'react';

const FilterToSelect = () => {
	return (
		<Fragment>
			<div className="container-fluid frmsecimg">
				<div className="container">
					<div className="frmsec">
						<div className="col-md-6">
							<div className="rooftopfrm">
								<h3>Check which filter is suitable for your rooftop</h3>
								<input type="text" name="rooftop" placeholder="Enter rooftop Area in square Meters" />
								<div className="knwyroof">
									<a href="#">know your rooftop area</a>
								</div>
								<button>submit</button>
							</div>
						</div>
						<div className="col-md-6">
							<div className="rghtbtnt">
								<div className="shouldtry">
									<button>You Should Try</button>
								</div>
								<div className="flhndred">
									<button>FL 100</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default FilterToSelect;
