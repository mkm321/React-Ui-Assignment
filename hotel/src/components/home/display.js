import React from 'react';
import moment from 'moment';
import StarRatingComponent from 'react-star-rating-component';
import ActivityIndicator from 'react-activity-indicator';
import 'react-activity-indicator/src/activityindicator.css';

const Display = ({ available, partiallyAvailable, notAvailable, fromDate, toDate }) => {

    function displayAvailableDates(buttonClassName, fromDate, toDate, list) {
        if (buttonClassName === "available-button") {
            if (fromDate.format("YYYY-MM-DD") === toDate.format("YYYY-MM-DD")) {
                return (
                    <div className="dates"><div className="to-from">On : </div>{fromDate.format("MM-DD-YYYY")}</div>
                );
            } else {
                return (
                    <div>
                        <div className="dates">
                            <div className="to-from">From:</div>
                            {fromDate.format("MM-DD-YYYY")}
                        </div>
                        <div className="dates">
                            <div className="to-from">To:</div>
                            {toDate.format("MM-DD-YYYY")}
                        </div>
                    </div>
                );
            }
        } else if (buttonClassName === "partially-available-button") {
            const from = list.data().fromDate > fromDate.format("YYYY-MM-DD") ? moment(list.data().fromDate).format("MM-DD-YYYY") : fromDate.format("MM-DD-YYYY");
            const to = list.data().toDate > toDate.format("YYYY-MM-DD") ? toDate.format("MM-DD-YYYY") : moment(list.data().toDate).format("MM-DD-YYYY");
            if (from === to) {
                return (
                    <div className="dates"><div className="to-from">On : </div>{from}</div>
                );
            }
            else {
                return (
                    <div>
                        <div className="dates">
                            <div className="to-from">From : </div>{from}
                        </div>
                        <div className="dates">
                            <div className="to-from">To : </div>{to}
                        </div>
                    </div>
                );
            }
        }
    }

    function renderHotels(list, buttonClassName, buttonText) {
        if (list) {
            return list.map(hotel => {
                return (
                    <div className="Inside-display" key={hotel.data().name}>
                        <div className="HotelLogo">
                            <img className="LogoImg" src={`../../images/${hotel.data().logo}`} alt={hotel.data().altLogo} />
                        </div>
                        <div className="HotelNameRatings">
                            <div className="HotelName">{hotel.data().name}</div>
                            <div className="HotelAddress">{hotel.data().address}</div>
                            <div className="rating">
                                <StarRatingComponent
                                    name={"star rating"}
                                    value={hotel.data().rating}
                                    starCount={5}
                                    starColor={"#ffb400"}
                                    size={40}
                                    emptyStarColor={"FFFFFF"}
                                    editing={false}
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <button className={buttonClassName}>{buttonText}</button>
                            {(fromDate && toDate) ? displayAvailableDates(buttonClassName, fromDate, toDate, hotel) : <br />}
                        </div>
                    </div>
                );
            });
        }
    }

    if (available === "" && partiallyAvailable === "" && notAvailable === "") {
        return (
            <ActivityIndicator
                number={7}
                duration={200}
                activeColor="#0070BF"
                borderWidth={2}
                borderRadius="50%"
                diameter={25}
            />
        );
    } else if(available.length === 0 && partiallyAvailable.length === 0 && notAvailable.length === 0) {
        return <div className="no-match">No Hotels Found</div>
    } else {
        return (
            <div>
                {renderHotels(available, "available-button", (fromDate.format("YYYY-MM-DD") !== moment().format("YYYY-MM-DD")) ? "Book Now" : "Book For Today")}
                {renderHotels(partiallyAvailable, "partially-available-button", "Partially Available!")}
                {renderHotels(notAvailable, "not-available-button", "Not Available")}
            </div>
        );
    }
}

export default Display;