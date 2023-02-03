import { VStack } from "@chakra-ui/react";
import Product from "../../types/Product";
import About from "../About/About";
import CategoryCards from "../CategoryCards/CategoryCards";
import LocalHeader from "../Header/LocalHeader";
import ProductPreviewArticle from "../ProductCards/CategoryPage/ProductPreviewArticle";

type Props = {
  productData: Product[];
  pageHeading: "headphones" | "speakers" | "earphones";
};

/** TODO:
 *
 * Figure out how to pass the whole image object to the ProductPreviewArticle Component and make a srcset
 * to pick the image responsiveley.
 */

const ProductCategoryPageLayout = ({ productData, pageHeading }: Props) => {
  const sortedData = productData.sort((product: Product) => (product.new ? -1 : 1));

  const productCards = sortedData.map((product: Product, index: number) => (
    <ProductPreviewArticle
      key={product.id}
      image={product.image.desktop}
      isNew={product.new}
      name={product.name}
      description={product.description}
      linkToProduct={product.slug}
      index={index}
    />
  ));

  return (
    <>
      <LocalHeader
        color="white"
        p="9.8rem">
        <h2>{pageHeading}</h2>
      </LocalHeader>
      <VStack
        as="main"
        gap="16rem"
        my="16rem"
        w="100%"
        px="16.5rem"
        alignItems="center">
        {productCards}
        <CategoryCards />
        <About />
      </VStack>
    </>
  );
};

export default ProductCategoryPageLayout;
