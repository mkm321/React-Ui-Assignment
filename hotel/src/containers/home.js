import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHotels } from '../actions';
import Header from '../components/common/header';
import Search from './search';
import Footer from '../components/common/footer';
import Display from '../components/home/display';

class home extends Component {

	componentDidMount() {
		this.props.getHotels();
	}

	render() {
		return (
			<div className="main">
		        <Header navText="Documentation" link="/documentation"/>
		        <Search/>
				<div className="scroll">
		        	<Display {...this.props}/>
				</div>
				<Footer/>
	      	</div>
		);
	}
}

const mapStateToProps = state => {
	let { 
		available,
		partiallyAvailable, 
		notAvailable,
		fromDate,
		toDate
	} = state.hotels;

	let { hotelName } = state.searchform;
	
	return { 
		available,
		partiallyAvailable, 
		notAvailable,
		hotelName,
		fromDate,
		toDate
	};
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    getHotels
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(home);