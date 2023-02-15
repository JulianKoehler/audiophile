import { Card, ChakraProps, Image } from "@chakra-ui/react";

interface ProductImageCard extends ChakraProps {
  image: string;
  [rest: string]: any;
}

const ProductImageCard = ({ image, ...rest }: ProductImageCard) => {
  return (
    <Card
      w="fit-content"
      h="fit-content"
      {...rest}>
      <Image
        w={{
          lg: "54rem",
          md: "69rem",
          sm: "32.7rem",
        }}
        // minW={{
        //   lg: "38.5rem",
        //   md: "28.1rem",
        // }}
        h={{
          lg: "56rem",
          md: "48rem",
          sm: "35rem",
        }}
        src={image}
        alt="the product"
        objectFit="cover"
      />
    </Card>
  );
};

export default ProductImageCard;
