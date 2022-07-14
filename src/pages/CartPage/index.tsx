import React from 'react'
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
}

const CartPage: React.FC<Props> = ({cartItems, removeFromCart, closeCart}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const priceTotal = (cartItems: ItemAtCart[]) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount
    }, 0)
  }

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
                  />
                ))}
              </ItemsCart>
              <TotalAmount>
                <p>Total:</p>
                <p>{formatPrice(priceTotal(cartItems))}</p>
              </TotalAmount>
              <FinalizePurchase>

                <p>Finalizar compra</p>
              </FinalizePurchase>
        </Container>
    )
}
export default CartPage;
