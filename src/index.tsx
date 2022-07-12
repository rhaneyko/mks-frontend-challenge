import React from 'react';
import ReactDOM from 'react-dom';
import App, { ItemAtCart } from './App';

type Props = {
  cartItems: ItemAtCart[];
  addToCart: (clickedItem: ItemAtCart) => void;
  removeFromCart: (id: number) => void;
}

ReactDOM.render(
    <React.StrictMode>
      <App 
      cartItems={[]}
      addToCart={() => { } }
      removeFromCart={() => { } } 
      product={[]}              />
    </React.StrictMode>,
    document.getElementById('root')
  );
