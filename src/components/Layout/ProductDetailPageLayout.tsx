import { VStack } from "@chakra-ui/react";
import Product from "../../types/Product";
import About from "../About/About";
import CategoryCards from "../CategoryCards/CategoryCards";
import OrderSection from "../Sections/OrderSection";
import FeatureSection from "../Sections/FeatureSection";
import GallerySection from "../Sections/GallerySection";
import YouMayAlsoLike from "../Sections/YouMayAlsoLike";
import useBreakpoint from "../../hooks/useBreakpoint";

const ProductDetailPageLayout = ({ product }: { product: Product }) => {
  const { large, medium } = useBreakpoint();
  return (
    <VStack
      as="main"
      gap="16rem"
      mb="16rem"
      mt="7.9rem"
      w="100%"
      px={{
        lg: "16.5rem",
        md: "4rem",
      }}
      alignItems="center">
      <OrderSection product={product} />
      <FeatureSection product={product} />
      <GallerySection
        image1={
          large
            ? product.gallery.first.desktop
            : medium
            ? product.gallery.first.tablet
            : product.gallery.first.mobile
        }
        image2={
          large
            ? product.gallery.second.desktop
            : medium
            ? product.gallery.second.tablet
            : product.gallery.second.mobile
        }
        image3={
          large
            ? product.gallery.third.desktop
            : medium
            ? product.gallery.third.tablet
            : product.gallery.third.mobile
        }
      />
      <YouMayAlsoLike product={product} />
      <CategoryCards />
      <About />
    </VStack>
  );
};

export default ProductDetailPageLayout;
