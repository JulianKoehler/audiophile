import {
  ChakraProps,
  InputElementProps,
  InputGroupProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from "@chakra-ui/react";

interface InputProps extends NumberInputProps {
  size?: "sm" | "lg";
}

const QuantityInput = ({ size = "lg", ...rest }: InputProps) => {
  return (
    <NumberInput
      defaultValue={1}
      bg="var(--light-grey)"
      display="inline"
      borderRadius="0"
      min={1}
      max={100}
      {...rest}>
      <NumberInputField
        textAlign="center"
        fontSize="1.3rem"
        fontWeight="700"
        color="black"
        position="relative"
        padding={0}
        borderRadius="0 !important"
        w={size === "lg" ? "12rem" : "9.6rem"}
        h={size === "lg" ? "4.8rem" : "3.2rem"}
      />
      <NumberInputStepper w="0">
        <NumberIncrementStepper
          children="+"
          fontSize="1.3rem"
          fontWeight="700"
          color="black"
          opacity="0.25"
          position="absolute"
          height="100%"
          right={size === "lg" ? "2.2rem" : "1.8rem"}
          top={0}
          _active={{ color: "var(--dark-orange)", opacity: "1" }}
        />
        <NumberDecrementStepper
          children="-"
          fontSize="1.3rem"
          fontWeight="700"
          color="black"
          opacity="0.25"
          position="absolute"
          height="100%"
          right={size === "lg" ? "8.5rem" : "6rem"}
          top={0}
          padding="1rem"
          _active={{ color: "var(--dark-orange)", opacity: "1" }}
        />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QuantityInput;
