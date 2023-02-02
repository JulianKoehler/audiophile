import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import heroImage from "../assets/home/desktop/image-hero.jpg";
import About from "../components/About/About";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import Footer from "../components/Footer/Footer";
import LocalHeader from "../components/Header/LocalHeader";
import ProductCards from "../components/ProductCards/ProductCards";
import CustomButton from "../components/UI/CustomButton";

const Home = () => {
  return (
    <>
      <LocalHeader transform="translateY(-9rem)">
        <HStack
          justifyContent="center"
          filter="contrast(1.23)" // the black tone of the image is too washed out so I increased contrast
          w="100%"
          bg="var(--header-black)">
          <VStack
            alignItems="flex-start"
            gap="2.4rem"
            w="calc(100% - 33rem)"
            maxW="111rem"
            top="50%"
            bottom="0"
            left="0"
            right="0"
            m="0 auto"
            position="absolute"
            transform="translateY(-40%)">
            <Text
              as="sup"
              color="white"
              opacity="0.5">
              new product
            </Text>
            <Text
              as="h1"
              maxW="40rem"
              m="0 !important">
              XX99 Mark II Headphones
            </Text>
            <Text
              color="rgba(255,255,255,0.75)"
              maxW="35rem">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music
              enthusiast.
            </Text>
            <CustomButton mt="1.6rem !important">see product</CustomButton>
          </VStack>
          <Image
            marginInline="auto"
            maxHeight="73rem"
            src={heroImage}
          />
        </HStack>
      </LocalHeader>
      <VStack
        as="main"
        mt="11rem"
        pb="20rem"
        gap="18rem">
        <CategoryCards />
        <ProductCards />
        <About />
      </VStack>
    </>
  );
};

export default Home;
