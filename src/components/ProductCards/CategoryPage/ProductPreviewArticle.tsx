import { Card, Heading, HStack, Image, Stack, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useBreakpoint from "../../../hooks/useBreakpoint";
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
  const { large } = useBreakpoint();

  return (
    <Stack
      as="article"
      w="111rem"
      maxW={{
        md: "unset",
        sm: "90%",
      }}
      gap={{
        lg: "12.5rem",
        md: "5.2rem",
        sm: "3.2rem",
      }}
      alignItems="center"
      flexDirection={{
        lg: "row",
        sm: "column",
      }}>
      {indexIsOdd && large && <ProductImageCard image={image} />}
      {!large && <ProductImageCard image={image} />}
      <VStack
        w="44.5rem"
        alignItems={{
          lg: "flex-start",
          sm: "center",
        }}
        textAlign={{
          lg: "left",
          sm: "center",
        }}>
        {isNew && <sup>new product</sup>}
        <Heading
          as="h2"
          size="4xl"
          color="black"
          m={{
            md: "0 0 3.2rem !important",
            sm: "2.4rem 0 !important",
          }}
          maxW={{
            md: "unset",
            sm: "80%",
          }}>
          {name}
        </Heading>
        <Text
          as="p"
          mb={{
            md: "4rem !important",
            sm: "2.4rem !important",
          }}
          maxW={{
            md: "unset",
            sm: "90%",
          }}>
          {description}
        </Text>
        <Link to={linkToProduct}>
          <CustomButton>see product</CustomButton>
        </Link>
      </VStack>
      {!indexIsOdd && large && <ProductImageCard image={image} />}
    </Stack>
  );
};

export default ProductPreviewArticle;
