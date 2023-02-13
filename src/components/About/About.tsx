import { Image, Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import CustomerImageLg from "../../assets/shared/desktop/image-best-gear.jpg";
import CustomerImageMd from "../../assets/shared/tablet/image-best-gear.jpg";

const About = () => {
  const [lg] = useMediaQuery("(min-width: 73rem)");

  return (
    <Stack
      as="section"
      flexDirection={{
        lg: "row",
        md: "column-reverse",
      }}
      alignItems={{
        lg: "unset",
        md: "center",
      }}
      textAlign={{
        lg: "unset",
        md: "center",
      }}
      maxW="111rem"
      gap={{
        lg: "12.5rem",
        md: "6.3rem",
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
        maxW={{
          lg: "unset",
          md: "90%",
        }}
        src={lg ? CustomerImageLg : CustomerImageMd}
        alt="A customer listening to music with our XX99 Mark II"
      />
    </Stack>
  );
};

export default About;
