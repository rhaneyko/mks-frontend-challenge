import React, { useState, useEffect } from "react";

import {
  Container,
  ProductCard,
  ProductImage,
  ProductInfos,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  AddBagButton,
} from "./styles";

import { ItemAtBag } from "../../App";

import { AiOutlineShopping } from "react-icons/ai";
//import Skeleton from '../Skeleton';

type Props = {
  addToBag: (clickedItem: ItemAtBag) => void;
};

const Product: React.FC<Props> = ({ addToBag }) => {
  const [productsMks, setProductsMks] = useState<any[]>([]);

  useEffect(function () {
    fetch(
      "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
    )
      .then((productResponse) => productResponse.json())
      .then((completeProductResponse) => {
        setProductsMks(completeProductResponse.products);
      });
  });

  return (
    <Container className="grid-container">
      {productsMks.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.photo} alt={product.name} />
          <ProductInfos>
            <div style={{ padding: 4, borderRadius: 5 }}>
              <ProductTitle>{product.name}</ProductTitle>
            </div>
            <div
              style={{
                backgroundColor: "#210124",
                width: 80,
                height: 25,
                padding: 4,
                marginLeft: 10,
                borderRadius: 5,
              }}
            >
              <ProductPrice>R${product.price}</ProductPrice>
            </div>
          </ProductInfos>
          <AddBagButton onClick={() => addToBag(product)}>
            <AiOutlineShopping size={30} />
          </AddBagButton>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductCard>
      ))}
    </Container>
  );
};
export default Product;
