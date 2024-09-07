import React from 'react'
import Link from 'next/link'
import Message from '@/components/messages/Message'
import { UserType } from '@/types/user.types'
import messagesApi from '@/services/messages/messages.service'
import InfiniteScroll from 'react-infinite-scroll-component'
import MessageFedd from '@/components/messages/MessageFeed'
import MessageFeed from '@/components/messages/MessageFeed'

const IndexPage = async () => {

  const messagesResponse = await messagesApi.getMessageFeed(0, 10);


  return (
    <>
      <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8">

          <MessageFeed initialMessages={messagesResponse} />

        </section>
      </main>
    </>
  )
}

export default IndexPage