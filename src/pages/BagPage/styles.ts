import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: space-between;

    height: 100%;
`;

export const HeaderBagBar = styled.header`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    padding: 36px 22px 0 22px;
`;

export const BagBarTitle = styled.p`
    font-size: 27px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;

    color: #FFF;

    margin-right: 199px;
    margin-bottom: 20px;
`;

export const ButtonCloseBagBar = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   width: 50px;
   height: 40px;

   border-radius: 50%;

   margin-top: -45px;

   background-color: #000;

   cursor: pointer;
`;

export const ItemsBag = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;
    height: 65%;

    font-size: 20px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;

    color: #FFF;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 7px;
}
    ::-webkit-scrollbar-thumb {
        background-color: #F0F0F0;
        border-radius: 5px;
    }
`;

export const TotalAmount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    width: 100%;

    padding: 0 68px 0 47px;

    font-size: 28px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
        
    color: #FFF;
`;

export const FinalizePurchase = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 97px;


    background-color: #000;

    cursor: pointer;

    p{
        font-size: 27px;
        font-weight: 700;
        font-family: 'Montserrat', sans-serif;

        color: #FFF;
    }
`;


