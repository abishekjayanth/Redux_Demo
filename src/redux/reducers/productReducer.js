import { SET_PRODUCTS, SELECTED_PRODUCTS, REMOVE_SELECTED_PRODUCTS } from "../constants/actionTypes";

const initialState = {
    productList: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                productList: action.payload
            }
        case SELECTED_PRODUCTS:
            return {
                ...state,
                selectedProduct: action.payload
            }
        case REMOVE_SELECTED_PRODUCTS:
            return {
                ...state,
                selectedProduct: null
            }
        default:
            return state
    }
}