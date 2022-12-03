import * as React from "react"

type HelmetProps = {
  pageTitle: string
}

const Helmet = ({ pageTitle }: HelmetProps): JSX.Element => {
  return (
    <>
      <title>{pageTitle}</title>
    </>
  )
}

export default Helmet
