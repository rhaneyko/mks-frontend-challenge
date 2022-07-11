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
  addToCart: (clickedItem: ItemAtCart) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
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
              {item.name}
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
              R${item.price}
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
