import request from "../../../services/request"
import constants from "./actionConstants";

const {
    FETCH_DATA,
    SELECT_SHOP,
    LOADING,
    ERROR
} = constants


export function fetchData() {
    //CAN IMPLEMENT LOADING AND ERROR HANDLING ACTIONS AS WELL LATER
    return (dispatch) => {
        dispatch({
            type: LOADING,
            payload: true
        })
        request.get('comparison.json', (data) => {
            dispatch({
                type: FETCH_DATA,
                payload: data
            });
        }, (error)=> {
            dispatch({
                type: ERROR,
                payload: error
            })
        })
    };
}

export function selectShop(index) {
    return (dispatch) => {
        dispatch({
            type: SELECT_SHOP,
            index
        })
    }
}



const ACTION_HANDLERS = {
    FETCH_DATA: handleFetchData,
    SELECT_SHOP: handleSelectShop,
    LOADING: handleLoading,
    ERROR: handleError
}

function handleError(state, action) {
    return {
        ...state, error: action.payload
    }
}

function handleLoading(state, action) {
    return {
        ...state, loading: action.payload
    }
}

function handleFetchData(state, action) {
    return {
        ...state, 
        shops: action.payload,
        loading: false
    }
}

function handleSelectShop(state, action) {
    return {
        ...state, selectedShopIndex: action.index
    }
}

const initialState = {
    shops: [],
    selectedShopIndex: null,
    loading: false,
    error: {}
};

export default function homeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
