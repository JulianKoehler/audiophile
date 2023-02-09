import firebaseConfig from "../firebase";
import { CartState, setCartData } from "./cartSlice";
import { Dispatch } from "redux";
import Order from "../types/Order";
import { orderStatus, setOrderData, setOrderStatus } from "./orderSlice";

export function sendCartData(cartData: CartState) {
  return async () => {
    async function sendRequest() {
      const res = await fetch(firebaseConfig.dbCartData, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });

      if (!res.ok) {
        throw new Error("Could not set cart data");
      }
    }

    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
}

export function getCartData() {
  return async (dispatch: Dispatch) => {
    async function getData() {
      const res = await fetch(firebaseConfig.dbCartData);

      if (!res.ok) {
        throw new Error("Could not get cart data");
      }

      return await res.json();
    }

    try {
      const cartData = await getData();

      dispatch(
        setCartData({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalSum: cartData.totalSum,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
}

export function sendOrder(orderData: Order) {
  return async (dispatch: Dispatch) => {
    async function sendRequest() {
      const res = await fetch(firebaseConfig.dbOrders, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) {
        throw new Error("Could not send order");
      }
    }

    try {
      dispatch(
        setOrderData({
          orderNumber: orderData.orderNumber,
          orderStatus: orderStatus.SENDING,
          items: orderData.items,
          grandTotal: orderData.grandTotal,
        })
      );
      await sendRequest();
      dispatch(setOrderStatus(orderStatus.SUCCESS));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      }
      dispatch(setOrderStatus(orderStatus.FAILED));
    }
  };
}
