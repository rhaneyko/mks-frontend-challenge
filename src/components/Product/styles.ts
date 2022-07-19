import styled from 'styled-components'

export const Container = styled.div`
   display: grid;
   grid: 330px / auto auto auto auto;
   grid-gap: 23px;

   @media (max-width: 768px) {
        grid: auto / auto auto;
   }
`;

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;

    
    align-items: center;
    justify-content: space-between;

    width: 250px;
    height: 330px;

    border-radius: 8px;

    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

    background-color: ${props => props.theme.colors.cardBackground};

    @media (max-width: 768px) {
        width: 200px;
        height: 300px;
    }
`;

export const ProductImage = styled.img`
    width: 150px;
    height: 140px;

    margin: 5px 0 10px 0;
`;

export const ProductInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    padding: 10px;
`;

export const ProductTitle = styled.p`
    font-size: 17px;
    font-weight: 400;

    color: ${props => props.theme.colors.text};

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ProductPrice = styled.p`
    font-size: 15px;
    font-weight: 700;

    border-radius: 5px;

    color: #fff;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const ProductDescription = styled.p`
    font-size: 12px;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;

    color: ${props => props.theme.colors.text};

    padding: 5px;

    @media (max-width: 768px) {
        font-size: 10px;    
    }
`;

export const AddBagButton = styled.button`
    display: flex;

    align-items: center;
    justify-content: center; 

    width: 40px;
    height: 40px;

    border: none;
    border-radius: 50%;

    margin-top: -90px;
    margin-right: -180px;
    
    color: #FFF;
    background-color: ${props => props.theme.colors.buttonBackground};
    
    cursor: pointer;
`;
