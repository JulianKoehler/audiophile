import { Card, VStack } from "@chakra-ui/react";
import { json, useLoaderData } from "react-router-dom";
import About from "../components/About/About";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import LocalHeader from "../components/Header/LocalHeader";
import ProductPreviewCard from "../components/ProductCards/CategoryPage/ProductPreviewCard";
import firebaseConfig from "../firebase";

const Headphones = () => {
  const productData = useLoaderData() as any;

  const productCards = productData.map((product: any) => {
    return <ProductPreviewCard />;
  });

  return (
    <>
      <LocalHeader
        color="white"
        p="9.8rem">
        <h2>headphones</h2>
      </LocalHeader>
      <VStack
        as="main"
        gap="16rem"
        my="16rem">
        {productCards}
        <CategoryCards />
        <About />
      </VStack>
    </>
  );
};

export default Headphones;

export async function loader() {
  const query = `?orderBy="category"&equalTo="headphones"`;

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
