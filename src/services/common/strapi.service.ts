import { URLSearchParams } from 'url';

const API_URL = 'http://localhost:1337/api';

export const strapiGet = async <T>(endpoint: string, params?:URLSearchParams): Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`,{
        headers:{
            'Authorization': `Bearer ${process.env.CMS_STRAPI_TOKEN}`
            
        }
    });

    if(!response.ok) {
      throw new Error('An error occurred while fetching the data from Strapi' + endpoint);
    }

    return response.json();
}