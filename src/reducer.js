const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INC_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case "DEC_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, qty: item.qty - 1 } : item
        ),
      };
    default:
      return state;
  }
};

export default reducer;
