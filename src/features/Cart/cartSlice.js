const { createSlice, current } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    cartItem: [],
    quantity: 1,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const index = state.cartItem.findIndex((x) => {
        return current(x).id === newItem.data.id;
      });
      if (index >= 0) {
        state.cartItem[index].quantity += newItem.quantity;
      } else {
        state.cartItem.push(newItem);
      }
    },

    setQuantity(state, action) {
      const { quantity } = action.payload;
      state.quantity = quantity;
    },

    removeFromCart(state, action) {
      const idNeedToRemove = state.cartItem.filter((cartItem) => cartItem.id !== action.payload.id);
      state.cartItem = idNeedToRemove;
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addToCart, setQuantity, removeFromCart } = actions;
export default reducer;
