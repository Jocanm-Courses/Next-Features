import React from 'react'
import { useRouter } from 'next/router'

const PostDesc = ({ post }) => {

    const { isFallback } = useRouter()

    if (isFallback) {
        return (
            <div
                style={{
                    fontSize: '20px',
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                Loading...
            </div>
        )
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export const getStaticProps = async ({ params }) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await response.json()

    const props = {
        props: {
            post
        }
    }

    return props

}

// fallback set to true or blocking
export const getStaticPaths = async () => {
    // return {
    //     paths: [],
    //     fallback: true
    // }
    return {
        paths: [],
        fallback: 'blocking'
    }
}

// fallback set to false

// export const getStaticPaths = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const posts = await response.json()

//     const paths = posts.map(post => (
//         {
//             params: {
//                 postId: `${post.id}`
//             }
//         }
//     ))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default PostDesc