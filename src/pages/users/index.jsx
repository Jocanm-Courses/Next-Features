import React from 'react'

const Users = ({ users }) => {

    return (
        <pre>
            {
                users.map(e => (
                    <h3 key={e.id}>{e.name}</h3>
                ))
            }
        </pre>
    )
}

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {
            users: users
        }
    }

}

export default Users