import { Card, VStack } from "@chakra-ui/react";
import ZX9Image from "../../assets/home/desktop/image-speaker-zx9.png";
import ZX7Image from "../../assets/home/desktop/image-speaker-zx7.jpg";
import YX1Image from "../../assets/home/desktop/image-earphones-yx1.jpg";
import FirstLineProduct from "./FirstLineProduct";
import SecondLineProduct from "./SecondLineProduct";
import ThirdLineProduct from "./ThirdLineProduct";

const ProductCards = () => {
  return (
    <VStack
      pb="5rem"
      gap="4.8rem">
      <FirstLineProduct
        title="zx9 speaker"
        image={ZX9Image}
        description="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
      />
      <SecondLineProduct
        title="zx7 speaker"
        image={ZX7Image}
      />
      <ThirdLineProduct
        title="yx1 earphones"
        image={YX1Image}
      />
    </VStack>
  );
};

export default ProductCards;
