import { json } from "react-router-dom";

export async function getProductData(db: string, query: string = "") {
  try {
    const res = await fetch(db + query);

    if (!res.ok) {
      throw json({
        message: "Could not load product data",
        status: res.status,
        statusText: res.statusText,
      });
    }

    const resData = await res.json();
    return Object.values(resData);
  } catch (err) {
    console.log(err);
    return err;
  }
}
