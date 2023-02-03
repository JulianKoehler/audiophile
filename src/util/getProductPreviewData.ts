import { json } from "react-router-dom";
import firebaseConfig from "../firebase";

async function getProductData(query: string = "") {
  try {
    const res = await fetch(firebaseConfig.dbURL + query);

    if (!res.ok) {
      throw json({
        message: "Could not load headphones",
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

export default getProductData;
