import {axios} from '../lib/axios';

export interface EventsData {
  id: number;
  category: string;
  name: string;
  city: string;
  location: string;
  imageUrl: string;
  time: string;
  rules: string;
  price: string;
}

export async function getAllEvents(): Promise<EventsData[] | boolean> {
  try {
    const data = await axios.get('/events');
    return data.data;
  } catch (error) {
    return false;
  }
}
