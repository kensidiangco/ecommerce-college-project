import { createSlice } from "@reduxjs/toolkit";
import _, { map } from 'underscore'
import destr from 'destr'

const initialState = {
  items: [],
  products: null,
  filteredProducts: null
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload
      state.filteredProducts = action.payload
    },
    updateFilters: (state, action) => {
      state.filteredProducts = action.payload
    },
    clearFilters: (state) => {
      state.filteredProducts = state.products
    },
    addToCart: (state, action) => {
      const index = state.items.findIndex(cartItem => _.isEqual(destr(JSON.stringify(cartItem.variation)), action.payload.variation))
      if(action.payload.quantity > 0){
        if(index >= 0){
          state.items[index].quantity += action.payload.quantity
        }else{
          state.items = [...state.items, action.payload]
        }
      }
    },
    updateQuantity: (state, action) => {
      const index = state.items.findIndex(cartItem => cartItem.id === action.payload.id)
      
      if(index >= 0) {
        if(action.payload.quantity > 0){
          state.items[index].quantity = action.payload.quantity
        }else {
          let newCart = [...state.items]
          newCart.splice(index, 1)
          state.items = newCart
        }
      }
      else console.warn(`Can't remove product ${action.payload.id} as its does not exist!`)
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(cartItem => cartItem.id == action.payload.id)
      let newCart = [...state.items]

      if(index >= 0) newCart.splice(index, 1)
      else console.warn(`Can't remove product ${action.payload.id} as its does not exist!`)

      state.items = newCart
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, addProducts, updateFilters, clearFilters } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const selectProducts = (state) => state.cart.products;
export const selectFilteredProducts = (state) => state.cart.filteredProducts;
export const selectTotal = (state) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectTotalItems = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);

export default cartSlice.reducer;