import { MessageType } from "@/types/message.type";
import { PageType } from "@/types/pagination.types";
import { UserType } from "@/types/user.types";
const API_URL = 'http://localhost:8080/api'

export const getUserData = async (username: string): Promise<UserType> => {
    const response = await fetch(`${API_URL}/public/users/${username}`);
  
    if(!response.ok) {
      throw new Error('An error occurred while fetching the data');
    }
  
    return await response.json();
}

export const getUserMessages = async (username: string): Promise<PageType<MessageType>> => {
    const response = await fetch(`${API_URL}/public/users/${username}/messages`);
  
    if(!response.ok) {
      throw new Error('An error occurred while fetching the data');
    }
  
    return await response.json();
  }

  export const getUserMessagesReplies = async (username: string): Promise<PageType<MessageType>> => {
    const response = await fetch(`${API_URL}/public/users/${username}/messages/replies`);
  
    if(!response.ok) {
      throw new Error('An error occurred while fetching the data');
    }
  
    return await response.json();
  }