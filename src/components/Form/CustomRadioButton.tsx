import { Box, ChakraProps, InputProps, Radio } from "@chakra-ui/react";
import React from "react";

interface Props extends ChakraProps {
  children: React.ReactNode;
  [rest: string]: any;
}

const CustomRadioButton = ({ children, ...rest }: Props) => {
  return (
    <Box
      w="30.9rem"
      h="5.6rem"
      border="1px solid rgba(226,232,240)"
      borderRadius="0.8rem"
      p="1.8rem 1.6rem"
      _focusWithin={{
        border: "1px solid var(--light-orange)",
      }}>
      <Radio
        _checked={{
          bg: "white",
          color: "white",
          borderWidth: "1px",
          borderColor: "gray.300",
          _after: {
            content: '""',
            position: "relative",
            bg: "var(--dark-orange)",
            borderRadius: "50%",
            borderColor: "black",
            w: "1rem",
            h: "1rem",
            display: "inline-block",
          },
        }}
        {...rest}>
        {children}
      </Radio>
    </Box>
  );
};

export default CustomRadioButton;
