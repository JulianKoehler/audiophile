import { Card, ChakraProps, Image } from "@chakra-ui/react";

interface ProductImageCard extends ChakraProps {
  image: string;
  [rest: string]: any;
}

const ProductImageCard = ({ image, ...rest }: ProductImageCard) => {
  return (
    <Card
      w="54rem"
      {...rest}>
      <Image
        src={image}
        alt="the product"
      />
    </Card>
  );
};

export default ProductImageCard;
