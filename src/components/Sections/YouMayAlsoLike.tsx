import { ChakraProps, GridItem, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
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
        mb="0.8rem"
        w={{
          lg: "35rem",
          md: "22.3rem",
        }}
        src={large ? item.image.desktop : medium ? item.image.tablet : item.image.mobile}
        alt={product.name}
      />
      <Text as="h5">{item.name}</Text>
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
        columns={3}
        spacing="3rem">
        {productsYouMayAlsoLike}
      </SimpleGrid>
    </VStack>
  );
};

export default YouMayAlsoLike;
