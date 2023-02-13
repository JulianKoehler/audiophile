import { Box, ChakraProps, UnorderedList } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface NavbarProps extends ChakraProps {
  [rest: string]: any;
}

const LgNavbar = ({ ...rest }: NavbarProps) => {
  return (
    <Box
      as="nav"
      marginInlineStart="0 !important"
      {...rest}>
      <UnorderedList
        listStyleType="none"
        display="flex"
        gap="3.4rem"
        margin={0}>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/headphones">HEADPHONES</NavLink>
        </li>
        <li>
          <NavLink to="/speakers">SPEAKERS</NavLink>
        </li>
        <li>
          <NavLink to="/earphones">EARPHONES</NavLink>
        </li>
      </UnorderedList>
    </Box>
  );
};

export default LgNavbar;
