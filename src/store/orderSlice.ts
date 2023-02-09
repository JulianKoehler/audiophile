import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "./cartSlice";

export enum orderStatus {
  NOT_SENT,
  SENDING,
  SUCCESS,
  FAILED,
}

interface OrderState {
  orderNumber: string | number;
  orderStatus: orderStatus;
  items: ICartItem[];
  grandTotal: number | undefined;
}

const initialState: OrderState = {
  orderNumber: "",
  orderStatus: orderStatus.NOT_SENT,
  items: [],
  grandTotal: undefined,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderData(state, action: PayloadAction<OrderState>) {
      state.orderNumber = action.payload.orderNumber;
      state.orderStatus = action.payload.orderStatus;
      state.items = action.payload.items;
      state.grandTotal = action.payload.grandTotal;
      console.log(state);
    },
    setOrderStatus(state, action: PayloadAction<orderStatus>) {
      state.orderStatus = action.payload;
    },
  },
});

export const { setOrderData, setOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
