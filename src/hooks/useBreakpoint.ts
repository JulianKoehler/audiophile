import { useMediaQuery } from "@chakra-ui/react";

const useBreakpoint = () => {
  const [lg] = useMediaQuery("(min-width: 73rem)");
  const [md] = useMediaQuery("(min-width: 45rem)");

  return {
    large: lg,
    medium: md,
  };
};

export default useBreakpoint;
