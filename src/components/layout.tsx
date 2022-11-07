import * as React from 'react'
import Header from './header'
import Footer from './footer'
import 'the-new-css-reset'
import styled from 'styled-components'
import '../line_seed_fonts/LINESeedJP.css'

type LayoutProps = {
    pageTitle: string,
    children: any,
}

const Global = styled.div`
    font-family: 'LINESeedJP', sans-serif;
    background-color: #fefefe;
    color: #111;
    @media (prefers-color-scheme: dark) {
        background-color: #111;
        color: #fefefe;
    }
    line-height: 1.6;
    strong {
        font-weight: 700;
    }
    a {
        text-decoration: underline;
        transition: color 100ms ease-out;
        :hover {
            color: #f4d059;
        }
    }
    h1 {
        font-size: 2rem;
        font-weight: 700;
    }
    h2 {
        font-size: 1.75rem;
        font-weight: 700;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    h3 {
        font-size: 1.25rem;
        font-weight: 700;
    }
    blockquote {
        color: #676767;
        background-color: #eee;
        @media (prefers-color-scheme: dark) {
            color: #ccc;
            background-color: #222;
        }
        padding: 1rem;
        border-left: solid 1rem #f4d059;
    }
    code {
        padding: 1rem;
        font-family: monospace;
    }
    table {
        width: 100%;
        table-layout: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    thead {
        font-weight: 700;
    }
`

const Container = styled.main`
    max-width: 40em;
    padding: 0 1rem;
    margin: 0 auto;
    p {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

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
