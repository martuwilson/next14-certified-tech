import { URLSearchParams } from 'url';

const API_URL = 'http://localhost:8080/api';
const API_PUBLIC_ENDPOINT = `/public/`;

export const httpGet = async <T>(endpoint: string, params?:URLSearchParams): Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`,{
      cache: 'no-cache',
    });

    if(!response.ok) {
      throw new Error('An error occurred while fetching the data' + endpoint);
    }

    return response.json();
}
export const httpGetPublic = async <T>(endpoint: string, params?:URLSearchParams): Promise<T> => {
    return httpGet<T>(`${API_PUBLIC_ENDPOINT}${endpoint}`, params);
}