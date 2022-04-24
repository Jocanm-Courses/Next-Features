import React from 'react'
import { User } from '../../components/User'

const Users = ({ users }) => {

    return (
        <pre>
            {
                users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                    />
                ))
            }
        </pre>
    )
}

export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    const props = {
        props: {
            users
        }
    }

    return props

}

export default Users