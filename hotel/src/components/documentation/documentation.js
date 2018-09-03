import React from 'react';
import Side from './side';
import Display from './descriptionDisplay';
import Header from '../common/header';

class Documentation extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= {
            items: {
                Button: {
                    name:'Button',
                    description:'The <button> tag defines a clickable button. A <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element',
                    types: [
                        {id:'0',itemname:'Book Now',itemdescription:'<button class="available-button">Book Now</button>',itemmodel:'Book Now' },
                        {id:'1',itemname:'Book On Available',itemdescription:'<button class="partially-available-button ">Book On Available</button>',itemmodel:'Book On Available'},
                        {id:'2',itemname:'Not Available',itemdescription:' <button class="not-available-button">Not Available</button>',itemmodel:'Not Available'},
                        {id:'3',itemname:'Search',itemdescription:'<button type="submit" value="Search" className="searchbutton">Search</button>',itemmodel:'Search'}
                    ]   
                    },
                Datepicker: {
                    name:'Datepicker',
                    description:'The datepicker is tied to a standard form input field. Focus on the input (click, or use the tab key) to open an interactive calendar in a small overlay.',
                    types: [
                        {id:'0',itemname:'DatePicker',itemdescription:'<DatePicker className="Date" placeholderText="FROM" minDate={moment()} maxDate={moment().add(1, "years")} />',itemmodel:'DatePicker'}
                    ]
                },
                Searchbox:{
                    name:'Searchbox',
                    description:'The <input> tag specifies an input field where the user can enter data.<input> elements are used within a <form> element to declare input controls that allow users to input data.',
                    types: [
                        {id:'0',itemname:'Searchbox',itemdescription:' <input  type="text"  placeholder="Enter the name of hotel"  />',itemmodel:'Searchbox'}
                    ]
                },
                Logo:{
                    name:'Logo',
                    description:'The <img> tag defines an image in an HTML page.The <img> tag has two required attributes: src and alt.',
                    types: [
                        {id:'0',itemname:'Logo',itemdescription:'<img className="logo" src="../images/WebLogo.png" alt="hotel logo"/>',itemmodel:'Logo'}
                    ]
                }
            },
            selecteditem:'Button'
        }
    }

    updateState = (selecteditem) => {
        document.getElementsByClassName("item-sub-type-heading")[0].innerHTML="";
        document.getElementsByClassName("item-sub-type-body")[0].innerHTML="";
        this.setState({selecteditem})
    }

    render()
    {
        return(              
            <div>
                <div>
                    <Header navText="Home" link="/"/>
                </div>
                <div  className="navigator">
                    <div className="side-Nav">
                        <Side content={this.state.items} selected={this.state.selecteditem} updateState={this.updateState}/>
                    </div>
                    <div className="content-Area">
                        <Display content={this.state.items[this.state.selecteditem]} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Documentation;