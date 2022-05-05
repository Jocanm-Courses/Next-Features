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
                        <h3>{article.category}</h3>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export const getServerSideProps = async ({ params, req, res, query }) => {

    const { category } = params

    res.setHeader('Set-Cookie', ["name=Jose Angarita"])

    console.log(req.headers.cookie)
    console.log(query)

    const resp = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await resp.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}

export default CategoryName