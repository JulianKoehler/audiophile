import { Heading, ListItem, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react";
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
        sm: "column",
      }}
      gap={{
        md: "12.5rem",
        sm: "8.8rem",
      }}>
      <VStack
        alignItems="flex-start"
        gap="3.2rem"
        w={{
          md: "63.5rem",
          sm: "32.7rem",
        }}>
        <Heading
          as="h3"
          size="2xl">
          features
        </Heading>
        <Text as="p">{product.features}</Text>
      </VStack>
      <Stack
        w={{
          lg: "35rem",
          md: "full",
        }}
        h="fit-content"
        flexDirection={{
          lg: "column",
          md: "row",
          sm: "column",
        }}
        alignItems="flex-start"
        justifyContent="flex-start"
        gap={{
          lg: "unset",
          md: "16rem",
        }}>
        <Heading
          as="h3"
          size="2xl"
          mb="3.2rem">
          in the box
        </Heading>
        <UnorderedList listStyleType="none">{includedAccessories}</UnorderedList>
      </Stack>
    </Stack>
  );
};

export default FeatureSection;
