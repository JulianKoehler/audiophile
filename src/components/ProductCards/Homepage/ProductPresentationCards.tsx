import { useMediaQuery, VStack } from "@chakra-ui/react";
import ZX9ImageLg from "../../../assets/home/desktop/image-speaker-zx9.png";
import ZX9ImageMd from "../../../assets/home/tablet/image-speaker-zx9.png";
import ZX7ImageLg from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import ZX7ImageMd from "../../../assets/home/tablet/image-speaker-zx7.jpg";
import YX1ImageLg from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import YX1ImageMd from "../../../assets/home/tablet/image-earphones-yx1.jpg";
import FirstLineProduct from "./FirstLineProduct";
import SecondLineProduct from "./SecondLineProduct";
import ThirdLineProduct from "./ThirdLineProduct";

const ProductCards = () => {
  const [lg] = useMediaQuery("(min-width: 73rem)");

  return (
    <VStack
      pb="5rem"
      gap="4.8rem">
      <FirstLineProduct
        title="zx9 speaker"
        image={lg ? ZX9ImageLg : ZX9ImageMd}
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        slug="/speakers/zx9-speaker"
      />
      <SecondLineProduct
        title="zx7 speaker"
        image={lg ? ZX7ImageLg : ZX7ImageMd}
        slug="/speakers/zx7-speaker"
      />
      <ThirdLineProduct
        title="yx1 earphones"
        image={lg ? YX1ImageLg : YX1ImageMd}
        slug="/earphones/yx1-earphones"
      />
    </VStack>
  );
};

export default ProductCards;
