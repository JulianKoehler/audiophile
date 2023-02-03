import { Card, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import circles from "../../../assets/home/desktop/pattern-circles.svg";
import { FirstLineCardProps } from "../../../types/CardProps";
import CustomButton from "../../UI/CustomButton";

const FirstLineProduct = ({ title, image, description, slug }: FirstLineCardProps) => {
  return (
    <Card
      pos="relative"
      bgImage={circles}
      bgRepeat="no-repeat"
      bgPos="-90% 0%"
      bgColor="var(--dark-orange)"
      overflow="hidden"
      w="111rem"
      h="56rem">
      <Image
        pos="absolute"
        w="41rem"
        bottom="-1.2rem"
        left="12rem"
        src={image}
      />
      <VStack
        alignItems="flex-start"
        h="100%"
        justifyContent="center"
        mr="9.5rem"
        ml="auto"
        gap="2.4rem">
        <Text
          maxW="27rem"
          as="h1">
          {title}
        </Text>
        <Text
          maxW="35rem"
          color="rgba(255,255,255,0.75)">
          {description}
        </Text>
        <Link to={slug}>
          <CustomButton
            variant="black"
            mt="1.6rem">
            see product
          </CustomButton>
        </Link>
      </VStack>
    </Card>
  );
};

export default FirstLineProduct;
