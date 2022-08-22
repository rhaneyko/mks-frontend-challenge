import React, { useState, useEffect } from 'react';

import {
  Container,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  AddBagButton,
  ButtonText,
} from './styles';

import { ItemAtBag } from '../../App';

import { AiOutlineShopping } from 'react-icons/ai';
//import Skeleton from '../Skeleton';

type Props = {
  addToBag: (clickedItem: ItemAtBag) => void;
};

const Product: React.FC<Props> = ({ addToBag }) => {
  const [productsMks, setProductsMks] = useState<any[]>([]);

  useEffect(function () {
    fetch(
      'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC'
    )
      .then((productResponse) => productResponse.json())
      .then((completeProductResponse) => {
        setProductsMks(completeProductResponse.products);
      });
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Container className='grid-container'>
      { productsMks &&
      productsMks.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.photo} alt={product.name} />
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>{formatPrice(product.price)}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>

          <AddBagButton onClick={() => addToBag(product)}>
            <AiOutlineShopping size={30} />
            <ButtonText>COMPRAR</ButtonText>
          </AddBagButton>
        </ProductCard>
      ))}
    </Container>
  );
};

export default Product;
