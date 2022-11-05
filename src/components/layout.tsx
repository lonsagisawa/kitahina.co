import * as React from 'react'
import Header from './header'
import Footer from './footer'
import 'the-new-css-reset'
import styled from "@emotion/styled"
import '../line_seed_fonts/LINESeedJP.css'

type LayoutProps = {
    pageTitle: string,
    children: any,
}

const Global = styled.div({
    fontFamily: '"LINESeedJP", sans-serif',
    backgroundColor: '#fefefe',
    color: '#111111',
    '@media (prefers-color-scheme: dark)': {
        backgroundColor: '#111111',
        color: '#fefefe',
    },
    lineHeight: 1.6,
    strong: {
        fontWeight: 700,
    },
    a: {
        textDecoration: 'underline',
        transition: 'color 100ms ease-out',
        ':hover': {
            color: '#F4D059',
        },
    },
    h1: {
        fontSize: '2rem',
        fontWeight: 700,
    },
    h2: {
        fontSize: '1.75rem',
        fontWeight: 700,
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    h3: {
        fontSize: '1.25rem',
        fontWeight: 700,
    },
    blockquote: {
        color: '#676767',
        backgroundColor: '#eeeeee',
        '@media (prefers-color-scheme: dark)': {
            color: '#cccccc',
            backgroundColor: '#222222',
        },
        padding: '1rem',
        borderLeftStyle: 'solid',
        borderLeftColor: '#f4d059',
        borderLeftWidth: '1rem',
    },
    code: {
        padding: '1rem',
        fontFamily: 'monospace',
    },
    table: {
        width: '100%',
        tableLayout: 'auto',
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    thead: {
        fontWeight: 700,
    },
})

const Container = styled.main({
    maxWidth: '40em',
    padding: '0 1rem',
    margin: '0 auto',
    p: {
        marginTop: '1rem',
        marginBottom: '1rem',
    },
})

const Layout = ({ pageTitle, children }: LayoutProps) => {
    return (
        <Global>
            <Header pageTitle={ pageTitle } />
            <Container>
                { children }
            </Container>
            <Footer />
        </Global>
    )
}

export default Layout
