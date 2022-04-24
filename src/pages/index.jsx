import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <div>
            <h2>Hello World</h2>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    )
}

export default index