import React from 'react'
import { useRouter } from 'next/router'

const ReviewDetails = () => {

    const { reviewId, productId } = useRouter().query

    return (
        <div>
            Review {reviewId} of Product {productId}
        </div>
    )
}

export default ReviewDetails