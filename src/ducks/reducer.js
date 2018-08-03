let initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    img: "",
    mortgageAmt: 0,
    rent: 0
    // redirect: false
}

// STRING CONSTANTS
const ADD_NAME = "ADD_NAME"
const ADD_ADDRESS = "ADD_ADDRESS"
const ADD_CITY = "ADD_CITY"
const ADD_STATE = "ADD_STATE"
const ADD_ZIP = "ADD_ZIP"
const FORM_ONE_DATA = "FORM_ONE_DATA"
const ADD_IMG_URL = "ADD_IMG_URL"
const ADD_MORT = "ADD_MORT"
const ADD_RENT = "ADD_RENT"
// const ADD_REDIRECT = "ADD_REDIRECT"


//Action Creators
export function addName(name) {
        return {
            type: ADD_NAME,
            payload: name
        }
    }

    export function addAddress(address) {
        return {
            type: ADD_ADDRESS,
            payload: address
        }
    }

    export function addCity(city) {
        return {
            type: ADD_CITY,
            payload: city
        }
    }

    export function addState(state) {
        return {
            type: ADD_STATE,
            payload: state
        }
    }

    export function addZip(zip) {
        return {
            type: ADD_ZIP,
            payload: zip
        }
    }

    export function addImg(url){
        return {
            type: ADD_IMG_URL,
            payload: url
        }
    }

    // export function formOneData (name, address, city, state, zip){
    //     return{
    //     type: FORM_ONE_DATA,
    //     payload: {
    //         name:name,
    //         address:address,
    //         city:city,
    //         state:state,
    //         zip:zip
    //     }
    // }
    // }

    export function addMort(mort){
        return{
            type: ADD_MORT,
            payload: mort
        }
    }

    export function addRent(rent){
        return{
            type: ADD_RENT,
            payload: rent
        }
    }


//Reducer Fxn

export default function reducer(state = initialState, action) {
    console.log('REDUCER HIT: Action ->', action);
    switch (action.type) {
        case ADD_NAME:
            return Object.assign({}, state, { name: action.payload });
        case ADD_ADDRESS:
            return Object.assign({}, state, { address: action.payload });
        case ADD_CITY:
            return Object.assign({}, state, { city: action.payload });
        case ADD_STATE:
            return Object.assign({}, state, { state: action.payload });
        case ADD_ZIP:
            return Object.assign({}, state, { zip: action.payload });
        case ADD_IMG_URL:
            return Object.assign({}, state, { img: action.payload });
        case ADD_MORT:
            return Object.assign({}, state, { mortgageAmt: action.payload });
        case ADD_RENT:
            return Object.assign({}, state, { rent: action.payload });
        case FORM_ONE_DATA:
            return Object.assign({}, state, { form_one: action.payload });
        default:
            return state
    }
}








// JUNK YARD - I love this code but simultaneously hate it and refuse to delete it at this time











    //STRING CONSTANTS
// const INPUT_CHANGER = "handleInputChange"
// const RESET_FORM = "handleReset"
// const ADD_HOUSE = "handleAddHouse"


//ACTION CREATORS

// export function addHouse(house) {
//     return {
//         type: ADD_HOUSE,
//         payload: house
//     }
// }

// export function inputUpdate1(input) {
//     return {
//         type: INPUT_CHANGER,
//         payload: input
//     }
// }

// export function resetForm(form) {
//     return {
//         type: RESET_FORM,
//         payload: form
//     }
// }

// 
        // case ADD_HOUSE:
        //     return Object.assign({}, state, { house: action.payload });
        // case INPUT_CHANGER:
        //     return Object.assign({}, state, { input: action.payload });
        // case RESET_FORM:
        //     return Object.assign({}, state, { form: action.payload });