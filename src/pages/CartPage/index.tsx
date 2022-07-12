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
  addToCart: (clickedItem: ItemAtCart) => void;
  removeFromCart: (id: number) => void;
}

const CartPage: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
  const [ active, setActive ] = useState('nav_menu');
  
  const closeCartBar = () => {
    if(active === 'nav_menu') {
      setActive('nav_menu nav_active')
    } else setActive('nav_menu')
  }

  const calculateTotalAmount = (cartItems: ItemAtCart[]) => 
    cartItems.reduce((ack: number, item) => ack + item.amount * item.price, 0)
    return (
        <Container>
          <HeaderCartBar>
              <CartBarTitle>Carrinho de compras</CartBarTitle>
              <ButtonCloseCartBar onClick={() => removeFromCart(ItemsCart.id)}>    
               <AiOutlineClose 
                 size={30}
                 className='close'
                 color='#FFF'
               />
              </ButtonCloseCartBar> 
              </HeaderCartBar>
              <ItemsCart>
                {cartItems.length === 0 ? <p>Nenhum item no carrinho</p> : null}
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
                ))}
              </ItemsCart>
              <TotalAmount>
                <p>Total</p>
                <p>R${calculateTotalAmount(cartItems).toFixed(0)}</p>
              </TotalAmount>
              <FinalizePurchase>
                <p>Finalizar compra</p>
              </FinalizePurchase>
        </Container>
    )
    }
export default CartPage;
