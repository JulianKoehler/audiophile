import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <h2>{params.productID}</h2>
    </div>
  );
};

export default ProductDetails;
