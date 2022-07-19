import React, { useEffect, useState } from "react";
import {
  Container,
  LogoLarge,
  LogoSmall,
  BagContainer,
  AmountItemBag,
  BagBar,
} from "./styles";

import { ItemAtBag } from "../../App";
import Skeleton from "../Skeleton";
import { AiOutlineShopping } from "react-icons/ai";
import BagPage from "../../pages/BagPage";

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

  const qtyItemsBag = bagItems.length;

  return (
    <Container className="header">
      <LogoLarge>
        Tooth <LogoSmall>Produtos</LogoSmall>
      </LogoLarge>
      <BagContainer onClick={navToggle}>
        <AiOutlineShopping size={25} />
        <AmountItemBag>{qtyItemsBag}</AmountItemBag>
      </BagContainer>
      <BagBar className={active}>
        <BagPage
          bagItems={bagItems}
          removeItemFromBag={removeItemFromBag}
          closeBag={closeBagBar}
        />
      </BagBar>
    </Container>
  );
};

export default Navbar;
