import { Card, ChakraProps, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ProductPresentationCardProps from "../../../types/CardProps";
import CustomButton from "../../UI/CustomButton";

const SecondLineProduct = ({ title, image, slug }: ProductPresentationCardProps) => {
  return (
    <Card
      bgImg={image}
      w={{
        lg: "111rem",
        md: "69rem",
      }}
      h="32rem">
      <VStack
        alignItems="flex-start"
        ml="9.5rem"
        justifyContent="center"
        h="100%"
        gap="3.2rem">
        <h4>{title}</h4>
        <Link to={slug}>
          <CustomButton variant="outline">see product</CustomButton>
        </Link>
      </VStack>
    </Card>
  );
};

export default SecondLineProduct;
