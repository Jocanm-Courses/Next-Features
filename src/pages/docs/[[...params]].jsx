import React from 'react'
import { useRouter } from 'next/router'

const Doc = () => {

    const { params = [] } = useRouter().query

    if (params.length === 2) {
        return (
            <h1>
                Docs for feature {params[0]} and concept {params[1]}
            </h1>
        )
    }

    else if(params.length === 1) {
        return (
            <h1>
                Docs for feature {params[0]}
            </h1>
        )
    }

    return (
        <div>
            Doc Home Page
        </div>
    )
}

export default Doc