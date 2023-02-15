import { Box, HStack, Image, useDisclosure, VStack } from "@chakra-ui/react";
import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import LgNavbar from "../Navbar/LgNavbar";
import { Link, useLocation } from "react-router-dom";
import CartModal from "../Modals/CartModal/CartModal";
import MdNavbar from "../Navbar/MdNavbar";

const GlobalHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();

  function openCartHandler() {
    pathname === "/checkout" ? null : onOpen();
  }

  return (
    <VStack
      as="header"
      px={{
        lg: "16.5rem",
        md: "4rem",
        sm: "2.4rem",
      }}
      bg="var(--header-black)"
      zIndex="10"
      position="sticky">
      <HStack
        w="100%"
        maxW="111rem"
        justifyContent={{
          lg: "space-between",
          md: "flex-start",
          sm: "space-between",
        }}
        py="3.2rem"
        borderBottom="1px solid rgba(255,255,255,0.2)">
        <MdNavbar
          display={{
            lg: "none",
            md: "block",
            sm: "block",
          }}
        />
        <Link to="/">
          <Image
            src={logo}
            alt="audiophile"
            w="14.3rem"
          />
        </Link>
        <LgNavbar
          display={{
            lg: "block",
            sm: "none",
          }}
        />
        <Box
          marginLeft={{
            lg: "0 !important",
            md: "auto !important",
          }}
          onClick={openCartHandler}
          cursor="pointer">
          <Image
            src={cartIcon}
            alt="Click me to open the cart menu"
            w="2.3rem"
            h="2rem"
          />
        </Box>
      </HStack>
      <CartModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </VStack>
  );
};

export default GlobalHeader;
