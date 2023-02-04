import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

type GalleryProps = {
  image1: string;
  image2: string;
  image3: string;
};

const GallerySection = ({ image1, image2, image3 }: GalleryProps) => {
  return (
    <Grid
      as="section"
      w="100%"
      maxW="111rem"
      templateColumns="1fr 1fr">
      <GridItem
        display="flex"
        flexDirection="column"
        gap="3.2rem"
        w="44.5rem">
        <Image
          borderRadius="0.8rem"
          src={image1}
          alt="first"
        />
        <Image
          borderRadius="0.8rem"
          src={image2}
          alt={image2}
        />
      </GridItem>
      <GridItem w="63.5rem">
        <Image
          borderRadius="0.8rem"
          src={image3}
          alt={image3}
        />
      </GridItem>
    </Grid>
  );
};

export default GallerySection;
