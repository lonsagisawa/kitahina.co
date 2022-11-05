import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { NONAME } from 'dns'

type HeaderProps = {
    pageTitle: string,
}

const Container = styled.header({
    maxWidth: '40rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    minHeight: '12rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
})

const Title = styled.h1({
    fontSize: '2rem',
    fontWeight: '900 !important',
    a: {
        textDecoration: 'none !important',
    },
})

const Header = ({ pageTitle }: HeaderProps) => {
    return (
        <Container>
            <Title><Link to='/'>kitahina.co</Link></Title>
            <p>{ pageTitle }</p>
        </Container>
    )
}

export default Header