import firebase from "firebase";
import moment from "moment";
import { UPDATE_FORM, FILTER_HOTELS } from "./types";

const config = {
    apiKey: "AIzaSyCu7m5w1sQTJY2jiIcuT5Kmn7lM5TwPgvU",
    authDomain: "comfystay-121fc.firebaseapp.com",
    databaseURL: "https://comfystay-121fc.firebaseio.com",
    projectId: "comfystay-121fc",
    storageBucket: "comfystay-121fc.appspot.com",
    messagingSenderId: "611163272406"
};
firebase.initializeApp(config);
const db= firebase.firestore();


export const updateName = (hotelName) => {
    return {
        type: UPDATE_FORM,
        payload: {
            hotelName
        } 
    };
}

export const updateFromDate = (fromDate, toDate, disabledToDate) => {
    return {
        type: UPDATE_FORM,
        payload: {
            fromDate,
            toDate,
            disabledToDate
        }
    };
}

export const updateToDate = (toDate) => {
    return {
        type: UPDATE_FORM,
        payload: {
            toDate
        }
    };
}

export const getHotels = () => {
    return dispatch => {
        db.collection("hotels").orderBy("name").get()
            .then(list => {
                const available = filterAvailableHotels("", moment(), moment(), list);
                const notAvailable = filterNotAvailableHotels("", moment(), moment(), list);
                dispatch({
                    type: FILTER_HOTELS,
                    payload: {
                        available,
                        notAvailable,
                        list
                    }
                });
            });
    };
}

export const searchHotels = ({ hotelName, fromDate, toDate, list }) => {
    if(hotelName === undefined)
        hotelName = "";
    if((fromDate === null && toDate === null) || (fromDate === undefined && toDate === undefined))
        fromDate = toDate = moment();

    const available = filterAvailableHotels(hotelName, fromDate, toDate, list);
    const partiallyAvailable = filterPartiallyAvailableHotels(hotelName, fromDate, toDate, list);
    const notAvailable = filterNotAvailableHotels(hotelName, fromDate, toDate, list);
    return {
        type: FILTER_HOTELS,
        payload: {
          available,
          partiallyAvailable,
          notAvailable,
          fromDate,
          toDate,
          displayAvailableDates: true
        }
    };
}

const filterAvailableHotels = (name, fromDate, toDate, list) => {
    return list.docs.filter(hotel => {
        return ( 
            hotel.data().name.match(new RegExp(name, 'i')) && ( 
                fromDate !== "" ? (
                  hotel.data().fromDate <= fromDate.format("YYYY-MM-DD") && 
                  hotel.data().toDate >= toDate.format("YYYY-MM-DD")
                ) : true
            )
        );
    });
}

const filterPartiallyAvailableHotels = (name, fromDate, toDate, list) => {
    return list.docs.filter(hotel => {
        return (
            hotel.data().name.match(new RegExp(name, 'i')) && (
                fromDate !== "" ? (
                    (
                        hotel.data().fromDate <= fromDate.format("YYYY-MM-DD") && 
                        hotel.data().toDate >= fromDate.format("YYYY-MM-DD") && 
                        hotel.data().toDate < toDate.format("YYYY-MM-DD")
                    ) || (
                        hotel.data().fromDate <= toDate.format("YYYY-MM-DD") && 
                        hotel.data().toDate >= toDate.format("YYYY-MM-DD") && 
                        hotel.data().fromDate > fromDate.format("YYYY-MM-DD")
                    )
                ) : false
            )
        );
    });
}

const filterNotAvailableHotels = (name, fromDate, toDate, list) => {
    return list.docs.filter(hotel => {
        return (
            hotel.data().name.match(new RegExp(name, 'i')) && !(
                fromDate !== "" ? (
                    (
                        hotel.data().fromDate <= fromDate.format("YYYY-MM-DD") && 
                        hotel.data().toDate >= fromDate.format("YYYY-MM-DD") && 
                        hotel.data().toDate < toDate.format("YYYY-MM-DD")
                    ) || (
                        hotel.data().fromDate <= toDate.format("YYYY-MM-DD") && 
                        hotel.data().toDate >= toDate.format("YYYY-MM-DD") && 
                        hotel.data().fromDate > fromDate.format("YYYY-MM-DD")
                    ) || (
                        hotel.data().fromDate <= fromDate.format("YYYY-MM-DD") && 
                        hotel.data().toDate >= toDate.format("YYYY-MM-DD")
                    )
                ) : true
            )
        )
    });
}
