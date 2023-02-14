import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ProductDetailPageLayout from "../components/Layout/ProductDetailPageLayout";
import firebaseConfig from "../firebase";
import Product from "../types/Product";
import { getProductData } from "../util/httpRequests";

const ProductDetails = () => {
  const productData = useLoaderData() as Product[];

  return <ProductDetailPageLayout product={productData[0]} />;
};

export default ProductDetails;

export async function loader({ params }: LoaderFunctionArgs) {
  const productSlug = params.productSlug;

  const query = `?orderBy="slug"&equalTo="${productSlug}"`;
  return await getProductData(firebaseConfig.dbProductsBySlug, query);
}
