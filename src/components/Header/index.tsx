import React, { useState } from 'react';
import {  
      Container,
      LogoLarge,
      LogoSmall,
      CartContainer,
        AmountItemCart,
        CartBar,
     } from './styles'
import CartPage from '../../pages/CartPage';


import CartIcon from '../../assets/Vector.png'

import { ItemAtCart } from '../../App';

type Props = {
  cartItems: ItemAtCart[];
  addToCart: (clickedItem: ItemAtCart) => void;
  removeFromCart: (id: number) => void;
  closeCart: () => void;
}

const Navbar: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
  const [ active, setActive ] = useState('nav_menu');
  const navToggle = () => {
    if (active === 'nav_menu') {
      setActive('nav_menu nav_active')
    }
  }

  const closeCartBar = () => {
    setActive('nav_menu')
  }

  const qtyItemsCart = cartItems.length;

   return(
        <Container>
          <LogoLarge>MKS <LogoSmall>Sistemas</LogoSmall></LogoLarge>
            <CartContainer onClick={navToggle}>
              <img src={CartIcon} alt='cart'/>
              <AmountItemCart>{qtyItemsCart}</AmountItemCart>
            </CartContainer>
            <CartBar 
            className={active}> 
              <CartPage 
               cartItems={cartItems}
               addToCart={addToCart}
               removeFromCart={removeFromCart}
               closeCart={closeCartBar}
              />
            </CartBar>
        </Container>
    )
 }

 export default Navbar;
