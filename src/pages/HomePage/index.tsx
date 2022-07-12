import React from 'react'
import { ItemAtCart } from '../../App';
import ProductPage from '../../components/Product';
import {
    Container,
    CardsContainer,
} from './styles'

type Props = {
    product: ItemAtCart[];
    addToCart: (clickedItem: ItemAtCart) => void;
}

const HomePage: React.FC<Props> = ({product, addToCart}) => {

    return (
        <Container>
            <CardsContainer>
                    <ProductPage
                      product={product}
                      addToCart={addToCart}
                    />
            </CardsContainer>
              
        </Container>
    )
}

export default HomePage;
