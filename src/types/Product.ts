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
    [index: number]: {
      item: string;
      quantity: number;
    };
  };
  name: string;
  new: boolean;
  others: {
    [index: number]: {
      image: {
        desktop: string;
        mobile: string;
        tablet: string;
      };
      name: string;
      slug: number;
    };
  };
  price: number;
  slug: "string";
}

export default Product;
