import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: space-between;

    height: 100%;
`;

export const HeaderCartBar = styled.header`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: 36px 22px 0 22px;
`;

export const CartBarTitle = styled.p`
    font-size: 27px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;

    color: #FFF;

    margin-right: 199px;
    margin-bottom: 20px;
`;

export const ButtonCloseCartBar = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   width: 50px;
   height: 38px;

   border-radius: 50%;

   margin-top: -20px;

   background-color: black;
`;

export const ItemsCart = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;
    height: 65%;

    p{
        font-size: 20px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;

        color: #FFF;

        margin-top: 250px;
    }
`;

export const TotalAmount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    width: 100%;

    padding: 0 68px 0 47px;

    p{
        font-size: 28px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;
        color: #FFF;
    }
`;

export const FinalizePurchase = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 97px;

    background-color: #000;

    p{
        font-size: 28px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;

        color: #FFF;

    }
`;
