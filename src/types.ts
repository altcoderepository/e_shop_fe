
export type Product = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  price: number;
  coverUrl?: string;
}

export type CartProduct = Product & {
  count: number
};