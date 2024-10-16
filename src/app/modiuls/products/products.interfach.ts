export type TProducts = {
  name: string;
  image: {
    img1: string;
  };
  rating?: number;
  price: number;
  discreption: string;
  extarDiscreption: {
    header: string;
    details: string;
  };
  catagory: string;
  review?: number;
  instock: number;
  discount: number;
  isDeleted: boolean;
};
export type TAddToCatd = {
  name: string;
  productID: string;
  email: string;
  image: string;
  rating: number;
  price: number;
  discreption: string;
  extarDiscreption: {
    header: string;
    details: string;
  };
  catagory: string;
  review?: number;
  instock: number;
  discount: number;
};
