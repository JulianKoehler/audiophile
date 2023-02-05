import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
  slug: string;
}

interface AdjustItemQuantityPayload {
  id: string | number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
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
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
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
        state.totalQuantity -= quantity;
        state.totalSum -= cartItem!.price * quantity;
      }
    },
    clearCart: () => initialState,
  },
});

export const { addItemToCart, adjustCartItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
