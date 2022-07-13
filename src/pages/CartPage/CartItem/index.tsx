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

  useEffect(() => {
    setAmount(item.amount)
  }
  , [item.amount])

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
           <CartItemImage
              src={item.photo}
              alt={item.name}/>
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
                
              >+</PlusButton>
           </CartItemAmount>
           <CartItemPrice>
              R$ {item.price}
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
