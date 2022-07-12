import styled from 'styled-components';

    export const Container = styled.div``;

export const Item = styled.div`
    display: flex;
    width: 379px;
    height: 95px;

    align-items: center;
    justify-content: space-between;

    border-radius: 8px;

    margin: 20px;

    box-shadow: -2px 2px 10px 0 rgba(0, 0, 0, 0.05);


    background-color: #FFF;
`;

export const CartItemImage = styled.img`
    display: flex;
    width: 46px;
    height: 57px;

    background-color: red;
`;
export const CartItemName = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 400;

    color: rgba(44, 44, 44, 1);
`;
export const CartItemAmount = styled.div`
    display: flex;  
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 50px;
    height: 28px;

    border: 1px solid #BFBFBF;
    border-radius: 4px;


`;

export const MinusButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 17px;
    height: 17px;

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: none;

    background-color: #FFF;

    color: #000;


`;
export const PlusButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 17px;
    height: 17px;

    color: #000;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    background-color: #FFF;
    border: none;
`;

export const ItemAmount = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 400;

    padding: 5px;

    color: rgba(0, 0, 0, 1);

    

    border-left: 0.2px solid #BFBFBF;
    border-right: 0.2px solid #BFBFBF;

`;
export const CartItemPrice = styled.p`
    font-size: 14px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    color: rgba(0, 0, 0, 1);
`;

export const CloseCart = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    border-radius: 20px;

    margin-right: -8px;
    margin-top: -88px;

    background-color: black;
`;
