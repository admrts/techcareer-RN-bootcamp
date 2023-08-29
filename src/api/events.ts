import {axios} from '../lib/axios';

export interface EventsDataProps {
  id: number;
  category: string;
  name: string;
  city: string;
  location: string;
  imageUrl: string;
  date: string;
  time: string;
  rules: string;
  price: string;
}

export async function getAllEvents(): Promise<EventsDataProps[] | boolean> {
  try {
    const data = await axios.get('/events');
    return data.data;
  } catch (error) {
    return false;
  }
}
