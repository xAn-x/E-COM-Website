import * as ProductActions from "../Constants/productConstants";

// If we call and action return nothing in that case our application can break so we return an expty array in that case
export function getProductsReducer(state = { products: [] }, action) {
  switch (action.type) {
    case ProductActions.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case ProductActions.GET_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
}

//In this case we want signle product only which will be an object and not array
export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ProductActions.GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case ProductActions.GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ProductActions.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ProductActions.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
