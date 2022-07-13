import React, { useState, useEffect } from 'react'

import {
    Container,
    ProductCard,
    ProductImage,
    ProductInfos,
    ProductTitle,
    ProductPrice,
    ProductDescription,
    BuyButton,
    BuyButtonText,
} from './styles'
import shoppingBag from '../../assets/shopping-bag.png'
import { ItemAtCart } from '../../App';

type Props = {
  addToCart: (clickedItem: ItemAtCart) => void;
}

const Product: React.FC<Props> = ({ addToCart}) => {
    const [ productsMks, setProductsMks ] = useState<any[]>([])
 
    useEffect(function(){
        fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC')
        .then(productResponse => productResponse.json())
        .then(completeProductResponse => {
            setProductsMks(completeProductResponse.products)
        })
        })

        const priceItem = (price: number) => {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(price)
        }

        return (
          <Container className='grid-container'>
             {productsMks.map(product => (
                <ProductCard key={product.id}>  
                       <ProductImage src={product.photo} alt={product.name}/>
                       <ProductInfos>
                        <div style={{ padding: 4, borderRadius: 5}} >
                          <ProductTitle>{product.name}</ProductTitle>
                        </div>
                         <div style={{backgroundColor: '#373737', width: 80, height: 25, padding: 4, marginLeft: 10, borderRadius: 5}} >
                           <ProductPrice>
                              {priceItem(product.price)}
                           </ProductPrice>
                         </div>
                       </ProductInfos>
                      <ProductDescription>{product.description}</ProductDescription>
                    <BuyButton
                    onClick={() => addToCart(product)}>
                        <img src={shoppingBag} alt='bag' />
                        <BuyButtonText>Comprar</BuyButtonText>
                    </BuyButton>
                </ProductCard>
            ))}
        </Container>
    )
}

export default Product;

