import { Box, Container, HStack, Image, VStack } from "@chakra-ui/react";
import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const GlobalHeader = () => {
  return (
    <VStack
      as="header"
      px="16.5rem"
      bg="var(--header-black)"
      zIndex="10"
      position="sticky">
      <HStack
        w="100%"
        maxW="111rem"
        justify="space-between"
        py="3.2rem"
        borderBottom="1px solid rgba(255,255,255,0.2)">
        <Link to="/">
          <Image
            src={logo}
            alt="audiophile"
            w="14.3rem"
          />
        </Link>
        <Navbar />
        <Box cursor="pointer">
          <Image
            src={cartIcon}
            alt="Click me to open the cart menu"
            w="2.3rem"
            h="2rem"
          />
        </Box>
      </HStack>
    </VStack>
  );
};

export default GlobalHeader;
