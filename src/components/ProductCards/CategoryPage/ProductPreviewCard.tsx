import { Card } from "@chakra-ui/react";
import React from "react";

const ProductPreviewCard = () => {
  return (
    <Card
      as="article"
      p="3rem"
      bg="var(--light-grey)">
      <h2>I am a product preview!</h2>
    </Card>
  );
};

export default ProductPreviewCard;
