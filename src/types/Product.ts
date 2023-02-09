interface Product {
  category: "headphones" | "speakers" | "earphones";
  categoryImage: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  description: string;
  features: string;
  gallery: {
    first: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    second: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    third: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
  };
  id: number;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  includes: {
    item: string;
    quantity: number;
  }[];
  name: string;
  name_short: string;
  new: boolean;
  others: Array<{
    category: string;
    image: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    name: string;
    slug: string;
  }>;
  price: number;
  slug: string;
}

export default Product;
