import { Suspense } from "react";
import { Await, defer, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import ProductDetailPageLayout from "@/components/Layout/ProductDetailPageLayout";
import firebaseConfig from "@/firebase";
import Product from "@/types/Product";
import { getProductData } from "@/util/httpRequests";

const ProductDetails = () => {
  const { product } = useLoaderData() as { product: Product[] };

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Await resolve={product}>
        {loadedProduct => <ProductDetailPageLayout product={loadedProduct[0]} />}
      </Await>
    </Suspense>
  );
};

export default ProductDetails;

export async function loader({ params }: LoaderFunctionArgs) {
  const productSlug = params.productSlug;

  return defer({
    product: await loadProductData(productSlug),
  });
}

async function loadProductData(productSlug: string | undefined) {
  const query = `?orderBy="slug"&equalTo="${productSlug}"`;
  return await getProductData(firebaseConfig.dbProductsBySlug, query);
}
