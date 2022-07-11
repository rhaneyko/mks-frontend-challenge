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


const CartPage: React.FC = () => {
  const [ active, setActive ] = useState('nav_menu');
  const closeCartBar = () => {
    setActive('nav_menu')
  }
    return (
        <Container>
          <HeaderCartBar>
              <CartBarTitle>Carrinho de compras</CartBarTitle>
              <ButtonCloseCartBar onClick={closeCartBar}>    
               <AiOutlineClose 
                 size={30}
                 className='close'
                 color='#FFF'
               />
              </ButtonCloseCartBar> 
              </HeaderCartBar>
              <ItemsCart>
                <CartItem/>
              </ItemsCart>

              <TotalAmount>
                <p>Total</p>
                <p>R$ 0,00</p>
              </TotalAmount>
              <FinalizePurchase>
                <p>Finalizar compra</p>
              </FinalizePurchase>


        </Container>
    )
    }

    export default CartPage;
