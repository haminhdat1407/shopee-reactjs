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
        //inscrease quantity
        state.cartItem[index].quantity += newItem.quantity;
      } else {
        //add to cart
        state.cartItem.push(newItem);
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      state.quantity = quantity;
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== idNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addToCart, setQuantity, removeFromCart } = actions;
export default reducer;
