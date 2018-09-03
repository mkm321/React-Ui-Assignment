import React from 'react';
import Footer from '../common/footer';

const display = (props) =>{
    var a;
    var setvisibility = (i) => {
        props.content.types.map((item) => {
            
            if(item.id===i) {
                document.getElementsByClassName("item-sub-type-heading")[0].innerHTML=document.getElementsByClassName("item-model")[item.id].innerHTML;
                document.getElementsByClassName("item-model")[item.id].style.display="none";
                document.getElementsByClassName("item-description")[item.id].style.display="none";
                a=item.id;
                document.getElementsByClassName("item-sub-type-body")[0].innerHTML="";
            }

            else {
                document.getElementsByClassName("item-model")[item.id].style.display="none";
                document.getElementsByClassName("item-description")[item.id].style.display="none";
            }

            if(document.getElementsByClassName("item-sub-type-heading")[0].innerHTML==="Book Now"){
                document.getElementsByClassName("item-sub-type-heading")[0].innerHTML='<button class="book-now">Book Now</button>';
            }

            else if(document.getElementsByClassName("item-sub-type-heading")[0].innerHTML==="Book On Available"){
                document.getElementsByClassName("item-sub-type-heading")[0].innerHTML='<button class="book-on-avail">Book On Available</button>';
            }

            else if(document.getElementsByClassName("item-sub-type-heading")[0].innerHTML==="Not Available"){
                document.getElementsByClassName("item-sub-type-heading")[0].innerHTML='<button class="not-avail">Not Available</button>';
            }

             else if(document.getElementsByClassName("item-sub-type-heading")[0].innerHTML==="Search"){
                document.getElementsByClassName("item-sub-type-heading")[0].innerHTML='<button class="search">Search</button>';
            }

             else if(document.getElementsByClassName("item-sub-type-heading")[0].innerHTML==="Logo"){
                document.getElementsByClassName("item-sub-type-heading")[0].innerHTML='<img class="logo-image" src="../../images/c.png" alt="logo"/>';
            }

            else if(document.getElementsByClassName("item-sub-type-heading")[0].innerHTML==="DatePicker"){
                document.getElementsByClassName("item-sub-type-heading")[0].innerHTML='<input type="date"/>'
            }

            else if(document.getElementsByClassName("item-sub-type-heading")[0].innerHTML==="Searchbox"){
                document.getElementsByClassName("item-sub-type-heading")[0].innerHTML='<input type="text" class="searchbox" placeholder="Enter the name of the hotel"/>';
            }
        })
    }
    
    var looping = (item) => {
    return item.map((i) => {
        return (
                <div className="primary-container">
                    <button className="item-name" onClick={()=>setvisibility(i.id)}>{i.itemname}</button>
                </div>
        )
    })
   } 

var looping2 = (item) => {
    return item.map((i) => {
        return (
                <div className="button-container">
                    <div className="primary-button">
                        <button className="item-model">{i.itemmodel}</button>
                         <div className="item-description">{i.itemdescription}</div>
                    </div>
                 </div>
        )
    })
   }

var fun = () => {
  console.log(document.getElementsByClassName("item-description")[0].innerHTML);
  document.getElementsByClassName("item-sub-type-body")[0].innerHTML=document.getElementsByClassName("item-description")[a].innerHTML;
}

var restorecontent = () => {
    a=0;
    document.getElementsByClassName("item-sub-type-heading").innerHTML="";
    document.getElementsByClassName("item-sub-type-body").innerHTML="";
}

    return (
        <div className="main-conatiner">
                {restorecontent()}
                <h1 className="heading">{props.content.name}</h1>
                <div className="description">{props.content.description}</div>
                <div className="item-types">{looping(props.content.types)}</div>
                {looping2(props.content.types)}
                <div className="resultcontainer">
                    <div className="item-sub-type-heading" onClick={()=>fun()}></div>
                    <div className="item-sub-type-body"></div>
                </div>
                <Footer/>
        </div>
    )
}

export default display;




