import { Text, useMediaQuery, VStack } from "@chakra-ui/react";
import Product from "../../types/Product";
import About from "../About/About";
import CategoryCards from "../CategoryCards/CategoryCards";
import LocalHeader from "../Header/LocalHeader";
import ProductPreviewArticle from "../ProductCards/CategoryPage/ProductPreviewArticle";

type Props = {
  productData: Product[];
  pageHeading: "headphones" | "speakers" | "earphones";
};

const ProductCategoryPageLayout = ({ productData, pageHeading }: Props) => {
  const sortedData = productData.sort((product: Product) => (product.new ? -1 : 1));
  const [lg] = useMediaQuery("(min-width: 73rem)");
  const [md] = useMediaQuery("(min-width: 45rem)");

  const productCards = sortedData.map((product: Product, index: number) => {
    const imageSrc = lg
      ? product.categoryImage.desktop
      : md
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
        gap="16rem"
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
