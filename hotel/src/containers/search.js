import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { 
    searchHotels, 
    updateName, 
    updateFromDate, 
    updateToDate 
} from '../actions';
import 'react-datepicker/dist/react-datepicker.css';

class Search extends Component {
    searchHotels = (event) => {
        event.preventDefault();
        if((this.props.fromDate !== null && this.props.toDate !== null) || (this.props.hotelName !== "" && this.props.fromDate === null && this.props.toDate === null) || (this.props.hotelName === "" && this.props.fromDate === null && this.props.toDate === null))
            this.props.searchHotels(this.props);
        else
            alert("Please select 'To-Date' ");      
    }

    handleChangeName = (event) => {
        this.props.updateName(event.target.value);     
    }

    handleChangefromDate = (fromDate) => {
        let disabledToDate = false, toDate = this.props.toDate;
        if(fromDate === null)
            disabledToDate = true;
        if(fromDate > toDate)
            toDate = fromDate;
        this.props.updateFromDate(fromDate, toDate, disabledToDate);
    }

    handleChangeToDate = (toDate) => {
        this.props.updateToDate(toDate);
    }

    render() {
        return (
            <form className="Inside-search" onSubmit={this.searchHotels}>
                <input 
                    type="text" 
                    className="hotelName" 
                    placeholder="Enter the name of hotel" 
                    value={this.props.hotelName}
                    onChange={this.handleChangeName}
                    />
                <div className="dateRange">
                    <DatePicker
                        className="Date"
                        placeholderText="FROM"
                        selected={this.props.fromDate}
                        onChange={this.handleChangefromDate}
                        disabled={false}
                        minDate={moment()}
                        maxDate={moment().add(1, "years")} 
                        />
                    <DatePicker
                        className="Date"
                        placeholderText="TO"
                        selected={this.props.toDate}
                        onChange={this.handleChangeToDate}
                        disabled={this.props.disabledToDate}
                        minDate={this.props.fromDate}
                        maxDate={moment().add(1, "years")}
                        />
                </div>
                <button type="submit" value="Search" className="searchbutton">Search</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    let {  
        hotelName,
        fromDate, 
        toDate,
        disabledToDate 
    } = state.searchform;
    
    let { list } = state.hotels;

    return { 
        list,
        hotelName, 
        fromDate, 
        toDate,
        disabledToDate
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators ({
        searchHotels,
        updateName,
        updateFromDate,
        updateToDate
    }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Search);