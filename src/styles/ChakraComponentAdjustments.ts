import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  breakpoints: {
    lg: "73rem",
    md: "45rem",
    sm: "0rem",
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "inherit",
        fontWeight: "700",
      },
    },
    Modal: {
      sizes: {
        md: {
          dialog: {
            maxW: "40rem",
          },
        },
        lg: {
          dialog: {
            maxW: "54rem",
          },
        },
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "1.2rem",
        fontWeight: "700",
        mb: "0.9rem",
      },
    },
    Input: {
      baseStyle: {
        field: {
          fontFamily: "inherit",
          fontWeight: "700",
          lineHeight: "1.9rem",
          letterSpacing: "-0.25px",
          color: "black",
          padding: "1.8rem 2.4rem 1.9rem !important",
          caretColor: "var(--dark-orange)",
          _placeholder: {
            opacity: 0.4,
          },
        },
      },
      sizes: {
        md: {
          field: {
            fontSize: "1.4rem",
            h: "5.6rem",
            width: "30.9rem",
          },
        },
        lg: {
          field: {
            fontSize: "1.4rem",
            h: "5.6rem",
            width: "63.4rem",
          },
        },
      },
      defaultProps: {
        focusBorderColor: "orange.300",
      },
      variants: {
        outline: {},
      },
    },
    Radio: {
      sizes: {
        md: {
          label: {
            fontSize: "1.4rem",
            fontWeight: "700",
            ml: "1.6rem",
          },
          control: {
            w: "2rem",
            h: "2rem",
            borderRadius: "50%",
            boxShadow: "none",
          },
        },
      },
    },
  },
  radii: {
    md: "0.8rem",
  },
});

export default customTheme;
