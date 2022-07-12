import React from 'react'
import { ItemAtCart } from '../../App';
import ProductPage from '../../components/Product';
import {
    Container,
    CardsContainer,
} from './styles'

type Props = {
    addToCart: (clickedItem: ItemAtCart) => void;
}

const HomePage: React.FC<Props> = ({addToCart}) => {

    return (
        <Container>
            <CardsContainer>
                 <ProductPage
                    addToCart={addToCart}/>
            </CardsContainer>
        </Container>
    )
}

export default HomePage;
