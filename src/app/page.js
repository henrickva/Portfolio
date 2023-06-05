'use client'

import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from './indexStyle'
import Foto from './fotoPerfil.png'
import Image from 'next/image'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Henrick Amaral</Name>
        <Function>Front-End Developer</Function>
        <Intro>Graduando em Engenharia Elétrica pela UNIFEI - Universidade Federal de Itajubá, 
        estudo sobre desenvolvimento front-end 
        há mais de 2 anos e viso ampliar ainda mais meus conhecimentos e habilidades com React, e junto 
        as minhas noções de UI/UX busco estabelecer o que me trouxe para programação, 
        tornar a internet uma ferramenta mais fácil e acessível para todos.
        </Intro>
          <LinkProjects href='/projects'>Ver Projetos</LinkProjects>
      </Infos>
      <Logo>
        <Image src={Foto} alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}