import { Grid, GridItem, Image } from "@chakra-ui/react";

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
      gap="1.8rem"
      maxW={{
        lg: "111rem",
        md: "69rem",
        sm: "32.7rem",
      }}
      templateColumns={{
        md: "1fr 1fr",
        sm: "1fr",
      }}>
      <GridItem
        display="flex"
        flexDirection="column"
        gap={{
          lg: "3.2rem",
          sm: "2rem",
        }}
        w={{
          lg: "44.5rem",
          md: "27.7rem",
        }}>
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
      <GridItem
        w={{
          lg: "63.5rem",
          md: "39.5rem",
        }}>
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
