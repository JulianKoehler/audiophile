import { HStack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Product from "../../types/Product";
import numberWithCommas from "../../util/formatPrice";
import ProductImageCard from "../ProductCards/Image/ProductImageCard";
import CustomButton from "../UI/CustomButton";
import QuantityInput from "../UI/QuantityInput";

const OrderSection = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const isNew = product.new;

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
              w="12rem"
              h="4.8rem"
            />
            <CustomButton>add to cart</CustomButton>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default OrderSection;
