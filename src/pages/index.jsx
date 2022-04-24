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
            <br />
            <Link href="/users">
                <a>
                    Usuarios
                </a>
            </Link>
            <br />
            <Link href="/posts">
                <a>
                    Posts
                </a>
            </Link>
        </div>
    )
}

export default Index