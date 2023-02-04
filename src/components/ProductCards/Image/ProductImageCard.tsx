import { Card, Image } from "@chakra-ui/react";

const ProductImageCard = ({ image }: { image: string }) => {
  console.log(image);
  return (
    <Card w="54rem">
      <Image
        src={image}
        alt="the product"
      />
    </Card>
  );
};

export default ProductImageCard;
