import { HStack, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "@/components/Form/Form";
import CustomButton from "@/components/UI/CustomButton";
import { FetchStatus } from "@/store/cartSlice";
import { useAppSelector } from "@/store/hooks";

const Checkout = () => {
  const navigate = useNavigate();
  const items = useAppSelector(state => state.cart.items);
  const fetchStatus = useAppSelector(state => state.cart.status);
  const isCardEmpty = items.length < 1;

  useEffect(() => {
    console.log(fetchStatus, isCardEmpty);

    if (fetchStatus === FetchStatus.SUCCESS) {
      console.log(isCardEmpty);

      if (isCardEmpty) {
        console.log("Navigating now");

        navigate("/");
      }
    }
  }, [fetchStatus, isCardEmpty]);

  return (
    <VStack
      as="main"
      my="7.9rem"
      px={{
        lg: "16.5rem",
        sm: "4rem",
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
