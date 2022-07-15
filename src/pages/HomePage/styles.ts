import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 101px;

    background-color: ${props => props.theme.colors.headerBackground};
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 70px;

    @media (max-width: 768px) {
        flex-direction: column;

        margin-top: 700px;
    }
`;
