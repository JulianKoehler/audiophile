import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Card: {
      baseStyle: {
        container: {
          borderRadius: "0.8rem",
        },
      },
    },
  },
});

export default customTheme;
