import React, { useState } from 'react';
import BagItem from './BagItem';

import {
  Container,
  HeaderBagBar,
  BagBarTitle,
  ButtonCloseBagBar,
  ItemsBag,
  TotalAmount,
  FinalizePurchase,
} from './styles';

import { AiOutlineClose } from 'react-icons/ai';
import { ItemAtBag } from '../../App';

type Props = {
  item: ItemAtBag[];
  removeItemFromBag: (id: number) => void;
  closeBag: () => void;
};

const BagPage: React.FC<Props> = ({
  item,
  removeItemFromBag,
  closeBag,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const priceTotal = (cartItems: ItemAtBag[]) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
  };

  return (
    <Container>
      <HeaderBagBar>
        <BagBarTitle>Sacola de compras</BagBarTitle>
        <ButtonCloseBagBar>
          <AiOutlineClose
            size={30}
            className='close'
            color='#FFF'
            onClick={closeBag}
          />
        </ButtonCloseBagBar>
      </HeaderBagBar>
      <ItemsBag>
        {BagItem.length === 0 ? <p>Nenhum item na sacola</p> : null}
        {BagItem.map((item) => (
          <BagItem
            key={item.id}
            item={item}
            removeItemFromBag={removeItemFromBag}
          />
        ))}
      </ItemsBag>
      <TotalAmount>
        <p>Total:</p>
        <p>{formatPrice(priceTotal([item]))}</p>
      </TotalAmount>
      <FinalizePurchase>
        <p>Finalizar compra</p>
      </FinalizePurchase>
    </Container>
  );
};


export default BagPage;
