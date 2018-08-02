import React, {Component} from 'react';

export default class Header extends Component {
	render() {
		return (
				<div>
					<div className="header clearfix">
						<div className="header-right">
							<div className="brand-logo">
								<a href="index.php">
									<img src="images/logo.png" alt="logo" className="mobile-logo" />
								</a>
							</div>
							<div className="menu-icon">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div className="user-info-dropdown">
								<div className="dropdown">
									<a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
										<span className="user-icon"><i className="fa fa-user-o"></i></span>
										<span className="user-name">Johnny Brown</span>
									</a>
									<div className="dropdown-menu dropdown-menu-right">
										<a className="dropdown-item" href="profile.php"><i className="fa fa-user-md" aria-hidden="true"></i> Profile</a>
										<a className="dropdown-item" href="profile.php"><i className="fa fa-cog" aria-hidden="true"></i> Setting</a>
										<a className="dropdown-item" href="faq.php"><i className="fa fa-question" aria-hidden="true"></i> Help</a>
										<a className="dropdown-item" href="login.php"><i className="fa fa-sign-out" aria-hidden="true"></i> Log Out</a>
									</div>
								</div>
							</div>
							<div className="user-notification">
								<div className="dropdown">
									<a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
										<i className="fa fa-bell" aria-hidden="true"></i>
										<span className="badge notification-active"></span>
									</a>
									<div className="dropdown-menu dropdown-menu-right">
										<div className="notification-list mx-h-350 customscroll">
											<ul>
												<li>
													<a href="#">
														<img src="images/img.jpg" alt="" />
														<h3 className="clearfix">John Doe <span>3 mins ago</span></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="images/img.jpg" alt="" />
														<h3 className="clearfix">John Doe <span>3 mins ago</span></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="images/img.jpg" alt="" />
														<h3 className="clearfix">John Doe <span>3 mins ago</span></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="images/img.jpg" alt="" />
														<h3 className="clearfix">John Doe <span>3 mins ago</span></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="images/img.jpg" alt="" />
														<h3 className="clearfix">John Doe <span>3 mins ago</span></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="images/img.jpg" alt="" />
														<h3 className="clearfix">John Doe <span>3 mins ago</span></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
													</a>
												</li>
												<li>
													<a href="#">
														<img src="images/img.jpg" alt="" />
														<h3 className="clearfix">John Doe <span>3 mins ago</span></h3>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		)
	}
}