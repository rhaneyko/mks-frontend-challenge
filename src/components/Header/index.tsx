import React, { useEffect, useRef, useState } from 'react';
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
import Skeleton from '../Skeleton';

type Props = {
  cartItems: ItemAtCart[];
  removeFromCart: (id: number) => void;
  closeCart: () => void;
}

const Navbar: React.FC<Props> = ({cartItems, removeFromCart}) => {
  const [ active, setActive ] = useState('nav_menu');
  const [ isLoading, setIsLoading ] = useState(true);
  const width = useRef(window.innerWidth / 4).current;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if(isLoading) {
    return (
      <Container className='header'>
          <Skeleton width={100} height={100} />
          <Skeleton width={100} height={100} />
          <Skeleton width={100} height={100} />
      </Container>
    )}

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
        <Container
          className='header'>
          <LogoLarge>MKS <LogoSmall>Sistemas</LogoSmall></LogoLarge>
            <CartContainer onClick={navToggle}>
              <img src={CartIcon} alt='cart'/>
              <AmountItemCart>{qtyItemsCart}</AmountItemCart>
            </CartContainer>
            <CartBar 
            className={active}> 
              <CartPage 
               cartItems={cartItems}
               removeFromCart={removeFromCart}
               closeCart={closeCartBar}
              />
            </CartBar>
        </Container>
    )
 }

 export default Navbar;
