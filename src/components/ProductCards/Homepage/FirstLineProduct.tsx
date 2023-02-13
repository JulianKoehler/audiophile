import { Card, Image, Text, useMediaQuery, VStack } from "@chakra-ui/react";
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
      bgPos={{
        lg: "-90% 0%",
        md: "50% 134%",
      }}
      bgColor="var(--dark-orange)"
      overflow="hidden"
      w={{
        lg: "111rem",
        md: "69rem",
      }}
      h={{
        lg: "56rem",
        md: "72rem",
      }}>
      <Image
        pos="absolute"
        w={{
          lg: "41rem",
          md: "19.7rem",
        }}
        top={{
          lg: "unset",
          md: "5.2rem",
        }}
        bottom={{
          lg: "-1.2rem",
          md: "unset",
        }}
        left={{
          lg: "12rem",
          md: "50%",
        }}
        transform={{
          lg: "unset",
          md: "translateX(-50%)",
        }}
        src={image}
      />
      <VStack
        alignItems={{
          lg: "flex-start",
          md: "center",
        }}
        h="100%"
        justifyContent={{
          lg: "center",
          md: "flex-end",
        }}
        mr="9.5rem"
        ml="auto"
        mb={{
          lg: "unset",
          md: "6.4rem",
        }}
        m={{
          lg: "0 9.5rem 0 auto",
          md: "0 auto 6.4rem",
        }}
        textAlign={{
          lg: "left",
          md: "center",
        }}
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
