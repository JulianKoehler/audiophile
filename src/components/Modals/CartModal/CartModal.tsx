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
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { adjustCartItemQuantity, clearCart } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { sendCartData } from "@/store/cartActions";
import useBreakpoint from "@/hooks/useBreakpoint";
import CustomButton from "@/components/UI/CustomButton";
import QuantityInput from "@/components/UI/QuantityInput";
import numberWithCommas from "@/util/formatPrice";
import CartItem from "./CartItem";

type CartModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const cart = useAppSelector(state => state.cart);
  const { large, medium } = useBreakpoint();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isCartEmpty = cart.totalQuantity < 1;
  const isInitialPageLoad = useRef(true);

  function removeItemsHandler() {
    dispatch(clearCart());
  }

  function changeQuantityHandler(_: string, valueAsNumber: number, id: number) {
    dispatch(adjustCartItemQuantity({ id, quantity: valueAsNumber }));
  }

  function handleCheckout() {
    dispatch(sendCartData(cart));
    navigate("/checkout");
  }

  useEffect(() => {
    onClose();
  }, [pathname]);

  useEffect(() => {
    if (isInitialPageLoad.current) {
      isInitialPageLoad.current = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart.adjustments]);

  const listofItems = cart.items.map(item => {
    return (
      <HStack
        key={item.id}
        w="full"
        my="2.4rem"
        gap="1.6rem">
        <CartItem item={item} />
        <QuantityInput
          ml="auto !important"
          min={0}
          value={Number.isNaN(item.quantity) ? "" : item.quantity}
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
        w={{
          md: "37.7rem",
          sm: "32.7rem",
        }}
        padding={medium ? "3.1rem" : "2.8rem"}
        containerProps={{
          justifyContent: medium ? "flex-end" : "center",
          paddingRight: large ? "16.5rem" : medium ? "4rem" : "0",
        }}>
        <ModalHeader
          p={0}
          w="full">
          <Text
            as="h6"
            display="inline">
            cart ({Number.isNaN(cart.totalQuantity) ? "" : cart.totalQuantity})
          </Text>
          {!isCartEmpty && (
            <Text
              as="button"
              onClick={removeItemsHandler}
              textDecoration="underline"
              float="right"
              fontSize="1.5rem"
              _hover={{
                color: "var(--dark-orange)",
              }}>
              Remove all
            </Text>
          )}
        </ModalHeader>
        <ModalBody p={0}>{isCartEmpty ? <Text mt="2rem">Your cart is empty.</Text> : listofItems}</ModalBody>
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
                $ {numberWithCommas(cart.totalSum || 0)}
              </Text>
            </HStack>
            {!isCartEmpty && (
              <CustomButton
                onClick={handleCheckout}
                w="full">
                Checkout
              </CustomButton>
            )}
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
