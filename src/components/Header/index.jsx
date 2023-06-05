'use client'
import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header(){
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)
    //#8596EF
    return(
        <Container>
            <Content>
                <Title>
                    henrickva
                </Title>

                <Menu>
                    <FaBars onClick={showSiderbar} />
                </Menu>

                <NavLinks sidebar={sidebar}>
                <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
                     <Ancora href='/'>Home</Ancora>
                     <Ancora href='/projects'>Projetos</Ancora>
                </NavLinks>
            </Content>
        </Container>   
    )
}