import React from "react";
import CartItem from "./CartItem";

import {
  Container,
  HeaderBagBar,
  BagBarTitle,
  ButtonCloseBagBar,
  ItemsBag,
  TotalAmount,
  FinalizePurchase,
} from "./styles";

import { AiOutlineClose } from "react-icons/ai";
import { ItemAtBag } from "../../App";

type Props = {
  bagItems: ItemAtBag[];
  removeItemFromBag: (id: number) => void;
  closeBag: () => void;
};

const CartPage: React.FC<Props> = ({
  bagItems,
  removeItemFromBag,
  closeBag,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const priceTotal = (bagItems: ItemAtBag[]) => {
    return bagItems.reduce((acc, item) => {
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
            className="close"
            color="#210124"
            onClick={closeBag}
          />
        </ButtonCloseBagBar>
      </HeaderBagBar>
      <ItemsBag>
        {bagItems.length === 0 ? <p>Nenhum item no carrinho</p> : null}
        {bagItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeItemFromBag={removeItemFromBag}
          />
        ))}
      </ItemsBag>
      <TotalAmount>
        <p>Total:</p>
        <p>{formatPrice(priceTotal(bagItems))}</p>
      </TotalAmount>
      <FinalizePurchase>
        <p>Finalizar compra</p>
      </FinalizePurchase>
    </Container>
  );
};
export default CartPage;
