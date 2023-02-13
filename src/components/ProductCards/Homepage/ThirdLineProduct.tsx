import { Card, ChakraProps, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductPresentationCardProps from "../../../types/CardProps";
import CustomButton from "../../UI/CustomButton";

const ThirdLineProduct = ({ title, image, slug }: ProductPresentationCardProps) => {
  return (
    <HStack
      gap={{
        lg: "3rem",
        md: "1.1rem",
      }}>
      <Card
        w={{
          lg: "54rem",
          md: "34rem",
        }}
        h="32rem"
        bgImg={image}
        bgSize="cover"
      />
      <Card
        w={{
          lg: "54rem",
          md: "34rem",
        }}
        h="32rem"
        bg="var(--light-grey)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="3.2rem"
        pl={{
          lg: "9.65rem",
          md: "4.1rem",
        }}>
        <h4>{title}</h4>
        <Link to={slug}>
          <CustomButton variant="outline">see product</CustomButton>
        </Link>
      </Card>
    </HStack>
  );
};

export default ThirdLineProduct;
