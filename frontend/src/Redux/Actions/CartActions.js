import * as cartActions from "../Constants/cartConstants";
import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/product/${id}`);

    dispatch({
      type: cartActions.ADD_TO_CART_SUCCESS,
      payload: { ...data, quantity },
    });
  } catch (error) {
    dispatch({
      type: cartActions.ADD_TO_CART_FAIL,
      payload: { error: error.message },
    });
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: cartActions.REMOVE_FROM_CART,
    payload: id,
  });
};
