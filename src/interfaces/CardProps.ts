import { ChakraProps } from "@chakra-ui/react";

export default interface ProductCardProps extends ChakraProps {
  title: string;
  image: string;
  slug: string;
}

export interface FirstLineCardProps extends ProductCardProps {
  description: string;
}
