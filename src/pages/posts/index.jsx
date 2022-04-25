import React from 'react'
import Link from 'next/link'

const PostList = ({ posts }) => {
    return (
        <div style={{ padding: '20px 40px' }}>
            <h1>List of Posts</h1>
            <hr />
            {
                posts.map(post => (
                    <div
                        key={post.id}
                        style={{ border: "1px solid #ccc", padding: "10px" }}
                    >
                        <Link href={`posts/${post.id}`} passHref>
                            <h2>{post.title}</h2>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    const props = {
        props: {
            // posts: posts.slice(0, 4),
            posts,
        }
    }

    return props

}

export default PostList