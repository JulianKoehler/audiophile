import { Card, ChakraProps, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductPresentationCardProps from "../../../types/CardProps";
import CustomButton from "../../UI/CustomButton";

const ThirdLineProduct = ({ title, image, slug }: ProductPresentationCardProps) => {
  return (
    <HStack gap="3rem">
      <Card
        w="54rem"
        h="32rem"
        bgImg={image}
      />
      <Card
        w="54rem"
        h="32rem"
        bg="var(--light-grey)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="3.2rem"
        pl="9.65rem">
        <h4>{title}</h4>
        <Link to={slug}>
          <CustomButton variant="black">see product</CustomButton>
        </Link>
      </Card>
    </HStack>
  );
};

export default ThirdLineProduct;
