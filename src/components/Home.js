import React, {Component} from 'react';
import Highcharts from 'highcharts';
import Highchartsmore from 'highcharts-more-node';
import Footer from './Footer';

export default class Home extends Component {
	componentDidMount() {
		Highcharts.chart('areaspline-chart', {
			chart: {
				type: 'areaspline'
			},
			title: {
				text: ''
			},
			legend: {
				layout: 'vertical',
				align: 'left',
				verticalAlign: 'top',
				x: 70,
				y: 20,
				floating: true,
				borderWidth: 1,
				backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
			},
			xAxis: {
				categories: [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
					'Sunday'
				],
				plotBands: [{
					from: 4.5,
					to: 6.5,
				}],
				gridLineDashStyle: 'longdash',
                gridLineWidth: 1,
                crosshair: true
			},
			yAxis: {
				title: {
					text: ''
				},
				gridLineDashStyle: 'longdash',
			},
			tooltip: {
				shared: true,
				valueSuffix: ' units'
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				areaspline: {
					fillOpacity: 0.6
				}
			},
			series: [{
				name: 'John',
				data: [0, 5, 8, 6, 3, 10, 8],
				color: '#f5956c'
			}, {
				name: 'Jane',
				data: [0, 3, 6, 3, 7, 5, 9],
				color: '#f56767'
			}, {
				name: 'Johnny',
				data: [0, 2, 5, 3, 2, 4, 0],
				color: '#a683eb'
			}, {
				name: 'Daniel',
				data: [0, 4, 7, 3, 0, 7, 4],
				color: '#41ccba'
			}]
		});

		Highcharts.chart('device-usage', {
			chart: {
				type: 'pie'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				series: {
					dataLabels: {
						enabled: false,
						format: '{point.name}: {point.y:.1f}%'
					}
				},
				pie: {
					innerSize: 127,
					depth: 45
				}
			},

			tooltip: {
				headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
				pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
			},
			series: [{
				name: 'Brands',
				colorByPoint: true,
				data: [{
					name: 'IE',
					y: 10,
					color: '#ecc72f'
				}, {
					name: 'Chrome',
					y: 40,
					color: '#46be8a'
				}, {
					name: 'Firefox',
					y: 30,
					color: '#f2a654'
				}, {
					name: 'Safari',
					y: 10,
					color: '#62a8ea'
				}, {
					name: 'Opera',
					y: 10,
					color: '#e14e50'
				}]
			}]
		});

		Highchartsmore.chart('ram', {

			chart: {
				type: 'gauge',
				plotBackgroundColor: null,
				plotBackgroundImage: null,
				plotBorderWidth: 0,
				plotShadow: false
			},
			title: {
				text: ''
			},
			credits: {
				enabled: false
			},
			pane: {
				startAngle: -150,
				endAngle: 150,
				background: [{
					borderWidth: 0,
					outerRadius: '109%'
				}, {
					borderWidth: 0,
					outerRadius: '107%'
				}, {
				}, {
					backgroundColor: '#fff',
					borderWidth: 0,
					outerRadius: '105%',
					innerRadius: '103%'
				}]
			},

			yAxis: {
				min: 0,
				max: 200,

				minorTickInterval: 'auto',
				minorTickWidth: 1,
				minorTickLength: 10,
				minorTickPosition: 'inside',
				minorTickColor: '#666',

				tickPixelInterval: 30,
				tickWidth: 2,
				tickPosition: 'inside',
				tickLength: 10,
				tickColor: '#666',
				labels: {
					step: 2,
					rotation: 'auto'
				},
				title: {
					text: 'RAM'
				},
				plotBands: [{
					from: 0,
					to: 120,
					color: '#55BF3B'
				}, {
					from: 120,
					to: 160,
					color: '#DDDF0D'
				}, {
					from: 160,
					to: 200,
					color: '#DF5353'
				}]
			},

			series: [{
				name: 'Speed',
				data: [80],
				tooltip: {
					valueSuffix: '%'
				}
			}]
		});

		Highchartsmore.chart('cpu', {

			chart: {
				type: 'gauge',
				plotBackgroundColor: null,
				plotBackgroundImage: null,
				plotBorderWidth: 0,
				plotShadow: false
			},
			title: {
				text: ''
			},
			credits: {
				enabled: false
			},
			pane: {
				startAngle: -150,
				endAngle: 150,
				background: [{
					borderWidth: 0,
					outerRadius: '109%'
				}, {
					borderWidth: 0,
					outerRadius: '107%'
				}, {
				}, {
					backgroundColor: '#fff',
					borderWidth: 0,
					outerRadius: '105%',
					innerRadius: '103%'
				}]
			},

			yAxis: {
				min: 0,
				max: 200,

				minorTickInterval: 'auto',
				minorTickWidth: 1,
				minorTickLength: 10,
				minorTickPosition: 'inside',
				minorTickColor: '#666',

				tickPixelInterval: 30,
				tickWidth: 2,
				tickPosition: 'inside',
				tickLength: 10,
				tickColor: '#666',
				labels: {
					step: 2,
					rotation: 'auto'
				},
				title: {
					text: 'CPU'
				},
				plotBands: [{
					from: 0,
					to: 120,
					color: '#55BF3B'
				}, {
					from: 120,
					to: 160,
					color: '#DDDF0D'
				}, {
					from: 160,
					to: 200,
					color: '#DF5353'
				}]
			},

			series: [{
				name: 'Speed',
				data: [120],
				tooltip: {
					valueSuffix: ' %'
				}
			}]
		});
	}
	render() {
		return (
			<div className="main-container">
				<div className="pd-ltr-20 customscroll customscroll-10-p height-100-p xs-pd-20-10">
					<div className="row clearfix progress-box">
						<div className="col-lg-3 col-md-6 col-sm-12 mb-30">
							<div className="bg-white pd-20 box-shadow border-radius-5 height-100-p">
								<div className="project-info clearfix">
									<div className="project-info-left">
										<div className="icon box-shadow bg-blue text-white">
											<i className="fa fa-briefcase"></i>
										</div>
									</div>
									<div className="project-info-right">
										<span className="no text-blue weight-500 font-24">40</span>
										<p className="weight-400 font-18">My Earnings</p>
									</div>
								</div>
								<div className="project-info-progress">
									<div className="row clearfix">
										<div className="col-sm-6 text-muted weight-500">Target</div>
										<div className="col-sm-6 text-right weight-500 font-14 text-muted">40</div>
									</div>
									<div className="progress" style={{height: '10px'}}>
										<div className="progress-bar bg-blue progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '40%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 mb-30">
							<div className="bg-white pd-20 box-shadow border-radius-5 height-100-p">
								<div className="project-info clearfix">
									<div className="project-info-left">
										<div className="icon box-shadow bg-light-green text-white">
											<i className="fa fa-handshake-o"></i>
										</div>
									</div>
									<div className="project-info-right">
										<span className="no text-light-green weight-500 font-24">50</span>
										<p className="weight-400 font-18">Business Captured</p>
									</div>
								</div>
								<div className="project-info-progress">
									<div className="row clearfix">
										<div className="col-sm-6 text-muted weight-500">Target</div>
										<div className="col-sm-6 text-right weight-500 font-14 text-muted">50</div>
									</div>
									<div className="progress" style={{height: '10px'}}>
										<div className="progress-bar bg-light-green progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 mb-30">
							<div className="bg-white pd-20 box-shadow border-radius-5 height-100-p">
								<div className="project-info clearfix">
									<div className="project-info-left">
										<div className="icon box-shadow bg-light-orange text-white">
											<i className="fa fa-list-alt"></i>
										</div>
									</div>
									<div className="project-info-right">
										<span className="no text-light-orange weight-500 font-24">2 Lakhs</span>
										<p className="weight-400 font-18">Projects Complete</p>
									</div>
								</div>
								<div className="project-info-progress">
									<div className="row clearfix">
										<div className="col-sm-6 text-muted weight-500">Review</div>
										<div className="col-sm-6 text-right weight-500 font-14 text-muted">Good</div>
									</div>
									<div className="progress" style={{height: '10px'}}>
										<div className="progress-bar bg-light-orange progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12 mb-30">
							<div className="bg-white pd-20 box-shadow border-radius-5 margin-5 height-100-p">
								<div className="project-info clearfix">
									<div className="project-info-left">
										<div className="icon box-shadow bg-light-purple text-white">
											<i className="fa fa-podcast"></i>
										</div>
									</div>
									<div className="project-info-right">
										<span className="no text-light-purple weight-500 font-24">5.1 Lakhs</span>
										<p className="weight-400 font-18">Pending Business</p>
									</div>
								</div>
								<div className="project-info-progress">
									<div className="row clearfix">
										<div className="col-sm-6 text-muted weight-500">Review</div>
										<div className="col-sm-6 text-right weight-500 font-14 text-muted">Average</div>
									</div>
									<div className="progress" style={{height: '10px'}}>
										<div className="progress-bar bg-light-purple progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white pd-20 box-shadow border-radius-5 mb-30">
						<h4 className="mb-30">Area Spline Chart</h4>
						<div className="row">
							<div className="col-sm-12 col-md-8 col-lg-9 xs-mb-20">
								<div id="areaspline-chart" style={{minWidth : '210px', height : '400px', margin : '0 auto'}}></div>
							</div>
							<div className="col-sm-12 col-md-4 col-lg-3">
								<h5 className="mb-30 weight-500">Top Campaign Performance</h5>
								<div className="mb-30">
									<p className="mb-5 font-18">John Campaign</p>
									<div className="progress border-radius-0" style={{height: '10px'}}>
										<div className="progress-bar bg-orange" role="progressbar" style={{width: '40%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div className="mb-30">
									<p className="mb-5 font-18">Jane Campaign</p>
									<div className="progress border-radius-0" style={{height: '10px'}}>
										<div className="progress-bar bg-light-orange" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div className="mb-30">
									<p className="mb-5 font-18">Johnny Campaign</p>
									<div className="progress border-radius-0" style={{height: '10px'}}>
										<div className="progress-bar bg-light-purple" role="progressbar" style={{width: '70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
								<div className="mb-30 font-18">
									<p className="mb-5">Daniel Campaign</p>
									<div className="progress border-radius-0" style={{height: '10px'}}>
										<div className="progress-bar bg-light-green" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row clearfix">
						<div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 mb-30">
							<div className="bg-white pd-20 box-shadow border-radius-5 height-100-p">
								<h4 className="mb-30">Devices Managed</h4>
								<div className="device-manage-progress-chart">
									<ul>
										<li className="clearfix">
											<div className="device-name">Window</div>
											<div className="device-progress">
												<div className="progress">
													<div className="progress-bar window border-radius-8" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}>
													</div>
												</div>
											</div>
											<div className="device-total">60</div>
										</li>
										<li className="clearfix">
											<div className="device-name">Mac</div>
											<div className="device-progress">
												<div className="progress">
													<div className="progress-bar mac border-radius-8" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
													</div>
												</div>
											</div>
											<div className="device-total">20</div>
										</li>
										<li className="clearfix">
											<div className="device-name">Android</div>
											<div className="device-progress">
												<div className="progress">
													<div className="progress-bar android border-radius-8" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '30%'}}>
													</div>
												</div>
											</div>
											<div className="device-total">30</div>
										</li>
										<li className="clearfix">
											<div className="device-name">Linux</div>
											<div className="device-progress">
												<div className="progress">
													<div className="progress-bar linux border-radius-8" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '10%'}}>
													</div>
												</div>
											</div>
											<div className="device-total">10</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-30">
							<div className="bg-white pd-20 box-shadow border-radius-5 height-100-p">
								<h4 className="mb-30">Device Usage</h4>
								<div className="clearfix device-usage-chart">
									<div className="width-50-p pull-left">
										<div id="device-usage" style={{minWidth : '180px', height: '200px', margin: '0 auto'}}></div>
									</div>
									<div className="width-50-p pull-left">
										<table style={{width: '100%'}}>
											<thead>
												<tr>
													<th className="weight-500"><p>Device</p></th>
													<th className="text-right weight-500"><p>Usage</p></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td width="70%"><p className="weight-500 mb-5"><i className="fa fa-square text-yellow"></i> IE</p></td>
													<td className="text-right weight-400">10%</td>
												</tr>
												<tr>
													<td width="70%"><p className="weight-500 mb-5"><i className="fa fa-square text-green"></i> Chrome</p></td>
													<td className="text-right weight-400">40%</td>
												</tr>
												<tr>
													<td width="70%"><p className="weight-500 mb-5"><i className="fa fa-square text-orange-50"></i> Firefox</p></td>
													<td className="text-right weight-400">30%</td>
												</tr>
												<tr>
													<td width="70%"><p className="weight-500 mb-5"><i className="fa fa-square text-blue-50"></i> Safari</p></td>
													<td className="text-right weight-400">10%</td>
												</tr>
												<tr>
													<td width="70%"><p className="weight-500 mb-5"><i className="fa fa-square text-red-50"></i> Opera</p></td>
													<td className="text-right weight-400">10%</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-30">
							<div className="bg-white pd-20 box-shadow border-radius-5 height-100-p">
								<h4 className="mb-30">Profile Completion</h4>
								<div className="clearfix device-usage-chart">
									<div className="width-50-p pull-left">
										<div id="ram" style={{minWidth : '160px', maxWidth : '180px', height : '200px', margin : '0 auto'}}></div>
									</div>
									<div className="width-50-p pull-left">
										<div id="cpu" style={{minWidth : '160px', maxWidth: '180px', height : '200px', margin : '0 auto'}}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row clearfix">
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-30">
							<div className="bg-white pd-20 box-shadow border-radius-5 height-100-p">
								<h4 className="mb-20">Recent Messages</h4>
								<div className="notification-list mx-h-450 customscroll">
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
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-30">
							<div className="bg-white pd-20 box-shadow border-radius-5 height-100-p">
								<h4 className="mb-30">To Do list</h4>
								<div className="to-do-list mx-h-450 customscroll">
									<ul>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck1" />
												<label className="custom-control-label" htmlFor="customCheck1">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck2" />
												<label className="custom-control-label" htmlFor="customCheck2">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck3" />
												<label className="custom-control-label" htmlFor="customCheck3">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck4" />
												<label className="custom-control-label" htmlFor="customCheck4">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck5" />
												<label className="custom-control-label" htmlFor="customCheck5">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck6" />
												<label className="custom-control-label" htmlFor="customCheck6">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck7" />
												<label className="custom-control-label" htmlFor="customCheck7">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck8" />
												<label className="custom-control-label" htmlFor="customCheck8">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck9" />
												<label className="custom-control-label" htmlFor="customCheck9">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck10" />
												<label className="custom-control-label" htmlFor="customCheck10">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck11" />
												<label className="custom-control-label" htmlFor="customCheck11">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck12" />
												<label className="custom-control-label" htmlFor="customCheck12">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck13" />
												<label className="custom-control-label" htmlFor="customCheck13">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck14" />
												<label className="custom-control-label" htmlFor="customCheck14">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck15" />
												<label className="custom-control-label" htmlFor="customCheck15">Check this custom checkbox</label>
											</div>
										</li>
										<li>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input" id="customCheck16" />
												<label className="custom-control-label" htmlFor="customCheck16">Check this custom checkbox</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		)
	}
}