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
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(item.price);


   const updateItemQty = (amount: number) => {
     setAmount(amount + 1);
   }

   const removeItemQty = () => {
     setAmount(amount - 1);
      setPrice(amount * item.price);
   }

   const setThePrice = (price: number) => {
      setAmount( amount + 1);
      setPrice(amount * item.price);
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
              onClick={removeItemQty}
            >-</MinusButton>
            <ItemAmount>
              {item.amount}
            </ItemAmount>
            <PlusButton
              onClick={() => setThePrice(item.price)}
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
