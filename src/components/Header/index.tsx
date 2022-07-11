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

const Navbar: React.FC = () => {
  const [ active, setActive ] = useState('nav_menu');
  const [icon, setIcon] = useState('nav_toggler');
  const navToggle = () => {
    if (active === 'nav_menu') {
      setActive('nav_menu nav_active')
    } else setActive('nav_menu')

    if (icon === 'nav_toggler') {
      setIcon('nav_toggler')
    } else setIcon('nav_toggler')
  }

  const closeCartBar = () => {
    setActive('nav_menu')
  }

   return(
        <Container className='headerContainer flexSB' >
          <LogoLarge>MKS <LogoSmall>Sistemas</LogoSmall></LogoLarge>
            <CartContainer onClick={navToggle} className={icon}>
              <img src={CartIcon} alt='cart'/>
              <AmountItemCart>1</AmountItemCart>
            </CartContainer>
            <CartBar className={active} > 
              <CartPage/>
            </CartBar>
        </Container>
    )
 }
 export default Navbar;
