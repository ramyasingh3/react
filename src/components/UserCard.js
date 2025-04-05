import React from 'react'

function UserCard({name, email, roll}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{roll}</p >
    </div>
  )
}

export default UserCard
