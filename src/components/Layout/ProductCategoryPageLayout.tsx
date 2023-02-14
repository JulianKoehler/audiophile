import { Text, VStack } from "@chakra-ui/react";
import useBreakpoint from "../../hooks/useBreakpoint";
import Product from "../../types/Product";
import About from "../About/About";
import CategoryCards from "../CategoryCards/CategoryCards";
import LocalHeader from "../Header/LocalHeader";
import ProductPreviewArticle from "../ProductCards/CategoryPage/ProductPreviewArticle";

type Props = {
  productData: Array<Product>;
  pageHeading: "headphones" | "speakers" | "earphones";
};

const ProductCategoryPageLayout = ({ productData, pageHeading }: Props) => {
  const sortedData = productData.sort((product: Product) => (product.new ? -1 : 1));
  const { large, medium } = useBreakpoint();

  const productCards = sortedData.map((product: Product, index: number) => {
    const imageSrc = large
      ? product.categoryImage.desktop
      : medium
      ? product.categoryImage.tablet
      : product.categoryImage.mobile;

    return (
      <ProductPreviewArticle
        key={product.id}
        image={imageSrc}
        isNew={product.new}
        name={product.name}
        description={product.description}
        linkToProduct={product.slug}
        index={index}
      />
    );
  });

  return (
    <>
      <LocalHeader
        color="white"
        p="9.8rem">
        <Text
          as="h2"
          color="white">
          {pageHeading}
        </Text>
      </LocalHeader>
      <VStack
        as="main"
        gap={{
          lg: "16rem",
          sm: "12rem",
        }}
        my="16rem"
        w="100%"
        px={{
          lg: "16.5rem",
          md: "4rem",
        }}
        alignItems="center">
        {productCards}
        <CategoryCards />
        <About />
      </VStack>
    </>
  );
};

export default ProductCategoryPageLayout;
