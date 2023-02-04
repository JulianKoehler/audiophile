import { useLoaderData } from "react-router-dom";
import ProductCategoryPageLayout from "../components/Layout/ProductCategoryPageLayout";
import firebaseConfig from "../firebase";
import Product from "../types/Product";
import { getProductData } from "../util/httpRequests";

const Earphones = () => {
  const productData = useLoaderData() as Product[];

  return (
    <ProductCategoryPageLayout
      productData={productData}
      pageHeading="earphones"
    />
  );
};

export default Earphones;

export async function loader() {
  const query = `?orderBy="category"&equalTo="earphones"`;
  return await getProductData(firebaseConfig.dbProductsByCategory, query);
}
