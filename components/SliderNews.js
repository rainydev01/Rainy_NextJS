import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';

let list = [
	{
		name: (
			<Fragment>
				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										<a href="google.com">
											Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence
											Award. 1
										</a>
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence Award.
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	},
	{
		name: (
			<Fragment>
				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence Award. 2
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence Award.
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	},
	{
		name: (
			<Fragment>
				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence Award. 3
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence Award.
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	},
	{
		name: (
			<Fragment>
				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										<a href="google.com">
											Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence
											Award. 1
										</a>
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence Award.
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	},
	{
		name: (
			<Fragment>
				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										<a href="google.com">
											Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence
											Award. 1
										</a>
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container media-main">
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media1.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Farmland Rainwater Harvesting Systems Wins Aqua Foundations Excellence Award.
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web.{' '}
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media2.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										SKOCH Award Winner: Farmland Rainwater harvesting Systems.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec-brdr">
							<div className="mdiaimg">
								<img src="../../static/images/media/media3.png" />
							</div>
							<div className="mdiacont">
								<div className="grndtext">
									<h3>
										Where Suvarna Jala Fails, Schools Leap ahead.<br />
									</h3>
									<p
										style={{
											textAlign: 'left',
											color: '#4c3f43',
											fontSize: '12px',
											fontWeight: '500',
											letterSpacing: '0.5px'
										}}
									>
										Lorum ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum
										ispum is a dummy text for web. Lorum ispum is a dummy text for web. Lorum ispum
										is a dummy text for web.
									</p>
									<div className="mdiasocial">
										<div className="col-md-6 mediasocial">
											<i className="fa fa-facebook" aria-hidden="true" />
											<i className="fa fa-twitter" aria-hidden="true" />
											<i className="fa fa-google-plus" aria-hidden="true" />
										</div>
										<div className="col-md-6 mediabtn">
											<button>
												Read more <i class="fa fa-angle-right" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
];

const MenuItem = ({ text, selected }) => {
	return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

export const Menu = (list, selected) =>
	list.map((el) => {
		const { name } = el;

		return <MenuItem text={name} key={name} selected={selected} />;
	});

const Arrow = ({ text, className }) => {
	return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
const selected = 'item1';

class App extends Component {
	constructor(props) {
		super(props);
		// call it again if items count changes
		this.menuItems = Menu(list, selected);
	}

	state = {
		selected
	};

	onSelect = (key) => {
		this.setState({ selected: key });
	};

	render() {
		const { selected } = this.state;
		// Create menu from items
		const menu = this.menuItems;

		return (
			<div className="App">
				<ScrollMenu
					data={menu}
					arrowLeft={ArrowLeft}
					arrowRight={ArrowRight}
					selected={selected}
					onSelect={this.onSelect}
					wheel={false}
					dragging={true}
					scrollToSelected={false}
					translate={0}
					transition={0.3}
					alignCenter={true}
				/>
			</div>
		);
	}
}
export default App;
