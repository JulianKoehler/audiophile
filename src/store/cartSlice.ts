import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
  slug: string;
}

interface AdjustItemQuantityPayload {
  id: number;
  quantity: number;
}

export interface CartState {
  items: ICartItem[];
  totalQuantity: number;
  totalSum: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalSum: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      const newItem = action.payload;
      const itemInCart = state.items.find(item => item.id === newItem.id);

      if (!itemInCart) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: newItem.quantity,
          category: newItem.category,
          slug: newItem.slug,
        });
      } else {
        itemInCart.quantity += newItem.quantity;
      }

      state.totalQuantity += newItem.quantity;
      state.totalSum += newItem.quantity * newItem.price;
    },
    adjustCartItemQuantity: (state, action: PayloadAction<AdjustItemQuantityPayload>) => {
      const { id, quantity } = action.payload;
      const cartItem = state.items.find(item => item.id === id);
      cartItem!.quantity = quantity;

      if (cartItem!.quantity < 1) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity--;
        state.totalSum -= cartItem!.price;
      } else {
        state.totalQuantity = state.items.reduce((total, item) => (total += item.quantity), 0);
        state.totalSum = state.items.reduce((total, item) => (total += item.quantity * item.price), 0);
      }
    },
    clearCart: () => initialState,
    setCartData: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalSum = action.payload.totalSum;
    },
  },
});

export const { addItemToCart, adjustCartItemQuantity, clearCart, setCartData } = cartSlice.actions;

export default cartSlice.reducer;
