import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  align-items: center;
  text-align: left;
  background-color: #8596EF;
  color: #132586;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
`;

export const Capsula = styled.div`
  padding-top: 2px;
  display: flex;
  align-items: center;
  color: #132586;
`;

export const Title = styled.h1`
    text-align: left;
    margin-bottom: 3px;
`;  

export const SubTitle = styled.a`
    padding: 3px;
    color: #132586;
    target: blank;
    transition: 0.3s;

    &:hover {
        color: #fff;
    }
`;