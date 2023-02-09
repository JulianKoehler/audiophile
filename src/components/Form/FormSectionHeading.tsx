import { Text } from "@chakra-ui/react";
import React from "react";

const FormSectionHeading = ({ heading }: { heading: string }) => {
  return (
    <Text
      as="p"
      textTransform="uppercase"
      fontSize="1.3rem"
      fontWeight="700"
      color="var(--dark-orange)"
      letterSpacing="0.1rem"
      mb="1.6rem">
      {heading}
    </Text>
  );
};

export default FormSectionHeading;
