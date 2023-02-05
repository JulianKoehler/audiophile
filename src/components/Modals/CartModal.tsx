import {
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { adjustCartItemQuantity, clearCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CustomButton from "../UI/CustomButton";
import numberWithCommas from "../../util/formatPrice";
import ProductImageCard from "../ProductCards/Image/ProductImageCard";
import QuantityInput from "../UI/QuantityInput";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

type CartModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { totalQuantity, totalSum, items } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  function removeItemsHandler() {
    dispatch(clearCart());
  }

  function changeQuantityHandler(valueAsString: string, valueAsNumber: number, id: number) {
    dispatch(adjustCartItemQuantity({ id, quantity: valueAsNumber }));
  }

  useEffect(() => {
    onClose();
  }, [pathname]);

  const cartItems = items.map(item => {
    return (
      <HStack
        key={item.id}
        w="full"
        my="2.4rem"
        gap="1.6rem">
        <Link to={`/${item.category}/${item.slug}`}>
          <ProductImageCard
            image={item.image}
            w="6.4rem"
            h="6.4rem"
          />
        </Link>
        <VStack
          alignItems="flex-start"
          mr="4.5rem">
          <Text
            color="black"
            fontSize="1.5rem"
            fontWeight="700">
            {item.name}
          </Text>
          <Text mt="0 !important">$ {numberWithCommas(item.price)}</Text>
        </VStack>
        <QuantityInput
          ml="auto !important"
          min={0}
          value={item.quantity}
          onChange={(valueAsString, valueAsNumber) =>
            changeQuantityHandler(valueAsString, valueAsNumber, item.id)
          }
          size="sm"
        />
      </HStack>
    );
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        padding="3.1rem"
        containerProps={{ justifyContent: "flex-end", paddingRight: "16.5rem" }}>
        <ModalHeader
          p={0}
          w="full">
          <Text
            as="h6"
            display="inline">
            cart ({totalQuantity})
          </Text>
          <Text
            as="button"
            onClick={removeItemsHandler}
            textDecoration="underline"
            float="right"
            fontSize="1.5rem">
            Remove all
          </Text>
        </ModalHeader>
        <ModalBody p={0}>
          {items.length === 0 ? <Text mt="2rem">Your cart is empty.</Text> : cartItems}
        </ModalBody>
        <ModalFooter p={0}>
          <VStack w="full">
            <HStack
              justifyContent="space-between"
              w="full"
              my="2.4rem">
              <Text
                textTransform="uppercase"
                fontSize="1.5rem">
                Total
              </Text>
              <Text
                fontWeight="700"
                fontSize="1.8rem"
                color="black">
                $ {numberWithCommas(totalSum)}
              </Text>
            </HStack>
            {totalQuantity >= 1 && <CustomButton w="full">Checkout</CustomButton>}
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
