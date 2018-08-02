import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<Router>
      		<div>
	      		<Sidebar />
	      		<Content />
	      	</div>
      	</Router>
      </div>
    );
  }
}

export default App;
