import React from "react";
import { ItemAtBag } from "../../App";
import ProductPage from "../../components/Product";
import { Container, CardsContainer } from "./styles";

type Props = {
  addToBag: (clickedItem: ItemAtBag) => void;
};

const HomePage: React.FC<Props> = ({ addToBag }) => {
  return (
    <Container>
      <CardsContainer>
        <ProductPage addToBag={addToBag} />
      </CardsContainer>
    </Container>
  );
};

export default HomePage;
