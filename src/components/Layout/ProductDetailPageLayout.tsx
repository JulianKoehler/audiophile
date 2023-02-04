import { VStack } from "@chakra-ui/react";
import Product from "../../types/Product";
import About from "../About/About";
import CategoryCards from "../CategoryCards/CategoryCards";
import OrderSection from "../Sections/OrderSection";
import FeatureSection from "../Sections/FeatureSection";
import GallerySection from "../Sections/GallerySection";
import YouMayAlsoLike from "../Sections/YouMayAlsoLike";

const ProductDetailPageLayout = ({ product }: { product: Product }) => {
  return (
    <VStack
      as="main"
      gap="16rem"
      mb="16rem"
      mt="7.9rem"
      w="100%"
      px="16.5rem"
      alignItems="center">
      <OrderSection product={product} />
      <FeatureSection product={product} />
      <GallerySection
        image1={product.gallery.first.desktop}
        image2={product.gallery.second.desktop}
        image3={product.gallery.third.desktop}
      />
      <YouMayAlsoLike product={product} />
      <CategoryCards />
      <About />
    </VStack>
  );
};

export default ProductDetailPageLayout;
