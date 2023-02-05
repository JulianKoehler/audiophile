import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Modal: {
      sizes: {
        md: {
          dialog: {
            maxW: "50rem",
          },
        },
      },
    },
  },
  shadows: {
    outline: "",
  },
  radii: {
    md: "0.8rem",
  },
});

export default customTheme;
