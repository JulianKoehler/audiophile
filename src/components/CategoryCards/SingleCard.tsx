import { Card, Image } from "@chakra-ui/react";
import CustomButton from "@/components/UI/CustomButton";
import arrowRight from "@/assets/shared/desktop/icon-arrow-right.svg";

type CardProps = {
  image: string;
  title: string;
};

const SingleCard = ({ image, title }: CardProps) => {
  return (
    <Card
      bg="var(--light-grey)"
      w={{
        lg: "35rem",
        md: "22.3rem",
        sm: "32.7rem",
      }}
      h={{
        lg: "20.4rem",
        sm: "16.5rem",
      }}
      mt={{
        md: "8rem",
        sm: 0,
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      css={{
        "&:hover > button": {
          color: "var(--light-orange)",
        },
      }}>
      <Image
        h="14rem"
        mb={{
          sm: "-1.2rem",
        }}
        src={image}
      />
      <h6>{title}</h6>
      <CustomButton
        variant="link"
        mb="3rem"
        mt="1.5rem">
        shop
        <Image
          ml="1.3rem"
          src={arrowRight}
        />
      </CustomButton>
    </Card>
  );
};

export default SingleCard;
