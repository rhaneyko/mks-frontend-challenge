import styled from 'styled-components';

 export const Container = styled.header`
    display: flex;

    justify-content: space-between;
    align-items: center;

     padding: 30px 88px 29px 65px;
    
    background-color: ${props => props.theme.colors.headerBackground};
     
    position: fixed;

    backdrop-filter: blur(6px);

    margin: auto;
   
    top: 0;
    left: 0;
    width: 100%;
    height: 101px;

    @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
    }

.nav_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav_toggler {
  font-size: 20px;
  display: flex;
}

  .nav_toggler {
    display: flex;
  }
  .nav_menu {
    width: 486px;
    height: 929px;

    flex-direction: column;

    right: 0;
    top: 0;
      
    position: absolute;
    
    background-color: #210124;

    transform: translateX(100%);
    transition: 0.5s;
    z-index: 999;

    @media (max-width: 768px) {
      right: 0;
      width: 380px;
    }
  }
  .nav_active {
    transform: translateX(0);

    @media (max-width: 768px) {
      transform: translateX(0);
    }
  }
`;

export const LogoLarge = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 600;

  color: #FFF;
`;

export const LogoSmall = styled.p`
  color: #FFF;
  font-size: 20px;
  font-weight: 300;

  margin-left: 110px;
  margin-top: -27px;
`;

export const BagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 90px;
  height: 45px;

  border-radius: 8px;
  background-color: #FFF;

  cursor: pointer;
`;

export const AmountItemBag = styled.p`
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;

  margin: 10px;
  
`;

export const BagBar = styled.div`
  display: flex;
  flex-direction: column;

`;
