import { MessageType } from '@/types/message.type'
import Image from 'next/image'
import Link from 'next/link'

type MessageProps = {
    message: MessageType
}

const Message = ({message}: MessageProps) => {
  return (
    <div className="flex">
      <div className="rounded-full p-5 bg-gray-300 w-16 text-center mb-5">
        <span className="font-semibold text-sm">AS</span>
      </div>
      <div className="flex flex-col ml-4 mt-2">
        <div className="flex">
          <h3>{message.name}</h3>
          <div className="text-md ml-2 text-gray-600 cursor-pointer">
            @<Link href={`/users/${message.username}`}>{message.username}</Link>
          </div>
        </div>
        <p>{message.message}</p>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1723754165998-305df32c501e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
            alt="Profile Picture"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Message