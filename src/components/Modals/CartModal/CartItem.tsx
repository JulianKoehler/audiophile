import { Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../../util/formatPrice";
import ProductImageCard from "../../ProductCards/Image/ProductImageCard";

type CartItemsProps = {
  item: {
    category: string;
    slug: string;
    image: string;
    name: string;
    price: number;
  };
  hasBoxShadow?: boolean;
};

const CartItem = ({ item, hasBoxShadow = true }: CartItemsProps) => {
  return (
    <>
      <Link to={`/${item.category}/${item.slug}`}>
        <ProductImageCard
          image={item.image}
          w="6.4rem"
          h="6.4rem"
          boxShadow={hasBoxShadow ? "var(--chakra-shadows-base)" : "none"}
        />
      </Link>
      <VStack
        alignItems="flex-start"
        mr="4.5rem">
        <Link to={`/${item.category}/${item.slug}`}>
          <Text
            color="black"
            fontSize="1.5rem"
            fontWeight="700">
            {item.name}
          </Text>
        </Link>
        <Text
          opacity={0.5}
          color="black"
          fontSize="1.4rem"
          fontWeight="700"
          mt="0 !important">
          {numberWithCommas(item.price)} €
        </Text>
      </VStack>
    </>
  );
};

export default CartItem;
