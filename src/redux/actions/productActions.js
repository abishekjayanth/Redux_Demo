import { SELECTED_PRODUCTS, SET_PRODUCTS, REMOVE_SELECTED_PRODUCTS } from "../constants/actionTypes"
import { get } from "../../services/http.svc"

export const setProducts = () => async (dispatch) => {
    const result = await get('/products')
    dispatch({
        type: SET_PRODUCTS,
        payload: result
    })
}

export const setSelectedProduct = (productId) => async (dispatch) => {
    const result = await get(`/products/${productId}`)
    dispatch({
        type: SELECTED_PRODUCTS,
        payload: result
    })
}

export const removeSelectedProduct = () => {
    return {
        type: REMOVE_SELECTED_PRODUCTS,
    }
}