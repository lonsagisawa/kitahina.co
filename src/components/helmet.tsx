import * as React from 'react'

type HelmetProps = {
    pageTitle: string,
}

const Helmet = ({ pageTitle }: HelmetProps) => {
    return (
        <>
            <title>{ pageTitle }</title>
        </>
    )
}

export default Helmet