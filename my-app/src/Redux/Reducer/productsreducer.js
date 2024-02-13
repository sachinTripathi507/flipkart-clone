import * as actionTypes from '../constant/productConstant.js'



export const getProductsReducer = (state = { products: [] }, action) => {

    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCES:

            return { products: action.payload }

        case actionTypes.GET_PRODUCT_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
};

export const getProductsDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }

        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }

        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return { product: {} }

        default:
            return state;
    }
}