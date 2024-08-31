import { TrendingUserType, UserType } from '@/types/user.types';
import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'



export enum UserCardLayout {
    HORIZONTAL,
    VERTICAL
}

const divClasses = {
    [UserCardLayout.HORIZONTAL]: "flex",
    [UserCardLayout.VERTICAL]: "flex flex-col"
}

const linkClasses = {
    [UserCardLayout.HORIZONTAL]: "ml-2 text-md text-gray-600 cursor-pointer",
    [UserCardLayout.VERTICAL]: "text-md text-gray-600 cursor-pointer"
}

type UserCardProps = PropsWithChildren & {
    user: TrendingUserType | UserType;
    layout: UserCardLayout;
}

const UserCard = ({ user, layout, children }: UserCardProps) => {
    return (
        <div className="mb-4">

            <div className="mb-4 grid grid-cols-12">
                <div className="w-full h-full mt-1 text-center mb-4 block relative col-span-2 h-20 flex items-center justify-center">
                    <Image
                        src={user.photoUrl}
                        alt={user.name}
                        className="rounded-full"
                        width={60}
                        height={60}
                        /* se puede hacer con width y height sin necesidad del block, relative, etc */
                        priority
                        blurDataURL={user.photoUrl}
                        placeholder='blur'
                    />
                </div>
                <div className="flex flex-col ml-4 mt-2 col-span-10">
                    <div className={
                        divClasses[layout]
                    }>
                        <h3>{user.name}</h3>
                        <div className={
                            linkClasses[layout]
                        }>
                            @<Link href={`/users/${user.username}`}>{user.username}</Link>
                        </div>
                    </div>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default UserCard