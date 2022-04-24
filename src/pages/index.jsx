import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Index = () => {

    const { push } = useRouter()

    const handleGo = () => {
        push('/blogs')
    }

    return (
        <div>
            <h1>Next JS Pre-rendering</h1>
            <button
                onClick={handleGo}
            >
                Blogs
            </button>
            <Link href="/users">
                <a>
                    Usuarios
                </a>
            </Link>
        </div>
    )
}

export default Index