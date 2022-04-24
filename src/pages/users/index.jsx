import React from 'react'

const Users = ({ users }) => {

    return (
        <pre>
            {
                users.map(e => (
                    <div
                        key={e.id}
                        style={{padding:"20px"}}
                    >
                        <h3>name: {e.name}</h3>
                        <h4>email: {e.email}</h4>
                        <hr />
                    </div>
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