import { defineStyleConfig } from "@chakra-ui/react";

const buttonStyleConfig = defineStyleConfig({
  baseStyle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    textTransform: "uppercase",
    borderRadius: "0",
    padding: "1.5rem 3rem",
    lineHeight: "1.78rem",
    letterSpacing: "0.1rem",
  },
  variants: {
    orange: {
      bg: "var(--dark-orange)",
      color: "white",
      transition: "",
      _hover: {
        bg: "var(--light-orange)",
      },
      _active: {
        transform: "scale(0.97)",
      },
    },
    black: {
      bg: "black",
      color: "white",
      _hover: {
        bg: "#4C4C4C",
      },
      _active: {
        transform: "scale(0.97)",
      },
    },
    outline: {
      bg: "transparent",
      color: "black",
      border: "1px solid black",
      _hover: {
        bg: "black",
        color: "white",
      },
      _active: {
        transform: "scale(0.97)",
      },
    },
    link: {
      bg: "transparent",
      color: "rgba(0,0,0,0.5)",
      padding: "0.5rem",
      _hover: {
        color: "var(--dark-orange)",
      },
    },
  },
  defaultProps: {
    variant: "orange",
  },
});

export default buttonStyleConfig;
