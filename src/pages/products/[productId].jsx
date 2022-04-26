import React from 'react'

const Product = ({ product }) => {
    return (
        <div>
            <h3>{product.title}</h3>
            <h4>{product.description}</h4>
            <h5>{product.price}</h5>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:4000/products')
    const products = await res.json()
    const paths = products.map(product => ({
        params: {
            productId: `${product.id}`
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:4000/products/${params.productId}`)
    const product = await res.json()

    return {
        props: {
            product
        }
    }
}

export default Product