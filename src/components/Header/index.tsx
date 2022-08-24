import React, { useEffect, useState } from 'react';
import {
  Container,
  LogoLarge,
  LogoSmall,
  BagContainer,
  AmountItemBag,
  BagBar,
} from './styles';

import { ItemAtBag } from '../../App';
import Skeleton from '../Skeleton';
import { AiOutlineShopping } from 'react-icons/ai';
import BagPage from '../../pages/BagPage';

type Props = {
  bagItems: ItemAtBag[];
  removeItemFromBag: (id: number) => void;
  closeBag: () => void;
};

const Navbar: React.FC<Props> = ({ bagItems, removeItemFromBag }) => {
  const [active, setActive] = useState('nav_menu');


  const navToggle = () => {
    if (active === 'nav_menu') {
      setActive('nav_menu nav_active');
    }
  };

  const closeBagBar = () => {
    setActive('nav_menu');
  };

  const qtyItemsBag = bagItems.length;

  return (
    <Container className='header'>
      <LogoLarge>
        MKS <LogoSmall>Sistemas</LogoSmall>
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