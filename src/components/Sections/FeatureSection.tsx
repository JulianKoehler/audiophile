import { HStack, ListItem, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react";
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
    <Stack
      as="section"
      flexDirection={{
        lg: "row",
        md: "column",
      }}
      gap="12.5rem">
      <VStack
        alignItems="flex-start"
        gap="3.2rem"
        w="63.5rem"
        h="31.8rem">
        <Text as="h3">features</Text>
        <Text as="p">{product.features}</Text>
      </VStack>
      <Stack
        w={{
          lg: "35rem",
          md: "full",
        }}
        h="32.8rem"
        flexDirection={{
          lg: "column",
          md: "row",
        }}
        alignItems="flex-start"
        justifyContent="flex-start"
        gap={{
          lg: "unset",
          md: "16rem",
        }}>
        <Text
          as="h3"
          mb="3.2rem">
          in the box
        </Text>
        <UnorderedList listStyleType="none">{includedAccessories}</UnorderedList>
      </Stack>
    </Stack>
  );
};

export default FeatureSection;
