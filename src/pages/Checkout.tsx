import { HStack, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import CustomButton from "../components/UI/CustomButton";
import { useAppSelector } from "../store/hooks";

const Checkout = () => {
  const navigate = useNavigate();
  const items = useAppSelector(state => state.cart.items);
  const isCardEmpty = items.length < 1;

  // useEffect(() => {
  //   if (isCardEmpty) {
  //     navigate("/");
  //     return;
  //   }
  // }, []);

  return (
    <VStack
      as="main"
      my="7.9rem"
      px={{
        lg: "16.5rem",
        md: "4rem",
      }}
      alignItems="center">
      <HStack
        w="100%"
        maxW="111rem">
        <CustomButton
          onClick={() => navigate(-1)}
          variant="link"
          mr="auto"
          mb="2.4rem">
          Go Back
        </CustomButton>
      </HStack>
      <Form />
    </VStack>
  );
};

export default Checkout;
