const { createSlice, current } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      state.cartItem.push(newItem);
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      //check if product is available in cart
      const index = state.cartItem.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItem = state.cartItem.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addToCart, setQuantity, removeFromCart } = actions;
export default reducer;
