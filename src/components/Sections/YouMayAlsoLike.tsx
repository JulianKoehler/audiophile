import { ChakraProps, GridItem, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useBreakpoint from "../../hooks/useBreakpoint";
import Product from "../../types/Product";
import CustomButton from "../UI/CustomButton";

interface Props extends ChakraProps {
  product: Product;
}

const YouMayAlsoLike = ({ product }: Props) => {
  const { large, medium } = useBreakpoint();
  const productsYouMayAlsoLike = product.others.map(item => (
    <VStack
      key={item.slug}
      w="fit-content"
      gap="3.2rem">
      <Image
        mb={{
          md: "0.8rem",
          sm: 0,
        }}
        w={{
          lg: "35rem",
          md: "22.3rem",
          sm: "32.7rem",
        }}
        borderRadius="0.8rem"
        src={large ? item.image.desktop : medium ? item.image.tablet : item.image.mobile}
        alt={product.name}
      />
      <Heading
        as="h5"
        size="2xl"
        m="0 !important">
        {item.name}
      </Heading>
      <Link to={`/${item.category}/${item.slug}`}>
        <CustomButton>see product</CustomButton>
      </Link>
    </VStack>
  ));

  return (
    <VStack
      as="section"
      gap={{
        lg: "6.4rem",
        md: "5.6rem",
      }}
      maxW={{
        lg: "111rem",
        md: "69rem",
      }}>
      <Text as="h3">you may also like</Text>
      <SimpleGrid
        columns={{
          md: 3,
          sm: 1,
        }}
        spacing={{
          md: "3rem",
          sm: "5.6rem",
        }}>
        {productsYouMayAlsoLike}
      </SimpleGrid>
    </VStack>
  );
};

export default YouMayAlsoLike;
