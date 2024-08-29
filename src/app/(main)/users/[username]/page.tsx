import Message from '@/components/messages/Message';
import UserTabs from '@/components/users/UserTabs';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { UserType } from '@/types/user.types';


const getUserData = async (username: string): Promise<UserType> => {
  const response = await fetch(`http://localhost:8080/api/public/users/${username}`);

  if(!response.ok) {
    throw new Error('An error occurred while fetching the data');
  }

  return await response.json();
}


const UserPage = async ({params}: {params: {username: string}}) => {

  const user = await getUserData(params.username);


  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <div className="rounded-full text-center mb-4 block relative w-20 h-20">
          <Image
          src={user.photoUrl}
          alt="Profile Picture"
          className="rounded-full"
          fill
          /* se puede hacer con width y height sin necesidad del block, relative, etc */
          priority
          blurDataURL={user.photoUrl}
          placeholder='blur'
          />
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
      <UserTabs messages={[]} replies={[]} />
    </main>
  );
}

export default UserPage