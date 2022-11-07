import * as React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
    max-width: 40rem;
    margin-right: auto;
    margin-left: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 0.8rem;
`

const Footer = () => {
    return (
        <Container>
            このページはバンダイナムコエンターテインメント様、Cygames様、バンダイナムコスタジオ様とはいっさい関係のないファンサイトです<br />
            Powered by Gatsby and Vercel with ❤️
        </Container>
    )
}

export default Footer