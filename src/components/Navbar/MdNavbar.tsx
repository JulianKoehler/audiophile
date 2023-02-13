import {
  Box,
  ChakraProps,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import burgerMenuIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import CategoryCards from "../CategoryCards/CategoryCards";

interface NavbarProps extends ChakraProps {
  [rest: string]: any;
}

const MdNavbar = ({ ...rest }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        role="button"
        mr="4.2rem"
        {...rest}
        onClick={onOpen}>
        <Image src={burgerMenuIcon} />
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent
          maxW="full"
          py="6.7rem"
          top="5rem"
          borderRadius="0 0 0.8rem 0.8rem">
          <ModalBody onClick={onClose}>
            <CategoryCards />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MdNavbar;
