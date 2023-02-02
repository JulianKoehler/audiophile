import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import Navbar from "../Navbar/Navbar";

const Footer = () => {
  return (
    <HStack
      as="footer"
      px="16.5rem"
      pb="4.8rem"
      bg="var(--footer-black)"
      mt="auto"
      justifyContent="center">
      <VStack
        position="relative"
        w="100%"
        maxW="111rem"
        justifyContent="space-between"
        alignItems="flex-start">
        <Box
          w="10.1rem"
          h="0.4rem"
          bg="var(--dark-orange)"
          mb="7.1rem"
        />
        <HStack
          w="100%"
          justifyContent="space-between">
          <Image
            src={logo}
            alt="audiophile"
          />
          <Navbar />
        </HStack>
        <VStack
          alignItems="flex-start"
          maxW="54rem"
          color="rgba(255,255,255, 0.5)">
          <Text
            mt="3.6rem"
            mb="5.6rem">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
            and sound specialists who are devoted to helping you get the most out of personal audio. Come and
            visit our demo facility - we’re open 7 days a week.
          </Text>
          <Text>Copyright 2023. All Rights Reserved</Text>
        </VStack>
        <HStack
          gap="1.6rem"
          color="white"
          w="100%"
          position="absolute"
          top="16rem"
          bottom="0"
          left="0"
          right="0"
          m="auto"
          justifyContent="flex-end">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
            />
          </a>
          <a
            target="_blank"
            href="https://www.twitter.com"
            rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com"
            rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
            />
          </a>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Footer;
