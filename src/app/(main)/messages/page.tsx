import React from 'react'
import Link from 'next/link'
import Message from '@/components/messages/Message'

const MessagesPage = () => {

    const messages= [
        { name: 'Han Solo',
        username: 'Solo',
        message: 'Tercermensaje',
        repliesCount: 5
        },
        {
            name: 'Anakin Skywalker',
            username: 'Anakin',
        message: 'Primer Mensaje',
        repliesCount: 3
        }
    ]

  return (
    <>
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
      {messages.map((message, index) => (
          <Message key={`${index}`}
            message={message}
            />
        ))}
      </section>
    </main>
    </>
  )
}

export default MessagesPage