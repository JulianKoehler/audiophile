import { Card, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductPresentationCardProps from "@/types/CardProps";
import CustomButton from "@/components/UI/CustomButton";

const SecondLineProduct = ({ title, image, slug }: ProductPresentationCardProps) => {
  return (
    <Card
      bgImg={image}
      bgSize="cover"
      w={{
        lg: "111rem",
        md: "69rem",
        sm: "32.7rem",
      }}
      h="32rem">
      <VStack
        alignItems="flex-start"
        ml={{
          md: "9.5rem",
          sm: "2.4rem",
        }}
        justifyContent="center"
        h="100%"
        gap="3.2rem">
        <Heading
          as="h4"
          size="2xl">
          {title}
        </Heading>
        <Link to={slug}>
          <CustomButton variant="outline">see product</CustomButton>
        </Link>
      </VStack>
    </Card>
  );
};

export default SecondLineProduct;
