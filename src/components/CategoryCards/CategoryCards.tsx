import { HStack } from "@chakra-ui/react";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";

const CategoryCards = () => {
  return (
    <HStack
      justifyContent="center"
      gap="3rem">
      <Link to="/headphones">
        <SingleCard
          image={headphones}
          title="headphones"
        />
      </Link>
      <Link to="/speakers">
        <SingleCard
          image={speakers}
          title="speakers"
        />
      </Link>
      <Link to="/earphones">
        <SingleCard
          image={earphones}
          title="earphones"
        />
      </Link>
    </HStack>
  );
};

export default CategoryCards;
