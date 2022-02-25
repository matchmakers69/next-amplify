export interface IRate {
  rate: number;
  count: number;
}
export interface IProduct {
  id: number;
  title: string;
  price: number;
  rating: IRate;
  category: string;
  description: string;
  image: string;
}
export interface IProducts {
  products: IProduct[];
}
