import React from 'react'

export const User = ({ user }) => {
    return (
        <div
            key={user.id}
            style={{ padding: "20px" }}
        >
            <h3>name: {user.name}</h3>
            <h4>email: {user.email}</h4>
            <hr />
        </div>
    )
}
