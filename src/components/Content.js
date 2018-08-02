import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

export default class Content extends Component {
	loadScript(src) {
		var tag = document.createElement('script');
		tag.async = false;
		tag.src = src;
		document.getElementsByTagName('body')[0].appendChild(tag);
	}

	componentDidMount() {
		this.loadScript('js/script.js');
	}
	render() {
		return (
			<div>
				<Route exact path="/" activeClassName='is-active' component={Home}/>
				<Route path="/dashboard" activeClassName='is-active' component={Dashboard}/>
			</div>
		)
	}
}