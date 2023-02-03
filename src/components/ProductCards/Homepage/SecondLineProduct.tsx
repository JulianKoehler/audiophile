import { Card, ChakraProps, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ProductCardProps from "../../../interfaces/CardProps";
import CustomButton from "../../UI/CustomButton";

const SecondLineProduct = ({ title, image, slug }: ProductCardProps) => {
  return (
    <Card
      bgImg={image}
      w="111rem"
      h="32rem">
      <VStack
        alignItems="flex-start"
        ml="9.5rem"
        justifyContent="center"
        h="100%"
        gap="3.2rem">
        <h4>{title}</h4>
        <Link to={slug}>
          <CustomButton variant="black">see product</CustomButton>
        </Link>
      </VStack>
    </Card>
  );
};

export default SecondLineProduct;
