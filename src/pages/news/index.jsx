import React from 'react'

const NewsPage = ({ articles }) => {

    return (
        <ul>
            {
                articles.map(article => (
                    <li key={article.id}>
                        <h1>
                            {article.title}
                        </h1>
                        <p>
                            {article.description}
                        </p>
                        <h2>
                            {article.category}
                        </h2>
                        <hr />
                    </li>
                ))
            }
        </ul>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:4000/news')
    const data = await res.json()

    return {
        props: {
            articles: data
        },
    }

}

export default NewsPage