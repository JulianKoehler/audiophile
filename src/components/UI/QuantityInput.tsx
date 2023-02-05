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
  w: string | number;
  h: string | number;
  [rest: string]: any;
}

const QuantityInput = ({ w, h, ...rest }: InputProps) => {
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
        w={w}
        h={h}
      />
      <NumberInputStepper w="0">
        <NumberIncrementStepper
          children="+"
          fontSize="1.3rem"
          fontWeight="700"
          color="black"
          opacity="0.25"
          position="absolute"
          right="2.2rem"
          top="1.4rem"
          _active={{ color: "var(--dark-orange)", opacity: "1" }}
        />
        <NumberDecrementStepper
          children="-"
          fontSize="1.3rem"
          fontWeight="700"
          color="black"
          opacity="0.25"
          position="absolute"
          right="8.5rem"
          top="0.5rem"
          padding="1rem"
          _active={{ color: "var(--dark-orange)", opacity: "1" }}
        />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default QuantityInput;
