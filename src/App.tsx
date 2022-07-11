import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import HomePage from './pages/HomePage';

import Skeleton from './components/Skeleton';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

export type CartItem = {
  id: number;
  photo: string;
  name: string;
  price: number;
  quantity: number;
}


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const width = useRef(window.innerWidth / 4).current;

  const [ cartItems, setCartItems ] = useState([] as CartItem[]);

  const handleAddToCart = (clickedItem: CartItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  }; 



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
    <div className='App'>
      <div  className='header'>
        <Skeleton width={200} height={40} />
        <Skeleton width={90} height={20} borderRadius={20}/>
      </div>
     <div className='content'>
      {[0, 1, 2, 3, 4, 5, 6, 7].map(product => (
        <Skeleton key={product} width={200} height={200} />
      ))}
      </div>
    </div>
    )
    
  }
  return (

    <ThemeProvider theme={theme}>
      <Header/>
      <HomePage />
      <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;
