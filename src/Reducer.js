import CartItems from "./CartItems";

export const initialState = {
  cart: [],
  user: null
};

export const getTotalAmount = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const Reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const i = state.cart.findIndex((CartItems) => CartItems.id === action.id);
      let newCart = [...state.cart];
      if (i >= 0) {
        newCart.splice(i, 1);
      } else {
        console.warn(`Can't remove it, this item is not present in the cart`);
      }
      return {
        ...state,
        cart: newCart
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "EMPTY_CART":
      return{
        ...state,
        cart: []
      }
    default:
      return state;
  }
};

export default Reducer;
