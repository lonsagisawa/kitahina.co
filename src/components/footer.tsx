import * as React from 'react'
import styled from '@emotion/styled'

const Container = styled.footer({
    maxWidth: '40rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    minHeight: '8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '0.8rem',
})

const Footer = () => {
    return (
        <Container>
            このページはバンダイナムコエンターテインメント様、Cygames様、バンダイナムコスタジオ様とはいっさい関係のないファンサイトです<br />
            Powered by Gatsby and Vercel with ❤️
        </Container>
    )
}

export default Footer