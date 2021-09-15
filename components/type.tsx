export interface IProduct {
  id: number;
  title: string;
  description: string;
  type: string;
  brand: string;
  category: string;
  price: number;
  new: string;
  sale: string;
  stock: number;
  discount: string;
  variants: {
    id: string;
    sku: string;
    size: null;
    color: null;
    image_id: number;
    __typename: string;
  }[];
  images: [
    {
      image_id: number;
      id: string;
      alt: string;
      src: string;
      __typename: string;
    }
  ];
  __typename: string;
}
