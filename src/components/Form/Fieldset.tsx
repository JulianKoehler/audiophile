import { ChakraProps, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ChakraProps {
  children: ReactNode;
}

const Fieldset = ({ children }: Props) => {
  return (
    <VStack
      as="fieldset"
      mb="2.9rem"
      w="full"
      alignItems="flex-start">
      {children}
    </VStack>
  );
};

export default Fieldset;
