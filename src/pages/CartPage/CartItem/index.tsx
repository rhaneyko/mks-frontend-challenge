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

const CartItem: React.FC<Props> = ({item, removeFromCart}) => {
  const [amount, setAmount] = useState(1);



  const handleMinus = () => {
    if(amount > 1) {
      setAmount(amount - 1)
    }
  }

  const handlePlus = () => {
    setAmount(amount + 1)
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
              onClick={handleMinus}
            >-</MinusButton>
            <ItemAmount>
              {amount}
            </ItemAmount>
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
