import { type } from '@testing-library/user-event/dist/type'
import { createContext, useContext } from 'react'

type CartItem = {
    id: number,
    name: string,
    price: number,
    image: string,
    quantity: number
}
type shoppingCart = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const CartContext = createContext<shoppingCart>({} as shoppingCart)
    
export function useCart(){
    return useContext(CartContext)
}

