import React, { useState } from 'react'
import CartItem from './CartItem';

import {
   Container,
   HeaderCartBar,
   CartBarTitle,
   ButtonCloseCartBar,
   ItemsCart,
   TotalAmount,
   FinalizePurchase,
} from './styles'

import { AiOutlineClose } from 'react-icons/ai'
import { ItemAtCart } from '../../App';



type Props = {
  cartItems: ItemAtCart[];
  removeFromCart: (id: number) => void;
  closeCart: () => void;
  addToCart: (clickedItem: ItemAtCart) => void;
}

const CartPage: React.FC<Props> = ({cartItems, removeFromCart, closeCart, addToCart}) => {
  const finishPurchase = () => {}
  
  
    const calculateTotalAmount = (cartItems: ItemAtCart[]) => 
     cartItems.reduce((ack: number, item) => ack + item.amount * item.price, 0)

     

    return (
        <Container>
          <HeaderCartBar>
              <CartBarTitle>Carrinho de compras</CartBarTitle>
              <ButtonCloseCartBar>
               <AiOutlineClose 
                 size={30}
                 className='close'
                 color='#FFF'
                 onClick={closeCart}
               />
              </ButtonCloseCartBar> 
              </HeaderCartBar>
              <ItemsCart>
                {cartItems.length === 0 ? <p>Nenhum item no carrinho</p> : null}
                {cartItems.map(item => (
                  <CartItem 
                  key={item.id} 
                  item={item}   
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                  />
                ))}
              </ItemsCart>
              <TotalAmount>
                <p>Total:</p>
                <p>R$ {calculateTotalAmount(cartItems)}</p>
              </TotalAmount>
              <FinalizePurchase
                onClick={finishPurchase}>
                <p>Finalizar compra</p>
              </FinalizePurchase>
        </Container>
    )
}
export default CartPage;
