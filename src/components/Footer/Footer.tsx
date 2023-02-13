import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/shared/desktop/logo.svg";
import LgNavbar from "../Navbar/LgNavbar";

const Footer = () => {
  return (
    <VStack
      as="footer"
      px={{
        lg: "16.5rem",
        md: "4rem",
      }}
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
          mb={{
            lg: "7.1rem",
            md: "5.6rem",
          }}
        />
        <Stack
          w="100%"
          flexDirection={{
            lg: "row",
            md: "column",
          }}
          justifyContent="space-between"
          gap="3.2rem">
          <Image
            src={logo}
            alt="audiophile"
            maxH="2.5rem"
            maxW="14.3rem"
          />
          <LgNavbar fontSize="1.3rem" />
        </Stack>
        <VStack
          alignItems="flex-start"
          maxW={{
            lg: "54rem",
            md: "unset",
          }}
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
          w="full"
          position="absolute"
          bottom={{
            lg: "13.6rem",
            md: 0,
          }}
          left="0"
          right="0"
          m="auto"
          justifyContent="flex-end"
          alignItems={{
            lg: "center",
            md: "flex-end",
          }}>
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
    </VStack>
  );
};

export default Footer;
