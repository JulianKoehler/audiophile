import { Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useBreakpoint from "@/hooks/useBreakpoint";
import { sendCartData } from "@/store/cartActions";
import { addItemToCart } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Product from "@/types/Product";
import numberWithCommas from "@/util/formatPrice";
import ProductImageCard from "@/components/ProductCards/Image/ProductImageCard";
import CustomButton from "@/components/UI/CustomButton";
import QuantityInput from "@/components/UI/QuantityInput";

const OrderSection = ({ product }: { product: Product }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const cart = useAppSelector(state => state.cart);
  const { large, medium } = useBreakpoint();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isNew = product.new;

  /**  Numberinputs from ChakraUI expect TWO paramters which need to be namend valueAsString and
   * valueAsNumber, otherwise TypeScript is complaining aboutthe onChange function on QuantityInput
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
  }, [cart.adjustments]);

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
      <Stack
        flexDirection={medium ? "row" : "column"}
        gap={{
          lg: "12.45rem",
          md: "6.9rem",
          sm: "3.2rem",
        }}
        w={{
          lg: "111rem",
          md: "69rem",
          sm: "32.7rem",
        }}>
        <ProductImageCard
          image={large ? product.image.desktop : medium ? product.image.tablet : product.image.mobile}
          w={{
            lg: "54rem",
            md: "28rem",
          }}
          h={{
            lg: "56rem",
            md: "48rem",
          }}
        />
        <VStack
          maxW={{
            lg: "44.5rem",
            md: "34rem",
          }}
          alignItems="flex-start">
          {isNew && <sup>new product</sup>}
          <Heading
            as="h2"
            size="4xl"
            color="black"
            mb="3.2rem !important"
            m={{
              md: "0 0 3.2rem !important",
              sm: "2.4rem 0 !important",
            }}>
            {product.name}
          </Heading>
          <Text
            as="p"
            mb={{
              md: "3.2rem !important",
              sm: "2.4rem !important",
            }}>
            {product.description}
          </Text>
          <Text
            as="p"
            color="black"
            fontSize="1.8rem"
            fontWeight="700"
            mb={{
              md: "4.7rem !important",
              sm: "3.1rem !important",
            }}>
            {`${numberWithCommas(product.price)} €`}
          </Text>
          <HStack gap="1.6rem">
            <QuantityInput
              onChange={changeQuantityHandler}
              value={itemQuantity}
            />
            <CustomButton onClick={addItemToCartHandler}>add to cart</CustomButton>
          </HStack>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default OrderSection;
