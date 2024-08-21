import Link from 'next/link'
import React from 'react'

const UserPage = ({params}: {params: {username: string}}) => {

  const user = {
    username: params.username,
    name: 'John Doe',
    bio: 'John Doe is who I am',
    followersCount: 15,
    followingCount: 3,
    messages: [
      {
        message: 'Segundo Mensaje',
        repliesCount: 5
      },
      {
        message: 'Primer Mensaje',
        repliesCount: 3
      }
    ],
    replies: [
      {
        message: 'Segundo Respuesta',
        repliesCount: 5
      },
    ]
  }

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className='flex flex-col mb-8'>
      <div className="rounded-full p-6 bg-gray-300 w-20 text-center mb-5">
        <span className="font-semibold text-lg">JD</span>
      </div>
      <h2 className="font-semibold text-lg mb-1">{user.name}</h2>
      <div className="text-md mb-4 text-gray-600 cursor-pointer">
        @<Link href={`/users/${user.username}`}>{user.username}</Link>
      </div>
      <div className="mb-4">{user.bio}</div>
      <div className="flex justify-between mb-4">
        <div>
          <span className="font-semibold">{user.followersCount} Followers</span>
        </div>
        <div>
          <span className="font-semibold">{user.followingCount} Following</span>
        </div>
      </div>
      </section>

      <div className='flex justify-evenly mb-4'>
        <div className='cursor-pointer border-b-2 border-blue-400'>Messages</div>
        <div className='cursor-pointer'>Replies</div>
      </div>

      <div>
        {user.messages.map((message, index) => (
          <div key={index}>
            <div>{message.message}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default UserPage