'use client'

import { MessageType } from "@/types/message.type"
import { PageType } from "@/types/pagination.types"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import Message from "./Message"
import messagesApi from "@/services/messages/messages.service"

type MessageFeedProps = {
    initialMessages: PageType<MessageType>
}

const MessageFeed = ({ initialMessages }: MessageFeedProps) => {

    const [messageResponse, setMessageResponse] = useState<PageType<MessageType>>(initialMessages)
    const [messages, setMessages] = useState<MessageType[]>(initialMessages.content || []) // Aquí nos aseguramos que sea un array
    const [hasMore, setHasMore] = useState<boolean>(!initialMessages.pagination.last)

    const fetchData = async () => {
        const page = messageResponse.pagination.page + 1
        const response = await messagesApi.getMessageFeed(page, 10)
        setMessageResponse(response)
        setMessages(prevMessages => [...prevMessages, ...response.content])
        setHasMore(!response.pagination.last)
    }

    const refresh = async () => {
        const response = await messagesApi.getMessageFeed(0, 10)
        setMessageResponse(response)
        setMessages(response.content)
        setHasMore(!response.pagination.last)
    }

    return (
        <>
        {messages && (
          <InfiniteScroll
              dataLength={messages.length}
              next={fetchData}
              hasMore={hasMore}
              loader={<h4>Cargando más mensajes</h4>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>¡Yay! Ya viste todo</b>
                </p>
              }
              refreshFunction={refresh}
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8595; Baja para refrescar</h3>
              }
              releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8593; Suelta para refrescar</h3>
              }
            >
              {messages.map((message, index) => (
                <Message key={index}
                  message={message}
                />
              ))}
          </InfiniteScroll>
        )}
        </>
    )
}

export default MessageFeed
