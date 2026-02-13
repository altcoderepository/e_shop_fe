import { create } from "zustand";
import type { CartProduct } from "./types";

const initialState = { products: [] as CartProduct[] }

type CartState = typeof initialState & {
  add: (product: CartProduct) => void;
  remove: (id: string) => void;
  removeAll: () => void;
  // setCountById: (id: string, count: number) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  ...initialState,
  add: (product: CartProduct) => set((state) => ({ products: [...state.products, product] })),
  remove: (id) => set((state) => ({ products: state.products.filter((product) => product.id !== id) })),
  removeAll: () => set(() => ({ products: [] })),
  // TODO setCountById
}));