import { Stack } from "@chakra-ui/react";
import headphones from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";

const CategoryCards = () => {
  return (
    <Stack
      as="section"
      flexDirection={{
        md: "row",
        sm: "column",
      }}
      justifyContent={{
        md: "center",
        sm: "flex-end",
      }}
      alignItems="center"
      gap={{
        md: "3rem",
        sm: "6.8rem",
      }}>
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
    </Stack>
  );
};

export default CategoryCards;
