import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import "the-new-css-reset"
import styled from "styled-components"
import "@fontsource/montserrat/variable.css"
import "../global.css"

type LayoutProps = {
  pageTitle: string
  children?: React.ReactNode
}

const Container = styled.main`
  max-width: 40em;
  padding: 0 1rem;
  margin: 0 auto;
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

const Layout = ({ pageTitle, children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
