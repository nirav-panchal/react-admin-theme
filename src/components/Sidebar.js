import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
	render() {
		return (
			<div className="left-side-bar">
				<div className="brand-logo">
					<NavLink to="/"><img src="images/deskapp-logo.png" alt="" /></NavLink>
				</div>
				<div className="menu-block customscroll">
					<div className="sidebar-menu">
						<ul id="accordion-menu">
							<li className="dropdown">
								<a href="javascript:;" className="dropdown-toggle">
									<span className="fa fa-home"></span><span className="mtext">Home</span>
								</a>
								
								<ul className="submenu">
									<li><NavLink exact={true} to="/" activeClassName='active'>Dashboard style 1</NavLink></li>
									<li><NavLink to="/dashboard" activeClassName='active'>Dashboard style 2</NavLink></li>
								</ul>

							</li>
							<li className="dropdown">
								<a href="javascript:;" className="dropdown-toggle">
									<span className="fa fa-pencil"></span><span className="mtext">Forms</span>
								</a>
								<ul className="submenu">
									<li><a href="form-basic.php">Form Basic</a></li>
									<li><a href="advanced-components.php">Advanced Components</a></li>
									<li><a href="form-wizard.php">Form Wizard</a></li>
									<li><a href="html5-editor.php">HTML5 Editor</a></li>
									<li><a href="form-pickers.php">Form Pickers</a></li>
									<li><a href="image-cropper.php">Image Cropper</a></li>
									<li><a href="image-dropzone.php">Image Dropzone</a></li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="javascript:;" className="dropdown-toggle">
									<span className="fa fa-table"></span><span className="mtext">Tables</span>
								</a>
								<ul className="submenu">
									<li><a href="basic-table.php">Basic Tables</a></li>
									<li><a href="datatable.php">DataTables</a></li>
								</ul>
							</li>
							<li>
								<a href="calendar.php" className="dropdown-toggle no-arrow">
									<span className="fa fa-calendar-o"></span><span className="mtext">Calendar</span>
								</a>
							</li>
							<li className="dropdown">
								<a href="javascript:;" className="dropdown-toggle">
									<span className="fa fa-desktop"></span><span className="mtext"> UI Elements </span>
								</a>
								<ul className="submenu">
									<li><a href="ui-buttons.php">Buttons</a></li>
									<li><a href="ui-cards.php">Cards</a></li>
									<li><a href="ui-cards-hover.php">Cards Hover</a></li>
									<li><a href="ui-modals.php">Modals</a></li>
									<li><a href="ui-tabs.php">Tabs</a></li>
									<li><a href="ui-tooltip-popover.php">Tooltip &amp; Popover</a></li>
									<li><a href="ui-sweet-alert.php">Sweet Alert</a></li>
									<li><a href="ui-notification.php">Notification</a></li>
									<li><a href="ui-timeline.php">Timeline</a></li>
									<li><a href="ui-progressbar.php">Progressbar</a></li>
									<li><a href="ui-typography.php">Typography</a></li>
									<li><a href="ui-list-group.php">List group</a></li>
									<li><a href="ui-range-slider.php">Range slider</a></li>
									<li><a href="ui-carousel.php">Carousel</a></li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="javascript:;" className="dropdown-toggle">
									<span className="fa fa-paint-brush"></span><span className="mtext">Icons</span>
								</a>
								<ul className="submenu">
									<li><a href="font-awesome.php">FontAwesome Icons</a></li>
									<li><a href="foundation.php">Foundation Icons</a></li>
									<li><a href="ionicons.php">Ionicons Icons</a></li>
									<li><a href="themify.php">Themify Icons</a></li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="javascript:;" className="dropdown-toggle">
									<span className="fa fa-plug"></span><span className="mtext">Additional Pages</span>
								</a>
								<ul className="submenu">
									<li><a href="video-player.php">Video Player</a></li>
									<li><a href="login.php">Login</a></li>
									<li><a href="forgot-password.php">Forgot Password</a></li>
									<li><a href="reset-password.php">Reset Password</a></li>
									<li><a href="403.php">403</a></li>
									<li><a href="404.php">404</a></li>
									<li><a href="500.php">500</a></li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="javascript:;" className="dropdown-toggle">
									<span className="fa fa-pie-chart"></span><span className="mtext">Charts</span>
								</a>
								<ul className="submenu">
									<li><a href="highchart.php">Highchart</a></li>
									<li><a href="knob-chart.php">jQuery Knob</a></li>
									<li><a href="jvectormap.php">jvectormap</a></li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="javascript:;" className="dropdown-toggle">
									<span className="fa fa-clone"></span><span className="mtext">Extra Pages</span>
								</a>
								<ul className="submenu">
									<li><a href="blank.php">Blank</a></li>
									<li><a href="contact-directory.php">Contact Directory</a></li>
									<li><a href="blog.php">Blog</a></li>
									<li><a href="blog-detail.php">Blog Detail</a></li>
									<li><a href="product.php">Product</a></li>
									<li><a href="product-detail.php">Product Detail</a></li>
									<li><a href="faq.php">FAQ</a></li>
									<li><a href="profile.php">Profile</a></li>
									<li><a href="gallery.php">Gallery</a></li>
									<li><a href="pricing-table.php">Pricing Tables</a></li>
								</ul>
							</li>
							<li className="dropdown">
								<a href="javascript:;" className="dropdown-toggle">
									<span className="fa fa-list"></span><span className="mtext">Multi Level Menu</span>
								</a>
								<ul className="submenu">
									<li><a href="javascript:;">Level 1</a></li>
									<li><a href="javascript:;">Level 1</a></li>
									<li><a href="javascript:;">Level 1</a></li>
									<li className="dropdown">
										<a href="javascript:;" className="dropdown-toggle">
											<span className="fa fa-plug"></span><span className="mtext">Level 2</span>
										</a>
										<ul className="submenu child">
											<li><a href="javascript:;">Level 2</a></li>
											<li><a href="javascript:;">Level 2</a></li>
										</ul>
									</li>
									<li><a href="javascript:;">Level 1</a></li>
									<li><a href="javascript:;">Level 1</a></li>
									<li><a href="javascript:;">Level 1</a></li>
								</ul>
							</li>
							<li>
								<a href="sitemap.php" className="dropdown-toggle no-arrow">
									<span className="fa fa-sitemap"></span><span className="mtext">Sitemap</span>
								</a>
							</li>
							<li>
								<a href="chat.php" className="dropdown-toggle no-arrow">
									<span className="fa fa-comments-o"></span><span className="mtext">Chat <span className="fi-burst-new text-danger new"></span></span>
								</a>
							</li>
							<li>
								<a href="invoice.php" className="dropdown-toggle no-arrow">
									<span className="fa fa-map-o"></span><span className="mtext">Invoice</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}