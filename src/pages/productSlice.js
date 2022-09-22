const { createSlice } = require('@reduxjs/toolkit');

const productSlice = createSlice({
  name: 'productList',

  initialState: {
    productList: [],
  },
  reducers: {
    setProductList(state, action) {
      const productList = action.payload;
      state.productList = productList;
    },
  },
});

const { actions, reducer } = productSlice;

export const { setProductList } = actions;
export default reducer;
