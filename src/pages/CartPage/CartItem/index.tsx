import React, { useState } from 'react'

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
  addToCart: (clickedItem: ItemAtCart) => void;
}

const CartItem: React.FC<Props> = ({item, removeFromCart, addToCart}) => {
  const [price, setPrice] = useState(item.price)   
  
  const handlePlusButton = () => {
        const newAmount = item.amount + 1 * item.price
        setPrice(newAmount)
    }

    const handleMinusButton = () => {
        const newAmount = item.amount - 1 * item.price
        setPrice(newAmount)
    }

    return(
        <Container>
         <Item>
           <CartItemImage
              src={item.photo}
              alt={item.name}
           />
            <CartItemName>
              {item.name}
           </CartItemName>
           <CartItemAmount>
            <MinusButton
            >-</MinusButton>
            <ItemAmount>
              {item.amount}
            </ItemAmount>
            <PlusButton
              onClick={handlePlusButton}
            >+</PlusButton>
           </CartItemAmount>
           <CartItemPrice>
              R$ {item.price}
           </CartItemPrice>
           <CloseCart
              onClick={() => removeFromCart(item.id)}
              >
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
