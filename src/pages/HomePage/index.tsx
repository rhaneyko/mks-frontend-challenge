import React from 'react'
import ProductPage from '../../components/Product';
import {
    Container,
    CardsContainer,
} from './styles'


const HomePage: React.FC = () => {

    return (
        <Container>
            <CardsContainer>
                <ProductPage/>
            </CardsContainer>
              
        </Container>
    )
}

export default HomePage;