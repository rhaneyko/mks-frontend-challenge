import React, { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import HomePage from './pages/HomePage';

import Skeleton from './components/Skeleton';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

export type ItemAtBag = {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  quantity: number;
};

type Props = {
  bagItems: ItemAtBag[];
  closeBag: () => void;
  addToBag: (clickedItem: ItemAtBag) => void;
};

const App: React.FC<Props> = ({ closeBag }) => {
  

  const [bagItems, setBagItems] = useState([] as ItemAtBag[]);

  const addItemToCart = (clickedItem: ItemAtBag) => {
    setBagItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const removeItemFromBag = (id: number) => {
    setBagItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className='App'>
  //       <div className='header'>
  //         <Skeleton width={200} height={40} />
  //         <Skeleton width={90} height={20} borderRadius={20} />
  //       </div>
  //       <div className='content'>
  //         {[0, 1, 2, 3, 4, 5, 6, 7].map((product) => (
  //           <Skeleton key={product} width={200} height={200} />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <ThemeProvider theme={theme}>
      <Header
        bagItems={bagItems}
        removeItemFromBag={removeItemFromBag}
        closeBag={closeBag}
      />
      
      <HomePage addToBag={addItemToCart} />

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;