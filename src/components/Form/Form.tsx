import {
  Card,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import CustomRadioButton from "@/components/Form/CustomRadioButton";
import cashOnDeliveryIcon from "@/assets/checkout/icon-cash-on-delivery.svg";
import Fieldset from "./Fieldset";
import FormSectionHeading from "./FormSectionHeading";
import Summary from "./Summary";
import * as Yup from "yup";
import { sendOrder } from "@/store/cartActions";
import OrderConfirmationModal from "@/components/Modals/OrderConfirmation/OrderConfirmationModal";
import { orderStatus } from "@/store/orderSlice";
import { useEffect } from "react";

const Form = () => {
  const cart = useAppSelector(state => state.cart);
  const order = useAppSelector(state => state.order);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const shippingCosts = 50;
  const vat = cart.totalSum * 0.19;
  const grandTotal = cart.totalSum + shippingCosts;

  const formik = useFormik({
    initialValues: {
      customerName: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      paymentMethod: "e_money",
      showEmoneyFields: true,
      eMoneyNumber: "",
      eMoneyPIN: "",
    },
    validationSchema: Yup.object({
      showEmoneyFields: Yup.boolean(),
      customerName: Yup.string().trim().min(4, "Please enter your full name.").required("Name required"),
      email: Yup.string().email("Invalid email address").required("Email Required"),
      phone: Yup.string().optional(),
      address: Yup.string().trim().min(10, "Too short for a street name").required("Required"),
      zip: Yup.string().min(5, "Too short").max(9, "Too long").required("Required"),
      city: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      eMoneyNumber: Yup.string().when("showEmoneyFields", {
        is: true,
        then: Yup.string().required("Required"),
      }),
      eMoneyPIN: Yup.string().when("showEmoneyFields", {
        is: true,
        then: Yup.string().required("Required"),
      }),
    }),
    onSubmit: (values, actions) => {
      dispatch(
        sendOrder({
          orderNumber: new Date().getTime(),
          orderDate: new Date().toLocaleDateString(),
          items: cart.items,
          grandTotal,
          name: values.customerName,
          email: values.email,
          phone: values.phone,
          address: values.address,
          zip: values.zip,
          city: values.city,
          country: values.country,
        })
      );

      if (order.orderStatus === orderStatus.SUCCESS) {
        actions.resetForm();
      }
    },
  });

  useEffect(() => {
    if (order.orderStatus === orderStatus.SUCCESS) {
      onOpen();
    }
  }, [order.orderStatus]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        flexDirection={{
          lg: "row",
          sm: "column",
        }}
        alignItems="flex-start"
        gap="3rem">
        <Card padding="4.8rem">
          <Heading
            as="h3"
            size="2xl"
            mb="4.1rem">
            checkout
          </Heading>
          <Fieldset>
            <FormSectionHeading heading="billing details" />
            <Stack
              flexDirection={{
                md: "row",
                sm: "column",
              }}
              gap="1.6rem"
              mb="2.4rem !important"
              alignItems="flex-start">
              <FormControl isInvalid={!!formik.errors.customerName && formik.touched.customerName}>
                <FormLabel>Name</FormLabel>
                <Input
                  id="customerName"
                  placeholder="Alexei Ward"
                  {...formik.getFieldProps("customerName")}
                />
                <FormErrorMessage>{formik.errors.customerName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel>Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="alexei@mail.com"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
            </Stack>
            <FormControl isInvalid={!!formik.errors.phone && formik.touched.phone}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                id="phone"
                type="tel"
                placeholder="+49 (151) 555-1234"
                {...formik.getFieldProps("phone")}
              />
              <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
            </FormControl>
          </Fieldset>
          <Fieldset>
            <FormSectionHeading heading="shipping info" />
            <FormControl isInvalid={!!formik.errors.address && formik.touched.address}>
              <FormLabel>Address</FormLabel>
              <Input
                id="address"
                size={{ md: "lg", sm: "md" }}
                type="text"
                placeholder="Am Lerchenberg 2b"
                {...formik.getFieldProps("address")}
              />
              <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
            </FormControl>
            <Stack
              gap="1.6rem"
              flexDirection={{
                md: "row",
                sm: "column",
              }}>
              <FormControl isInvalid={!!formik.errors.zip && formik.touched.zip}>
                <FormLabel>ZIP Code</FormLabel>
                <Input
                  id="zip"
                  type="number"
                  placeholder="30938"
                  {...formik.getFieldProps("zip")}
                />
                <FormErrorMessage>{formik.errors.zip}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.city && formik.touched.city}>
                <FormLabel>City</FormLabel>
                <Input
                  id="city"
                  type="text"
                  placeholder="Burgwedel"
                  {...formik.getFieldProps("city")}
                />
                <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
              </FormControl>
            </Stack>
            <FormControl isInvalid={!!formik.errors.country && formik.touched.country}>
              <FormLabel>Country</FormLabel>
              <Input
                id="country"
                type="text"
                placeholder="Germany"
                {...formik.getFieldProps("country")}
              />
              <FormErrorMessage>{formik.errors.country}</FormErrorMessage>
            </FormControl>
          </Fieldset>
          <Fieldset>
            <FormSectionHeading heading="payment details" />
            <FormControl
              display="flex"
              flexDirection={{
                md: "row",
                sm: "column",
              }}
              justifyContent="space-between">
              <FormLabel>Payment Method</FormLabel>
              <RadioGroup
                id="paymentMethod"
                {...formik.getFieldProps("paymentMethod")}>
                <Stack gap="1.6rem">
                  <CustomRadioButton
                    {...formik.getFieldProps("paymentMethod")}
                    onChange={() => {
                      formik.values.paymentMethod = "e_money";
                      formik.values.showEmoneyFields = true;
                    }}
                    value="e_money">
                    e-Money
                  </CustomRadioButton>
                  <CustomRadioButton
                    {...formik.getFieldProps("paymentMethod")}
                    onChange={() => {
                      formik.values.paymentMethod = "cash_on_delivery";
                      formik.values.showEmoneyFields = false;
                    }}
                    value="cash_on_delivery">
                    Cash on Delivery
                  </CustomRadioButton>
                </Stack>
              </RadioGroup>
            </FormControl>
            {formik.values.paymentMethod === "e_money" ? (
              <Stack
                gap="1.6rem"
                flexDirection={{
                  md: "row",
                  sm: "column",
                }}
                mt="2.4rem !important">
                <FormControl isInvalid={!!formik.errors.eMoneyNumber && formik.touched.eMoneyNumber}>
                  <FormLabel>e-Money Number</FormLabel>
                  <Input
                    type="number"
                    id="eMoneyNumber"
                    placeholder="238521993"
                    maxLength={9}
                    {...formik.getFieldProps("eMoneyNumber")}
                  />
                  <FormErrorMessage>{formik.errors.eMoneyNumber}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.eMoneyPIN && formik.touched.eMoneyPIN}>
                  <FormLabel>e-Money Number</FormLabel>
                  <Input
                    type="password"
                    id="eMoneyPIN"
                    placeholder="6891"
                    maxLength={4}
                    {...formik.getFieldProps("eMoneyPIN")}
                  />
                  <FormErrorMessage>{formik.errors.eMoneyPIN}</FormErrorMessage>
                </FormControl>
              </Stack>
            ) : (
              <HStack
                w="full"
                mt="3rem !important"
                justifyContent="space-between">
                <Image
                  src={cashOnDeliveryIcon}
                  alt="cash on delivery"
                />
                <Text
                  opacity={0.5}
                  maxW="54.4rem">
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives
                  at your residence. Just make sure your address is correct so that your order will not be
                  cancelled.
                </Text>
              </HStack>
            )}
          </Fieldset>
        </Card>
        <Summary
          cart={cart}
          shippingCosts={shippingCosts}
          vat={vat}
          grandTotal={grandTotal}
        />
      </Stack>
      <OrderConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        orderNumber={order.orderNumber}
        items={order.items}
        grandTotal={order.grandTotal!}
      />
    </form>
  );
};

export default Form;
