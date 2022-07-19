import React, { useEffect, useState } from "react";
import {
  Container,
  LogoLarge,
  LogoSmall,
  CartContainer,
  AmountItemCart,
  CartBar,
} from "./styles";
import CartPage from "../../pages/CartPage";

import { ItemAtBag } from "../../App";
import Skeleton from "../Skeleton";
import { AiOutlineShopping } from "react-icons/ai";

type Props = {
  bagItems: ItemAtBag[];
  removeItemFromBag: (id: number) => void;
  closeBag: () => void;
};

const Navbar: React.FC<Props> = ({ bagItems, removeItemFromBag }) => {
  const [active, setActive] = useState("nav_menu");
  const [isLoading, setIsLoading] = useState(true);
  //const width = useRef(window.innerWidth / 4).current;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return (
      <Container className="header">
        <Skeleton width={100} height={100} />
        <Skeleton width={100} height={100} />
        <Skeleton width={100} height={100} />
      </Container>
    );
  }

  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    }
  };

  const closeBagBar = () => {
    setActive("nav_menu");
  };

  const qtyItemsCart = bagItems.length;

  return (
    <Container className="header">
      <LogoLarge>
        Tooth <LogoSmall>Produtos</LogoSmall>
      </LogoLarge>
      <CartContainer onClick={navToggle}>
        <AiOutlineShopping size={25} />
        <AmountItemCart>{qtyItemsCart}</AmountItemCart>
      </CartContainer>
      <CartBar className={active}>
        <CartPage
          bagItems={bagItems}
          removeItemFromBag={removeItemFromBag}
          closeBag={closeBagBar}
        />
      </CartBar>
    </Container>
  );
};

export default Navbar;
