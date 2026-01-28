import { create } from "zustand";
import type { Product } from "./types";

const initialState = { products: [] as Product[] }

type CartState = typeof initialState & {
  add: (product: Product) => void;
  remove: (id: string) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  ...initialState,
  add: (product: Product) => set((state) => ({ products: [...state.products, product] })),
  remove: (id) => set((state) => ({ products: state.products.filter((product) => product.id !== id) })),
}));