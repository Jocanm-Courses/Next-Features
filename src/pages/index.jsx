import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Index = () => {

    return (
        <div>
            <h1>Next JS Server-side-rendering</h1>
            <Link href="/news">
                <a>
                    Noticias
                </a>
            </Link>
        </div>
    )
}

export default Index