import { Card, HStack, Image, Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomButton from "../../UI/CustomButton";
import ProductImageCard from "../Image/ProductImageCard";

type ProductPreviewProps = {
  image: string;
  isNew: boolean;
  name: string;
  description: string;
  linkToProduct: string;
  index: number;
};

const ProductPreviewArticle = ({
  image,
  isNew,
  name,
  description,
  linkToProduct,
  index,
}: ProductPreviewProps) => {
  /* To achieve the Layout that every second products image is on the right hand side I decided to calculate
  for each product if its index is odd or not. With this boolean expression I can conditionally render the image
  infront or behind the VStack Element. Additionally I need to check the breakpoint, since this pattern is only
  applied for desktop size. */
  const indexIsOdd = (index + 1) % 2 > 0;
  const [lg] = useMediaQuery("(min-width: 73rem)");

  return (
    <Stack
      as="article"
      w="111rem"
      gap={{
        lg: "12.5rem",
        md: "5.2rem",
      }}
      alignItems="center"
      flexDirection={{
        lg: "row",
        md: "column",
      }}>
      {indexIsOdd && lg && <ProductImageCard image={image} />}
      {!lg && <ProductImageCard image={image} />}
      <VStack
        w="44.5rem"
        alignItems={{
          lg: "flex-start",
          md: "center",
        }}
        textAlign={{
          lg: "left",
          md: "center",
        }}>
        {isNew && <sup>new product</sup>}
        <Text
          as="h2"
          color="black"
          mb="3.2rem !important">
          {name}
        </Text>
        <Text
          as="p"
          mb="4rem !important">
          {description}
        </Text>
        <Link to={linkToProduct}>
          <CustomButton>see product</CustomButton>
        </Link>
      </VStack>
      {!indexIsOdd && lg && <ProductImageCard image={image} />}
    </Stack>
  );
};

export default ProductPreviewArticle;
