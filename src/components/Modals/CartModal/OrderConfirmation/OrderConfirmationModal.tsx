import {
  Card,
  ChakraProps,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import checkIcon from "../../../../assets/checkout/icon-order-confirmation.svg";
import { ICartItem } from "../../../../store/cartSlice";
import numberWithCommas from "../../../../util/formatPrice";
import CustomButton from "../../../UI/CustomButton";
import CartItem from "../CartItem";

interface Props extends ChakraProps {
  isOpen: boolean;
  onClose: VoidFunction;
  orderNumber: string | number;
  items: ICartItem[];
  grandTotal: number;
}

const OrderConfirmationModal = ({ isOpen, onClose, orderNumber = "undefined", items, grandTotal }: Props) => {
  const navigate = useNavigate();
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  const orderedItems = items.map((item, index) => {
    if (!showAllItems) {
      if (index > 0) {
        return;
      }
    }

    const isLastItem = index === items.length - 1;

    return (
      <HStack
        gap="1.6rem"
        w="full"
        borderBottom={isLastItem ? "1px solid rgba(0,0,0, 0.08)" : "none"}
        pb={isLastItem ? "1.6rem" : 0}>
        <CartItem
          item={item}
          hasBoxShadow={false}
        />
        <Text
          opacity={0.5}
          color="black"
          fontSize="1.4rem"
          fontWeight="700"
          ml="auto !important">
          x{item.quantity}
        </Text>
      </HStack>
    );
  });

  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent
        p="4.8rem"
        containerProps={{ alignItems: "center" }}>
        <ModalHeader mb="3.3rem">
          <Image
            src={checkIcon}
            alt="order confirmation"
            mb="3.3rem"
          />
          <Text
            as="h3"
            mb="2.4rem">
            thank you <br /> for your order
          </Text>
          <Text as="p">You will receive an email confirmation shortly.</Text>
          <Text as="p">Your order number is {orderNumber}.</Text>
        </ModalHeader>
        <ModalBody mb="4.6rem">
          <Card bg="var(--light-grey)">
            <HStack alignItems="stretch">
              <VStack
                w="55%"
                p={showAllItems ? "2.4rem 2.4rem 1.3rem" : "2.4rem"}
                m="0 !important"
                alignItems="flex-start">
                {orderedItems}
                <CustomButton
                  variant="link"
                  textTransform="none"
                  letterSpacing={-0.2}
                  margin="1.2rem auto 0 !important"
                  onClick={() => setShowAllItems(prev => !prev)}>
                  {showAllItems ? "View less" : `and ${items.length - 1} other item(s)`}
                </CustomButton>
              </VStack>
              <VStack
                w="45%"
                m="0 !important"
                minH="full"
                bg="black"
                p="4.1rem 3.2rem"
                borderRadius="0 var(--chakra-radii-md) var(--chakra-radii-md) 0"
                alignItems="flex-start"
                justifyContent="flex-end">
                <Text
                  opacity={0.5}
                  color="white"
                  textTransform="uppercase">
                  grand total
                </Text>
                <Text
                  fontWeight={700}
                  fontSize="1.8rem"
                  color="white">
                  {grandTotal ? numberWithCommas(grandTotal) : ""} €
                </Text>
              </VStack>
            </HStack>
          </Card>
        </ModalBody>
        <ModalFooter>
          <CustomButton
            w="full"
            onClick={() => navigate("/")}>
            back to home
          </CustomButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderConfirmationModal;
