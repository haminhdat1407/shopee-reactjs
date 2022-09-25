const { createSlice } = require('@reduxjs/toolkit');

const productSlice = createSlice({
  name: 'productList',

  initialState: {
    productList: [],
    totalProduct: 0,
  },
  reducers: {
    setProductList(state, action) {
      const productList = action.payload;
      state.productList = productList;
    },
    setTotalProduct(state, action) {
      const totalProduct = action.payload;
      state.totalProduct = totalProduct;
    },
  },
});

const { actions, reducer } = productSlice;

export const { setProductList, setTotalProduct } = actions;
export default reducer;
