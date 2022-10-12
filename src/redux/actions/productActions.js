import { SELECTED_PRODUCTS, SET_PRODUCTS, REMOVE_SELECTED_PRODUCTS } from "../constants/actionTypes"

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const setSelectedProduct = (product) => {
    return {
        type: SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: REMOVE_SELECTED_PRODUCTS,
    }
}