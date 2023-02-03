import { ChakraProps } from "@chakra-ui/react";

export default interface ProductPresentationCardProps extends ChakraProps {
  title: string;
  image: string;
  slug: string;
}

export interface FirstLineCardProps extends ProductPresentationCardProps {
  description: string;
}
