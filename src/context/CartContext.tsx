import { createContext, useContext } from 'react'
import { ItemAtCart } from '../App';

export type CartItems = {
    id: number,
    name: string,
    price: number,
    image: string,
    quantity: number
}

const defaultValue = {
    shoppingCart: [],
    addItemIn: () => {},
    subtractItemIn: () => {},
}

type shoppingCart = {
    id: number;
    item: ItemAtCart;
}

interface ShoppingCartContextProps {
    shoppingCart: shoppingCart[];
    addItemIn: (item: ItemAtCart) => void;
    subtractItemIn: (item: ItemAtCart) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(defaultValue)

const CartContext = createContext<shoppingCart>({} as shoppingCart)

export function useCart(){
    return useContext(CartContext)
}

