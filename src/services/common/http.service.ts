import { URLSearchParams } from 'url';

const API_URL = 'http://localhost:8080/api';
const API_PUBLIC_URL = `${API_URL}/public/`;

export const httpGet = async <T>(endpoint: string, params?:URLSearchParams): Promise<T> => {
    const response = await fetch(`${API_PUBLIC_URL}${endpoint}${params ? `?${params}` : ''}`);

    if(!response.ok) {
      throw new Error('An error occurred while fetching the data' + endpoint);
    }

    return response.json();
}