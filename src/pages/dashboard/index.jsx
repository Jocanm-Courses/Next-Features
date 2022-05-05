import React from 'react'
import useSwr from 'swr'

const fetcher = async () => {
    const res = await fetch('http://localhost:4000/dashboard')
    const data = await res.json()
    return data
}

const DashboardPage = () => {

    const { isValidating, data } = useSwr('dashboard', fetcher,{
        
    })

    if(isValidating){
        return <h1>Loading...</h1>
    }

    return (
        <pre>
            {JSON.stringify(data, null, 4)}
        </pre>
    )
}

export default DashboardPage