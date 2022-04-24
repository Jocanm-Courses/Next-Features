import React from 'react'

const PostList = ({ posts }) => {
    return (
        <div>
            PostList
        </div>
    )
}

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    const props = {
        props: {
            posts: posts.slice(0, 4)
        }
    }

    return props

}

export default PostList