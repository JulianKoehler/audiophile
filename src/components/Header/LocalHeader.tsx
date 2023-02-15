import { ChakraProps, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LocalHeaderProps extends ChakraProps {
  children?: ReactNode;
  [rest: string]: any;
}

const LocalHeader = ({ children, ...rest }: LocalHeaderProps) => {
  return (
    <VStack
      as="header"
      bg="var(--header-black)"
      {...rest}>
      {children}
    </VStack>
  );
};

export default LocalHeader;
