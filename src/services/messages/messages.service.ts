
import { httpGetPublic } from "../common/http.service";
import { PageType } from '../../types/pagination.types';
import { MessageType } from '../../types/message.type';

class MessagesApi {
    getMessageFeed = async (page: number, size: number): Promise<PageType<MessageType>> => httpGetPublic(`messages/feed`,
        new URLSearchParams({
            page: `${page}`,
            size: `${size}`
        })
    );    
}

const messagesApi = new MessagesApi();

export default messagesApi;