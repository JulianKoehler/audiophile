import { HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendCartData } from "../../store/cartActions";
import { addItemToCart } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Product from "../../types/Product";
import numberWithCommas from "../../util/formatPrice";
import ProductImageCard from "../ProductCards/Image/ProductImageCard";
import CustomButton from "../UI/CustomButton";
import QuantityInput from "../UI/QuantityInput";

const OrderSection = ({ product }: { product: Product }) => {
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(state => state.cart);
  const isNew = product.new;

  /**  For Numberinputs from ChakraUI expect TWO paramters needs to be namend valueAsString and
   * valueAsNumber in order to work properly
   */
  function changeQuantityHandler(valueAsString: string, valueAsNumber: number) {
    setItemQuantity(valueAsNumber);
  }

  function addItemToCartHandler() {
    dispatch(
      addItemToCart({
        id: product.id,
        name: product.name_short,
        price: product.price,
        image: product.image.mobile,
        quantity: itemQuantity,
        category: product.category,
        slug: product.slug,
      })
    );
  }

  useEffect(() => {
    setItemQuantity(1);
  }, [pathname]);

  useEffect(() => {
    dispatch(sendCartData(cart));
  }, [cart]);

  return (
    <VStack as="section">
      <HStack
        as="nav"
        justifyContent="flex-start"
        w="100%"
        maxW="111rem"
        mb="5.6rem">
        <CustomButton
          onClick={() => navigate(-1)}
          variant="link"
          mr="auto">
          Go Back
        </CustomButton>
      </HStack>
      <HStack gap="12.45rem">
        <ProductImageCard image={product.image.desktop} />
        <VStack
          maxW="44.5rem"
          alignItems="flex-start">
          {isNew && <sup>new product</sup>}
          <Text
            as="h2"
            color="black"
            mb="3.2rem !important">
            {product.name}
          </Text>
          <Text
            as="p"
            mb="3.2rem !important">
            {product.description}
          </Text>
          <Text
            as="p"
            color="black"
            fontSize="1.8rem"
            fontWeight="700"
            mb="4.7rem !important">
            {`$ ${numberWithCommas(product.price)}`}
          </Text>
          <HStack gap="1.6rem">
            <QuantityInput
              onChange={changeQuantityHandler}
              value={itemQuantity}
            />
            <CustomButton onClick={addItemToCartHandler}>add to cart</CustomButton>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default OrderSection;
