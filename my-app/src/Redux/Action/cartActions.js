import axios from "axios";
import * as actionType from '../constant/cartConstants.js'
const Url = 'http://localhost:8000';


export const addCart = (id,quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${Url}/product/${id}`)
        dispatch({ type: actionType.ADD_TO_CART, payload: {...data,quantity} })
    } catch (error) {
        dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
    }
};

export const deleteItemFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionType.REMOVE_FROM_CART,
        payload: id
    })
};