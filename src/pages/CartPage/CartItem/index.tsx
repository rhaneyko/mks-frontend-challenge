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
import { CartItem } from '../../../App';

type CartItemProps = {
  item: CartItem;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

const CartItem = () => {
  const [amount, setAmount] = useState(1)

  const handleMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const handlePlus = () => {
    setAmount(amount + 1)
  }

    return(
        <Container>
         <Item>
           <CartItemImage/>
            <CartItemName>
              Nome do produto
           </CartItemName>
           <CartItemAmount>
            <MinusButton
              onClick={handleMinus}
            >-</MinusButton>
            <ItemAmount>{amount}</ItemAmount>
            <PlusButton
              onClick={handlePlus}
            >+</PlusButton>
           </CartItemAmount>
           <CartItemPrice>
           </CartItemPrice>
           <CloseCart>
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
