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
}

const CartItem: React.FC<Props> = ({item, removeFromCart}) => {
  const [amount, setAmount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(item.price);


  const updateItemQty = (amount: number) => {
    setAmount(amount + 1);
    setTotalAmount(totalAmount + item.price);
  }

  const removeItemQty = () => {
    setAmount(amount - 1);
    setTotalAmount(totalAmount - item.price);
  }

  // const removeItem = () => {
  //    removeFromCart(item.id);
  // }

  const itemTotal = () => {
    return amount * item.price;
  }

  const itemPrice = item.price * amount;

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
              onClick={removeItemQty}
            >-</MinusButton>
            <ItemAmount>
              {amount}
            </ItemAmount>
            <PlusButton
              onClick={() => updateItemQty(amount)}
            >+</PlusButton>
           </CartItemAmount>
           <CartItemPrice>
              R$ {itemTotal()}
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
