import { Card, Image } from "@chakra-ui/react";
import CustomButton from "../UI/CustomButton";
import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

type CardProps = {
  image: string;
  title: string;
};

const SingleCard = ({ image, title }: CardProps) => {
  return (
    <Card
      bg="var(--light-grey)"
      w="35rem"
      h="20.4rem"
      mt="8rem"
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
        h="16rem"
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
