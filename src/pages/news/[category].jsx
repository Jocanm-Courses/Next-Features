import React from 'react'

const CategoryName = ({ articles, category }) => {
    return (
        <>
            <h1>Showing categories for category <i>{category}</i></h1>
            {
                articles.map(article => (
                    <div
                        key={article.id}
                    >
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                    </div>
                ))
            }
        </>
    )
}

export const getServerSideProps = async ({ params }) => {

    const { category } = params

    const resp = await fetch(`http://localhost:4000/news?category${category}`)
    const data = await resp.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}

export default CategoryName