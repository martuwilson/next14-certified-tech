import React from 'react'
import Link from 'next/link'
import Message from '@/components/messages/Message'
import { UserType } from '@/types/user.types'
import messagesApi from '@/services/messages/messages.service'

const IndexPage = async () => {

    const messages= await messagesApi.getMessageFeed(0, 10);

  return (
    <>
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
      {messages.content.map((message, index) => (
          <Message key={`${index}`}
            message={message}
            />
        ))}
      </section>
    </main>
    </>
  )
}

export default IndexPage