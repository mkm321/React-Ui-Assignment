import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../App.css';
import '../style.css';
import Home from '../containers/home';
import Documentation from '../components/documentation/documentation';

class App extends Component {
	  render() {
		    return (
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Home}></Route>
						<Route path="/documentation" component={Documentation}></Route>
					</div>
				</BrowserRouter>
		    );
	  }
}

export default App;