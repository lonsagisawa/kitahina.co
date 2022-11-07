import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type HeaderProps = {
    pageTitle: string,
}

const Container = styled.header`
    max-width: 40rem;
    margin-right: auto;
    margin-left: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 900 !important;
    a {
        text-decoration: none !important;
    }
`

const Header = ({ pageTitle }: HeaderProps) => {
    return (
        <Container>
            <Title><Link to='/'>kitahina.co</Link></Title>
            <p>{ pageTitle }</p>
        </Container>
    )
}

export default Header