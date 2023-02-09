import { ICartItem } from "../store/cartSlice";

interface Order {
  orderNumber: number | string;
  orderDate: string;
  items: ICartItem[];
  grandTotal: number;
  name: string;
  email: string;
  phone?: string;
  address: string;
  zip: string | number;
  city: string;
  country: string;
}

export default Order;
