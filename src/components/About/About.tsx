import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import CustomerImageLg from "../../assets/shared/desktop/image-best-gear.jpg";
import CustomerImageMd from "../../assets/shared/tablet/image-best-gear.jpg";
import CustomerImageSm from "../../assets/shared/mobile/image-best-gear.jpg";
import useBreakpoint from "../../hooks/useBreakpoint";

const About = () => {
  const { large, medium } = useBreakpoint();

  return (
    <Stack
      as="section"
      flexDirection={{
        lg: "row",
        sm: "column-reverse",
      }}
      alignItems={{
        lg: "unset",
        sm: "center",
      }}
      textAlign={{
        lg: "unset",
        sm: "center",
      }}
      maxW={{
        md: "111rem",
        sm: "87%",
      }}
      gap={{
        lg: "12.5rem",
        md: "6.3rem",
        sm: "4rem",
      }}>
      <VStack
        w="100%"
        maxW={{
          lg: "44.5rem",
          md: "73rem",
        }}
        alignItems="flex-start"
        gap="3.2rem">
        <Text
          as="h2"
          color="black">
          bringing you the{" "}
          <Text
            as="strong"
            color="var(--dark-orange)">
            best
          </Text>{" "}
          audio gear
        </Text>
        <Text>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones,
          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
          available for you to browse and experience a wide range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile the best place to buy your portable audio
          equipment.
        </Text>
      </VStack>
      <Image
        borderRadius="0.8rem"
        w={{
          lg: "54rem",
          md: "90%",
          sm: "32.7rem",
        }}
        src={large ? CustomerImageLg : medium ? CustomerImageMd : CustomerImageSm}
        alt="A customer listening to music with our XX99 Mark II"
      />
    </Stack>
  );
};

export default About;
