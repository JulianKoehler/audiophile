import { Card, ChakraProps, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../UI/CustomButton";

interface CardProps extends ChakraProps {
  title: string;
  image: string;
}

const SecondLineProduct = ({ title, image }: CardProps) => {
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
        <Link to="/">
          <CustomButton variant="black">see product</CustomButton>
        </Link>
      </VStack>
    </Card>
  );
};

export default SecondLineProduct;
