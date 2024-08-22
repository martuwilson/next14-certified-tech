import Message from '@/components/messages/Message';
import UserTabs from '@/components/users/UserTabs';
import Link from 'next/link'
import React from 'react'

const UserPage = ({params}: {params: {username: string}}) => {

  const user = {
    username: params.username,
    name: 'Anakin Skywalker',
    bio: 'Im from Tatooine, I like to podrace and I am a Jedi Knight. I am the father of Luke Skywalker and Leia Organa.',
    followersCount: 15,
    followingCount: 3,
    messages: [
      { name: 'Anakin Skywalker',
        username: 'Anakin',
        message: 'Segundo Mensaje',
        repliesCount: 5
      },
      {
        name: 'Anakin Skywalker',
        username: 'Anakin',
        message: 'Primer Mensaje',
        repliesCount: 3
      }
    ],
    replies: [
      {
        name: 'Anakin Skywalker',
        username: 'Anakin',
        message: 'Segundo Respuesta',
        repliesCount: 5
      },
    ]
  }

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <div className="rounded-full p-6 bg-gray-300 w-20 text-center mb-5">
          <span className="font-semibold text-lg">AS</span>
        </div>
        <h2 className='mb-1'>{user.name}</h2>
        <div className="text-md mb-4 text-gray-600 cursor-pointer">
          @<Link href={`/users/${user.username}`}>{user.username}</Link>
        </div>
        <div className="mb-4">{user.bio}</div>
        <div className="flex justify-between mb-4">
          <div>
            <span className="font-semibold">
              {user.followersCount} Followers
            </span>
          </div>
          <div>
            <span className="font-semibold">
              {user.followingCount} Following
            </span>
          </div>
        </div>
      </section>
      <UserTabs messages={user.messages} replies={user.replies} />
    </main>
  );
}

export default UserPage