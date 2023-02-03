import { useLoaderData } from "react-router-dom";
import ProductCategoryPageLayout from "../components/Layout/ProductCategoryPageLayout";
import Product from "../types/Product";
import getProductData from "../util/getProductPreviewData";

const Speakers = () => {
  const productData = useLoaderData() as Product[];

  return (
    <ProductCategoryPageLayout
      productData={productData}
      pageHeading="speakers"
    />
  );
};

export default Speakers;

export async function loader() {
  const query = `?orderBy="category"&equalTo="speakers"`;
  return await getProductData(query);
}
