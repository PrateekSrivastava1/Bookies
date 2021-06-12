export const initialState = {
  cart: [],
};

export const getTotalAmount = (cart) => {
    cart?.reduce((amount, item) => item.price + amount, 0);
}

const Reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    default:
      return state;
  }
};

export default Reducer;
