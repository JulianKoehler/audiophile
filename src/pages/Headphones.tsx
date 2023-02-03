import { useLoaderData } from "react-router-dom";
import ProductCategoryPageLayout from "../components/Layout/ProductCategoryPageLayout";
import Product from "../types/Product";
import getProductData from "../util/getProductPreviewData";

const Headphones = () => {
  const productData = useLoaderData() as Product[];

  return (
    <ProductCategoryPageLayout
      productData={productData}
      pageHeading="headphones"
    />
  );
};

export default Headphones;

export async function loader() {
  const query = `?orderBy="category"&equalTo="headphones"`;
  return await getProductData(query);
}
