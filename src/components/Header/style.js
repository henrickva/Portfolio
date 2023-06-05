import styled from 'styled-components';


export const Container = styled.div`
  padding:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #8596EF;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 560px) {
    flex-direction: column;
    background-color: white;
    color: #132586;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;

    a {
      color:#132586;
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      &:hover {
        color: #8596EF;
      }
    }
  }
`;

export const Ancora = styled.a`
  font-size: 18px;
  transition: 0.3s;
  color:#8596EF;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

