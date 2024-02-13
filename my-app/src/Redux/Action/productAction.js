import axios from "axios"
import * as actionTypes from '../constant/productConstant.js'
const Url = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${Url}/products`);
        // console.log(data);
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCES, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message })
    }
};

export const getProductDetails=(id)=>async (dispatch)=>{
    try {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const  {data}  = await axios.get(`${Url}/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message }) 
    }
}