import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh);
  margin-bottom:15px;
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Function = styled.span`
  color: lightgray;
  margin-bottom: 10px;
`;

export const Intro = styled.span`
  color: lightgray;
  text-align: justify;

  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const LinkProjects = styled.a`
  padding: 10px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color:#8596EF;
  margin: 20px auto;
  border: 1px solid #8596EF;
  border-radius:10px;

  &:hover {
    color:#fff;
    border: 1px solid #fff;
  }
`;

export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  img {
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    padding: 15px
  }

  @media (max-width: 760px) {
    width: 90%;
  }

  @media (max-width: 600px) {

    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

export const Img = styled.img``