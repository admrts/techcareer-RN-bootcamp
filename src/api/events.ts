import {axios} from '../lib/axios';

export interface EventsDataProps {
  id: string;
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

export async function getAllEvents(): Promise<EventsDataProps[]> {
  const {data} = await axios.get('/events');
  return data;
}
