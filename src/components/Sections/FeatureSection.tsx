import { HStack, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import Product from "../../types/Product";

const FeatureSection = ({ product }: { product: Product }) => {
  const includedAccessories = product.includes.map(item => (
    <ListItem
      key={item.item}
      textAlign="left"
      mb="0.8rem">
      <Text
        as="span"
        color="var(--dark-orange)"
        mr="2.4rem">
        {item.quantity}x
      </Text>
      {item.item}
    </ListItem>
  ));

  return (
    <HStack
      as="section"
      gap="12.5rem">
      <VStack
        alignItems="flex-start"
        gap="3.2rem"
        w="63.5rem"
        h="31.8rem">
        <Text as="h3">features</Text>
        <Text as="p">{product.features}</Text>
      </VStack>
      <VStack
        w="35rem"
        h="32.8rem"
        alignItems="flex-start"
        justifyContent="flex-start">
        <Text
          as="h3"
          mb="3.2rem">
          in the box
        </Text>
        <UnorderedList listStyleType="none">{includedAccessories}</UnorderedList>
      </VStack>
    </HStack>
  );
};

export default FeatureSection;
