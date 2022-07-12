import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <React.StrictMode>
      <App 
      cartItems={[]}
      closeCart={() => {}}
      />

    </React.StrictMode>,
    document.getElementById('root')
  );
