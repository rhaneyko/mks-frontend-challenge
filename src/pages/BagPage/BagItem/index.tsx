import React, { useState } from "react";

import {
  Container,
  Item,
  BagItemImage,
  BagItemName,
  BagItemAmount,
  MinusButton,
  PlusButton,
  ItemAmount,
  BagItemPrice,
  CloseBag,
} from "./styles";

import { AiOutlineClose } from "react-icons/ai";
import { ItemAtBag } from "../../../App";

type Props = {
  item: ItemAtBag;
  removeItemFromBag: (id: number) => void;
};

const BagItem: React.FC<Props> = ({ item, removeItemFromBag }) => {
  const [itemAmount, setItemAmount] = useState(1);
  const [total, setTotal] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  

  const itemQty = (bagItems: ItemAtBag[]) => {
    return bagItems.reduce((acc, item) => {
      return item.amount + acc;
    } ,0);
  };
  

  return (
    <Container>
      <Item>
        <BagItemImage src={item.photo} alt={item.name} />
        <BagItemName>{item.name}</BagItemName>
        <BagItemAmount>
          <MinusButton
            onClick={() => {
              setItemAmount((oldAmound) => oldAmound - 1);
              setTotal(total - item.price);
            }}
          >
            -
          </MinusButton>
          <ItemAmount>{itemAmount}</ItemAmount>
          <PlusButton
            onClick={() => {
              setItemAmount((oldAmound) => oldAmound + 1);
              setTotal(total + item.price);
            }}
          >
            +
          </PlusButton>
        </BagItemAmount>
        <BagItemPrice>R$
          
        </BagItemPrice>
        <CloseBag onClick={() => removeItemFromBag(item.id)}>
          <AiOutlineClose size={20} color="#FFF" />
        </CloseBag>
      </Item>
    </Container>
  );
};

export default BagItem;
