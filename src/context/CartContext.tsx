import { createContext, useContext } from "react";
import { ItemAtBag } from "../App";

export type BagItems = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const defaultValue = {
  shoppingBag: [],
  addItemIn: () => {},
  subtractItemIn: () => {},
};

type shoppingBag = {
  id: number;
  item: ItemAtBag;
  amount: number;
  price: number;
};

interface shoppingBagContextProps {
  shoppingBag: shoppingBag[];
  addItemIn: (item: ItemAtBag) => void;
  subtractItemIn: (item: ItemAtBag) => void;
}

export const shoppingBagContext =
  createContext<shoppingBagContextProps>(defaultValue);

const CartContext = createContext<shoppingBag>({} as shoppingBag);

export function useCart() {
  return useContext(CartContext);
}
