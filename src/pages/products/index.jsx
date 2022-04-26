import React from 'react'

const Products = ({ products = [] }) => {

    return (
        <ul>
            {
                products.map(product => (
                    <li key={product.id}>
                        <h4>{product.title} - {product.price}</h4>
                        <h6>{product.description}</h6>
                    </li>
                ))
            }
        </ul>
    )
}

export const getStaticProps = async () => {
    console.log("Revalidating...")
    const res = await fetch('http://localhost:4000/products')
    const products = await res.json()

    const toSend = {
        props: {
            products
        },
        revalidate:1
    }

    return toSend
}

export default Products