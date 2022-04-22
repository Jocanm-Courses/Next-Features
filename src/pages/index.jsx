import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Index = () => {

    const { push } = useRouter()

    const handleGo = () => {
        push('/users')
    }

    return (
        <div>
            <h1>Next JS Pre-rendering</h1>
            <Link href="/">
                <a>Blog</a>
            </Link>
            <button
                onClick={handleGo} 
            >
                Usuarios
            </button>
        </div>
    )
}

export default Index