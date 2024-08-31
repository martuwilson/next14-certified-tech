import { MessageType } from '@/types/message.type'
import Image from 'next/image'
import Link from 'next/link'
import UserCard, { UserCardLayout } from '../users/UserCard'

type MessageProps = {
  message: MessageType
}

const Message = ({ message }: MessageProps) => {

  return (
    <UserCard
      user={message.user}
      layout={
        UserCardLayout.HORIZONTAL
      }
    >
      <p>
        {message.message}
      </p>
    </UserCard>
  )

}

export default Message