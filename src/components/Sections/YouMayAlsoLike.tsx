import { ChakraProps, GridItem, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Product from "../../types/Product";
import CustomButton from "../UI/CustomButton";

interface Props extends ChakraProps {
  product: Product;
}

const YouMayAlsoLike = ({ product }: Props) => {
  const productsYouMayAlsoLike = product.others.map(item => (
    <VStack
      key={item.slug}
      w="35rem"
      gap="3.2rem">
      <Image
        mb="0.8rem"
        w="35rem"
        src={item.image.desktop}
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
      gap="6.4rem"
      w="100%"
      maxW="111rem">
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
