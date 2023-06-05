'use client'
import { Container, Content, Title, SubTitle, Capsula} from "./style";
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail} from 'react-icons/ai'

export default function Footer(){
    return(
        <Container>
           <Content> 
                <Title>Contatos</Title>
                
                <Capsula>
                    <AiOutlineMail />
                    <SubTitle> henrick.vaz.amaral@gmail.com </SubTitle>
                </Capsula>
                
                <Capsula>
                    <BsInstagram />
                    <SubTitle 
                        href="https://www.instagram.com/henrickva/" 
                        target="_blank"
                    >
                         henrickva 
                    </SubTitle>
                </Capsula>
                <Capsula>
                    <BsLinkedin />
                    <SubTitle 
                        href="https://www.linkedin.com/in/henrick-vaz-amaral-7b138a236/" 
                        target="_blank"
                    >
                         Henrick Vaz Amaral
                    </SubTitle>
                </Capsula>
                 
            </Content>
            <Title>henrickva</Title>
        </Container>
    )
}