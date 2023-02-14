import { VStack } from "@chakra-ui/react";
import ZX9ImageLg from "../../../assets/home/desktop/image-speaker-zx9.png";
import ZX9ImageMd from "../../../assets/home/tablet/image-speaker-zx9.png";
import ZX9ImageSm from "../../../assets/home/mobile/image-speaker-zx9.png";
import ZX7ImageLg from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import ZX7ImageMd from "../../../assets/home/tablet/image-speaker-zx7.jpg";
import ZX7ImageSm from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import YX1ImageLg from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import YX1ImageMd from "../../../assets/home/tablet/image-earphones-yx1.jpg";
import YX1ImageSm from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import FirstLineProduct from "./FirstLineProduct";
import SecondLineProduct from "./SecondLineProduct";
import ThirdLineProduct from "./ThirdLineProduct";
import useBreakpoint from "../../../hooks/useBreakpoint";

const ProductCards = () => {
  const { large, medium } = useBreakpoint();

  return (
    <VStack
      pb={{
        lg: "5rem",
      }}
      gap="4.8rem">
      <FirstLineProduct
        title="zx9 speaker"
        image={large ? ZX9ImageLg : medium ? ZX9ImageMd : ZX9ImageSm}
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        slug="/speakers/zx9-speaker"
      />
      <SecondLineProduct
        title="zx7 speaker"
        image={large ? ZX7ImageLg : medium ? ZX7ImageMd : ZX7ImageSm}
        slug="/speakers/zx7-speaker"
      />
      <ThirdLineProduct
        title="yx1 earphones"
        image={large ? YX1ImageLg : medium ? YX1ImageMd : YX1ImageSm}
        slug="/earphones/yx1-earphones"
      />
    </VStack>
  );
};

export default ProductCards;
