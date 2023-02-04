import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import CustomerImage from "../../assets/shared/desktop/image-best-gear.jpg";

const About = () => {
  return (
    <HStack
      as="section"
      maxW="111rem"
      gap="12.5rem">
      <VStack
        w="100%"
        maxW="44.5rem"
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
        src={CustomerImage}
        alt="A customer listening to music with our XX99 Mark II"
      />
    </HStack>
  );
};

export default About;
