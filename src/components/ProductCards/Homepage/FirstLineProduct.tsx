import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import circles from "@/assets/home/desktop/pattern-circles.svg";
import useBreakpoint from "@/hooks/useBreakpoint";
import { FirstLineCardProps } from "@/types/CardProps";
import CustomButton from "@/components/UI/CustomButton";

const FirstLineProduct = ({ title, image, description, slug }: FirstLineCardProps) => {
  const { large, medium } = useBreakpoint();
  return (
    <Card
      pos="relative"
      bgImage={circles}
      bgRepeat="no-repeat"
      bgSize={{
        lg: "90%",
        md: "135%",
        sm: "190%",
      }}
      bgPos={{
        lg: "-18rem 10%",
        md: "50% -28rem",
        sm: "50% -15rem",
      }}
      bgColor="var(--dark-orange)"
      overflow="hidden"
      w={{
        lg: "111rem",
        md: "69rem",
        sm: "32.7rem",
      }}
      h={{
        lg: "56rem",
        sm: "72rem",
      }}>
      <Image
        pos="absolute"
        w={{
          lg: "41rem",
          sm: "19.7rem",
        }}
        top={{
          lg: "unset",
          sm: "5.2rem",
        }}
        bottom={{
          lg: "-1.2rem",
          sm: "unset",
        }}
        left={{
          lg: "12rem",
          sm: "50%",
        }}
        transform={{
          lg: "unset",
          sm: "translateX(-50%)",
        }}
        src={image}
      />
      <VStack
        alignItems={{
          lg: "flex-start",
          sm: "center",
        }}
        h="100%"
        justifyContent={{
          lg: "center",
          sm: "flex-end",
        }}
        mr="9.5rem"
        ml="auto"
        mb={{
          lg: "unset",
          sm: "6.4rem",
        }}
        m={{
          lg: "0 9.5rem 0 auto",
          sm: "0 auto 6.4rem",
        }}
        textAlign={{
          lg: "left",
          sm: "center",
        }}
        gap="2.4rem">
        <Heading
          maxW="27rem"
          as="h1"
          size="4xl">
          {title}
        </Heading>
        <Text
          w="80%"
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
