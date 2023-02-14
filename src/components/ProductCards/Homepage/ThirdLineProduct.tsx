import { Card, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductPresentationCardProps from "../../../types/CardProps";
import CustomButton from "../../UI/CustomButton";

const ThirdLineProduct = ({ title, image, slug }: ProductPresentationCardProps) => {
  return (
    <Stack
      flexDirection={{
        md: "row",
        sm: "column",
      }}
      gap={{
        lg: "3rem",
        md: "1.1rem",
        sm: "2.4rem",
      }}>
      <Card
        w={{
          lg: "54rem",
          md: "34rem",
          sm: "32.7rem",
        }}
        h={{
          md: "32rem",
          sm: "20rem",
        }}
        bgImg={image}
        bgSize="cover"
      />
      <Card
        w={{
          lg: "54rem",
          md: "34rem",
          sm: "32.7rem",
        }}
        h={{
          md: "32rem",
          sm: "20rem",
        }}
        mt="0 !important"
        bg="var(--light-grey)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap="3.2rem"
        pl={{
          lg: "9.65rem",
          md: "4.1rem",
          sm: "2.4rem",
        }}>
        <Heading
          as="h4"
          size="2xl">
          {title}
        </Heading>
        <Link to={slug}>
          <CustomButton variant="outline">see product</CustomButton>
        </Link>
      </Card>
    </Stack>
  );
};

export default ThirdLineProduct;
