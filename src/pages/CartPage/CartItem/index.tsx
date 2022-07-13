import React, { useContext, useEffect, useState } from 'react'

import {
    Container,
    Item,
    CartItemImage,
    CartItemName,
    CartItemAmount,
    MinusButton,
    PlusButton,
    ItemAmount,
    CartItemPrice,
    CloseCart,
} from './styles'

import { AiOutlineClose } from 'react-icons/ai'
import { ItemAtCart } from '../../../App';

type Props = {
  item: ItemAtCart;
  removeFromCart: (id: number) => void;
}


const CartItem: React.FC<Props> = ({item, removeFromCart, }) => {
  const [amount, setAmount] = useState(item.amount)
  const [price, setPrice] = useState(item.price)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const priceTotal = (cartItems: ItemAtCart[]) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount
    }, 0)
  }

  return(
        <Container>
         <Item>
           <CartItemImage
              src={item.photo}
              alt={item.name}/>
            <CartItemName>
              {item.name}
           </CartItemName>
           <CartItemAmount>
            <MinusButton
              onClick={() => {
                setAmount((oldAmound) => oldAmound - 1)
                setPrice((oldPrice) => oldPrice - item.price)
              }}
            >-</MinusButton>
            <ItemAmount>
              {amount}
            </ItemAmount>
            <PlusButton
              onClick={() => {
                setAmount((oldAmound) => oldAmound + 1)
                setPrice((oldPrice) => oldPrice + item.price)
              }}
            >+</PlusButton>
           </CartItemAmount>
           <CartItemPrice>
              R$ {formatPrice(priceTotal([item]))}
           </CartItemPrice>
           <CloseCart
              onClick={() => removeFromCart(item.id)}>
              <AiOutlineClose
                size={20}
                color='#FFF'
              />
           </CloseCart>
         </Item>
    </Container>
    )
  }

export default CartItem;
