import { Card, ChakraProps, HStack, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { CartState } from "../../store/cartSlice";
import numberWithCommas from "../../util/formatPrice";
import CartItem from "../Modals/CartModal/CartItem";
import CustomButton from "../UI/CustomButton";

interface SummaryProps extends ChakraProps {
  cart: CartState;
  shippingCosts: number;
  vat: number;
  grandTotal: number;
}

const Summary = ({ cart, shippingCosts, vat, grandTotal }: SummaryProps) => {
  const listOfItems = cart.items.map((item, index) => {
    return (
      <HStack
        key={item.id}
        w="full"
        mb={index === cart.items.length - 1 ? 0 : "2.4rem"}
        gap="1.6rem">
        <CartItem item={item} />
        <Text
          color="black"
          fontWeight={700}
          opacity={0.5}
          ml="auto !important">
          x{item.quantity}
        </Text>
      </HStack>
    );
  });

  return (
    <Card
      w="35rem"
      h="fit-content"
      p="3.2rem"
      gap="3.2rem">
      <Text as="h6">summary</Text>
      <UnorderedList
        listStyleType="none"
        m={0}>
        {listOfItems}
      </UnorderedList>
      <VStack>
        <HStack
          w="100%"
          justifyContent="space-between">
          <Text
            opacity={0.5}
            textTransform="uppercase">
            total
          </Text>
          <Text fontWeight={700}>{numberWithCommas(cart.totalSum)} €</Text>
        </HStack>
        <HStack
          w="100%"
          justifyContent="space-between">
          <Text
            opacity={0.5}
            textTransform="uppercase">
            shipping
          </Text>
          <Text fontWeight={700}>{shippingCosts} €</Text>
        </HStack>
        <HStack
          w="100%"
          justifyContent="space-between">
          <Text
            opacity={0.5}
            textTransform="uppercase">
            vat (included)
          </Text>
          <Text fontWeight={700}>{numberWithCommas(vat)} €</Text>
        </HStack>
        <HStack
          w="100%"
          mt="2.4rem !important"
          justifyContent="space-between">
          <Text
            opacity={0.5}
            textTransform="uppercase">
            grand total
          </Text>
          <Text
            color="var(--dark-orange)"
            fontWeight={700}>
            {numberWithCommas(grandTotal)} €
          </Text>
        </HStack>
      </VStack>
      <CustomButton type="submit">continue & pay</CustomButton>
    </Card>
  );
};

export default Summary;
