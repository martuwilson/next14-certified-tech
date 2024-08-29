import { UserType } from "../../types/user.types";
import { httpGet } from "../common/http.service";
import { PageType } from '../../types/pagination.types';
import { MessageType } from '../../types/message.type';

class UserApi {
    getUserData = async (username: string): Promise<UserType> => httpGet<UserType>(`users/${username}`);
    getUserMessages = async (username: string): Promise<PageType<MessageType>> => httpGet<PageType<MessageType>>(`users/${username}/messages`);
    getUserMessagesReplies = async (username: string): Promise<PageType<MessageType>> => httpGet<PageType<MessageType>>(`users/${username}/messages/replies`);
}

const userApi = new UserApi();

export default userApi;