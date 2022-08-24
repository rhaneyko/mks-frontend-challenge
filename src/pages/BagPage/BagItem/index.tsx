import React, { useState } from 'react';

import {
  Container,
  ItemCart,
  BagItemImage,
  BagItemName,
  BagItemAmount,
  MinusButton,
  PlusButton,
  ItemAmount,
  BagItemPrice,
  CloseBag,
} from './styles';

import { AiOutlineClose } from 'react-icons/ai';
import { ItemAtBag } from '../../../App';

type Props = {
  item: ItemAtBag;
  removeItemFromBag: (id: number) => void;
};

const BagItem: React.FC<Props> = ({ item, removeItemFromBag }) => {
  const [amount, setAmount] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const priceTotal = (cartItems: ItemAtBag[]) => {
    return cartItems.reduce((acc, item) => {
      return item.price * amount + acc;
    }, 0);
  };

  return (
    <Container>
      <ItemCart>
        <BagItemImage src={item.photo} alt={item.name} />
        <BagItemName>{item.name}</BagItemName>
        <BagItemAmount>
          <MinusButton
          onClick={() => setAmount(amount - 1)
          }
          >-</MinusButton>
          <ItemAmount>{amount}</ItemAmount>
          <PlusButton
          onClick={() => setAmount(amount + 1)}
          >+</PlusButton>
        </BagItemAmount>
        <BagItemPrice>{formatPrice(priceTotal([item]))}</BagItemPrice>
        <CloseBag onClick={() => removeItemFromBag(item.id)}>
          <AiOutlineClose size={20} color='#FFF' />
        </CloseBag>
      </ItemCart>
    </Container>
  );
};

export default BagItem;
