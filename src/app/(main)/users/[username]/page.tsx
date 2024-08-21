import React from 'react'

const UserPage = ({params}: {params: {username: string}}) => {
  return (
    <div>NOMBRE DE USUARIO: {params.username}</div>
  )
}

export default UserPage