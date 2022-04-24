import React from 'react'
import { useRouter } from 'next/router'

const PostDesc = ({ post }) => {

    const { postId } = useRouter().query

    return (
        <pre>
            {
                JSON.stringify(post, null, 4)
            }
        </pre>
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


export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    const paths = posts.map(post => ({
        params: {
            postId: `${post.id}`
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export default PostDesc